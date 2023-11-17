import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";


const Main = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter = location.pathname.includes('login') ||
    location.pathname.includes('register') || location.pathname.includes('dashboard')
  return (
    <div>
      {noHeaderFooter || <Navbar />}

      <Outlet />

      {noHeaderFooter || <Footer />}

    </div>
  );
};

export default Main;