import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';


const Register = () => {

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const image = form.image.value;
    const name = form.displayName.value;
    const address = form.address.value;
    const number = form.number.value;
    console.log(email, password, confirm, image, name, address, number);
  }

  return (
    <div className='Auth_bg '>

      <div className='min-h-screen py-16  container mx-auto'>
        <div className='items-center justify-between gap-10 px-3 md:flex'>
          <div className='md:w-2/6'>
            <img src='https://i.ibb.co/jDMz1bj/login-page-banner.png' alt='' />

          </div>
          <div className='flex-shrink-0 w-full  bg-transparent   rounded-lg  md:w-1/2 card backdrop-blur-sm'>
            <div className='text-center '>
              <h1 className='my-5 text-4xl font-bold '>
                Registration
              </h1>
            </div>
            <div className='  card-body'>
              <form onSubmit={handleSignUp} className='! '>
                <div className='grid-cols-2 gap-3 md:grid'>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Name</span>
                    </label>
                    <input
                      name='displayName'
                      type='text'
                      required
                      placeholder='Enter your name'
                      className='dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 ag-transparent input input-bordered'
                    />

                  </div>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Email</span>
                    </label>
                    <input
                      name='email'
                      type='email
                      required'
                      placeholder='Enter your email'
                      className='dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 ag-transparent input input-bordered'
                    />

                  </div>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Password</span>
                    </label>
                    <input
                      name='password'
                      type='password'
                      required
                      placeholder='Enter your password'
                      className='dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 ag-transparent input input-bordered'
                    />
                    <label className='label'>
                      <a className='label-aext-alt link link-hover'>

                      </a>
                    </label>

                  </div>

                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Confirm Password</span>
                    </label>
                    <input
                      name='confirm'
                      type='password'
                      required
                      placeholder='Confirm password'
                      className='dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 ag-transparent input input-bordered'
                    />

                  </div>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Contact Number</span>
                    </label>
                    <input
                      name='number'
                      type='numbe
                      requiredr'
                      placeholder='+880'
                      className='dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 ag-transparent input input-bordered'
                    />

                  </div>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Image</span>
                    </label>
                    <div className='items-center border-2 rounded-lg form-control   '>
                      <input

                        name='image'
                        type='file'
                        required
                        className=' w-full col-span-5  ag-transparent  file-input'
                      />
                    </div>

                  </div>
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Address</span>
                  </label>
                  <input
                    name='address'
                    type='text'
                    required
                    placeholder='Enter your Address'
                    className='dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 ag-transparent input input-bordered'
                  />
                </div>
                <div className='mt-5 form-control'>
                  <button className='btn btn-primary'>Registration</button>
                </div>
              </form>
              <div className='text-center'>
                {/* <div className='divider divide-red-50'></div>

                <div className='flex items-center justify-center gap-4 '>

                </div>
                <p>
                  Already Have Any Account?{' '}
                  <Link className='link link-hover' to='/login'>
                    Click Here
                  </Link>
                </p> */}

                <div className="flex items-center pt-4 space-x-1" bis_skin_checked="1">
                  <div className="flex-1 h-px sm:w-16 dark:bg-gray-700" bis_skin_checked="1"></div>
                  <p className="px-3 text-sm dark:text-black">SignUp with</p>
                  <div className="flex-1 h-px sm:w-16 bg-gray-700" bis_skin_checked="1"></div>

                </div>
                <FcGoogle className='text-center mx-auto mt-3 text-2xl' />
                <p className="text-sm mt-2 text-center mx-auto sm:px-6 dark:text-gray-400">Already have an account?
                  <Link to="/login" rel="noopener noreferrer" href="#" className=" font-extrabold ms-2  dark:text-gray-500">SignIn</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Register;