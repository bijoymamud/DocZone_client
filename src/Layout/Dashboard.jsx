import React from 'react';
import { FaHome, FaPhoneAlt, FaSearch, FaWallet } from "react-icons/fa";
import { FaAddressBook, FaFilePen } from 'react-icons/fa6';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <section className='container mx-auto'>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><Link><FaAddressBook />My Appoinments</Link></li>
            <li><Link className='mt-1'><FaWallet />Payment</Link></li>
            <li><Link className='mt-1'><FaFilePen />Review</Link></li>

            <div className="divider"></div>
            <li><Link to="/"><FaHome />Home</Link></li>
            <li><Link to="/findDoc"><FaSearch />Find Doctor</Link></li>
            <li><Link to="/contact"><FaPhoneAlt />Contact</Link></li>

          </ul>

        </div>
      </div>
    </section >
  );
};

export default Dashboard;