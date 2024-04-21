import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../providers/AuthProvider';
// import './CheckoutForm.css';

const CheckoutForm = ({ myAppintment, price }) => {
  console.log(price);
  const { user } = useContext(AuthContext)

  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  // useEffect(() => {
  //   axiosSecure.post('/create-payment-intent', { price })
  //     .then(res => {
  //       console.log(res.data.clientSecret);
  //       setClientSecret(res.data.clientSecret)
  //     })
  // }, [price, axiosSecure]);


  // useEffect(() => {
  //   fetch("http://localhost:5000/create-payment-intent", {


  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(price)
  //   })

  //     .then(data => console.log(data))
  // }, [price])

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('error', error)
      setCardError(error.message);
    }
    else {
      setCardError('');
      console.log('payment method', paymentMethod);

    }

    setProcessing(true)


    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,

      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'anonymous',
            name: user?.displayName || 'anonymous'
          },
        },
      },
    );

    if (confirmError) {
      console.log(confirmError);
    }

    console.log('payment intent', paymentIntent);

    setProcessing(false);

    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id)

      //save payment info in server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: myAppintment.length,
        //cart item
        doctorId: myAppintment.map(doctor => doctor._id),
        //menu item
        appoinmentId: myAppintment.map(doctor => doctor.id),
        status: 'Service Pending',
        doctorName: myAppintment.map(doctor => doctor.name)

      }
      axiosSecure.post('/payments', payment)
        .then(res => {
          console.log(res.data);
          if (res.data.result.insertedId) {

          }
        })
    }

  }

  return (
    <>
      <h2 className='md: mb-5'>Incert your card number :  </h2>

      <form className='w-96' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='mt-5 btn  btn-sm hover:btn-error hover:text-white' type="submit " disabled={!stripe || !clientSecret || processing}>
          PAY
        </button>
      </form>
      {cardError && <p className='text-red-500 mt-2'>{cardError}</p>}
      {transactionId && <p className='text-green-600 mt-2'>Transaction Completed with TransactionID: <span className='text-amber-600 font-semibold'>{transactionId}</span></p>}
    </>
  );
};

export default CheckoutForm;