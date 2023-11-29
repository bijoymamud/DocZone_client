import React, { useContext } from 'react';
import { FaHome, FaPhoneAlt, FaSearch, FaWallet } from "react-icons/fa";
import { FaAddressBook, FaFilePen } from 'react-icons/fa6';
import { Link, Outlet } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';

const Dashboard = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Log Out Successful',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(error => console.log(error))
  }

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







            <div className='absolute flex items-center space-x-4 mt-28 bottom-5 p-2'>
              <div className='avatar w-10 h-10'>
                <img
                  src={user?.photoURL}
                  alt=''
                  className='rounded-full '
                />
              </div>
              <div className={`${!open && 'hidden'} origin-left duration-200`}>
                <h2 className='text-sm font-semibold'>{user?.displayName}</h2>
                <span className='flex items-center space-x-1'>
                  <a
                    onClick={handleLogout}
                    rel='noopener noreferrer'
                    href='#'
                    className='text-xs hover:underline'
                  >
                    Logout
                  </a>
                </span>
              </div>
            </div>

          </ul>



        </div>
      </div>
    </section >
  );
};

export default Dashboard;