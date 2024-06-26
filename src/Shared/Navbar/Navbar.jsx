import { useContext } from "react";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const { isAdmin } = useAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }

  // const isAdmin = false;

  const navItems = <>


    <li tabIndex={0}>
      <Link className='font-bold text-lg' to="/">Home</Link>

    </li>
    <li tabIndex={0}>
      <Link className='font-bold text-lg' to="/findDoc">Find Doctor</Link>

    </li>

    <li tabIndex={0}>
      <Link className='font-bold text-lg' to="/services">Services</Link>

    </li>

    <li tabIndex={0}>
      <Link className='font-bold text-lg' to="/contact">Contact</Link>
    </li>

    {
      user ?
        <li tabIndex={0}>
          <Link className='font-bold text-lg' to="/beDoctor">Be a Doctor</Link>
        </li> :
        <li></li>
    }




  </>
  return (
    <div className="navbar  h-24 navbar2 sticky__header md:px-20  ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}


          </ul>
        </div>
        <img className="w-[150px]" src="https://i.ibb.co/M7yTS6m/mydoczone-mankhurd-mumbai-homeopathic-clinics-mj2g6s4lkl-removebg-preview.png" alt="" />

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">

          {
            navItems
          }


        </ul>
      </div>
      <div className="navbar-end">
        <div className='flex items-center gap-5'>
          {/* {user &&
            <div className="tooltip  tooltip-left mt-10" data-tip={user.displayName}>
              <button>  <img className='h-[40px] w-[40px] rounded-full' src={user?.photoURL} alt="" /> </button>
            </div>
          } */}

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className=" ">
              {user &&
                <div className="tooltip  tooltip-left mt-10" data-tip={user.displayName}>
                  <button >  <img className=' mb-1 h-[40px] w-[40px] rounded-full' src={user?.photoURL} alt="" /> </button>
                </div>
              }
            </label>
            <ul tabIndex={0} className="dropdown-content 
             menu p-2 shadow bg-yellow-50 rounded w-48">



              {
                isAdmin ? <>
                  <li><Link to='/dashboard/manageUser
              '>Dashboard</Link></li></> : <>
                  <li><Link to='/dashboard/myAppointments
              '>Dashboard</Link></li></>
              }


            </ul>
          </div>

          {user ?
            <button onClick={handleLogOut} className=""> <FaArrowRightFromBracket className="text-red-400 text-xl" />  </button> :
            <Link to='/login'>
              <button className=" btn">Login</button>
            </Link>

          }
        </div>

      </div>
    </div >
  );
};

export default Navbar;