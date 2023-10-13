import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";


const Main = () => {
  return (
    <div
      className={`
  `}
    >
      <Navbar />
      <div  >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;