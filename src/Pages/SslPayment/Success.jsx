// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import CheckoutForm from './CheckoutForm';

// const Success = () => {

//   const location = useLocation();
//   const params = new URLSearchParams(location.search);

//   const name = params.get('name');
//   const price = params.get('price')
//   console.log(name, price);


//   const stripePromise = loadStripe(import.meta.env.VITE_stripeSecretKey)


//   return (
//     <div>
//       <h3>Payment page</h3>

//       <Elements stripe={stripePromise}>
//         <CheckoutForm price={price} name={name}></CheckoutForm>
//       </Elements>
//     </div>
//   );
// };

// export default Success;