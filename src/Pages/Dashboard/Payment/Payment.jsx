import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useMyAppoinment from "../../../hooks/useMyAppoinment";
import CheckOutForm from "./CheckoutForm";



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {

  const [myAppintment] = useMyAppoinment();
  const total = myAppintment.reduce((sum, appoinment) => sum + appoinment.price, 0)
  const price = parseFloat(total.toFixed(2))

  return (
    <div className="p-10
    ">
      {/* <SectionTitle title={"Payment"}></SectionTitle> */}
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm myAppintment={myAppintment} price={price} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;