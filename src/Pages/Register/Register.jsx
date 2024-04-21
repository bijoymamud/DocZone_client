import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

  const [passShow, setPassShow] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm();

  const password = watch('password');

  const { createUser, updateUserProfile, GoogleSignIn } = useContext(AuthContext)
  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    GoogleSignIn()
      .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
        fetch(' https://doctor-appoinment-server-nine.vercel.app/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
          .then(res => res.json())
          .then(() => {
            navigate(from, { replace: true });
          })
      })
  }

  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);

        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const saveUser = { name: data.name, email: data.email }
            fetch(' https://doctor-appoinment-server-nine.vercel.app/users', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
              .then(res => res.json())
              .then(data => {
                if (data.insertedId) {
                  console.log(data);
                  reset();
                  Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'User created successfully.',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/');
                }
              })



          })
          .catch(error => console.log(error))
      })
  };

  return (


    <div className='min-h-screen hero container mx-auto'>
      <div className='items-center justify-evenly gap-10 px-3 md:flex'>
        <div className='md:w-2/6'>
          <img src='https://i.ibb.co/jDMz1bj/login-page-banner.png' alt='' />

        </div>
        <div className='flex-shrink-0 w-full   md:w-1/2 card backdrop-blur-sm'>
          <div className='text-center '>
            <h1 className='my-5 text-4xl font-bold '>
              Registration
            </h1>
          </div>
          <div className='  card-body'>
            <form onSubmit={handleSubmit(onSubmit)} className='! '>
              <div className='grid-cols-2 gap-3 md:grid'>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text dark:text-gray-400'>Name</span>
                  </label>
                  <input
                    {...register('name', { required: true })}
                    type='text'
                    placeholder='Enter your name'
                    className=' dark:bg-gray-900 text-white input input-bordered'
                  />
                  {errors.name && <span>This field is required</span>}
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text dark:text-gray-400'>Email</span>
                  </label>
                  <input
                    {...register('email', { required: true })}
                    type='email'
                    placeholder='Enter your email'
                    className=' dark:bg-gray-900 text-white input input-bordered'
                  />
                  {errors.email && <span>This field is required</span>}
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text dark:text-gray-400'>Password</span>
                  </label>
                  <input
                    {...register('password', {
                      required: 'Password field is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters'
                      }
                    })}
                    type={passShow ? 'text' : 'password'}
                    placeholder='Enter your password'
                    className=' dark:bg-gray-900 text-white input input-bordered'
                  />
                  {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
                  {/* <label className='label'>
                    <a className='label-aext-alt link link-hover'>
                      <p onClick={() => setPassShow(!passShow)}>
                        <small>
                          {passShow ? (
                            <span>Hide Pass</span>
                          ) : (
                            <span>Show Pass</span>
                          )}
                        </small>
                      </p>
                    </a>
                  </label> */}

                </div>

                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text dark:text-gray-400'>Confirm Password</span>
                  </label>
                  <input
                    {...register('confirm', {
                      required: 'Confirm password field is required',
                      validate: value =>
                        value === password || 'Passwords do not match'
                    })}
                    type={passShow ? 'text' : 'password'}
                    placeholder='Confirm password'
                    className=' dark:bg-gray-900 text-white input input-bordered'
                  />
                  {errors.confirm && <span className='text-red-600'>{errors.confirm.message}</span>}
                  {errors.confirm && <span className='text-red-600 mt-1'>This field is required</span>}
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text dark:text-gray-400'>Contact Number</span>
                  </label>
                  <input
                    {...register('number', { required: true })}
                    type='number'
                    placeholder='+880'
                    className=' dark:bg-gray-900 text-white input input-bordered'
                  />
                  {errors.number && <span>This field is required</span>}
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text dark:text-gray-400'>Image URL</span>
                  </label>

                  <input
                    {...register('photoURL', { required: true })}

                    type='text'
                    placeholder='Image URL'
                    className=' dark:bg-gray-900 text-white input input-bordered'
                  />

                  {errors.photo && (
                    <span className='mt-1 aext-red-500'>
                      Image field is required
                    </span>
                  )}
                </div>
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text dark:text-gray-400'>Address</span>
                </label>
                <input
                  {...register('address', { required: true })}
                  type='text'
                  placeholder='Enter your Address'
                  className=' dark:bg-gray-900 text-white input input-bordered'

                />
              </div>
              <div className='mt-5 form-control '>
                <button className='btn text-white btn-primary'>Registration</button>
              </div>
            </form>
            <div className="flex items-center pt-4 space-x-1" bis_skin_checked="1">
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700" bis_skin_checked="1"></div>
              <p className="px-3 text-md mx-auto text-center dark:text-black">Register with</p>
              <div className="flex-1 h-px sm:w-16 bg-gray-700" bis_skin_checked="1"></div>
            </div>
            <div className="flex justify-center space-x-4" bis_skin_checked="1">
              <button onClick={() => handleGoogleLogin()} aria-label="Log in with Google" className="p-3 rounded-sm">
                <FcGoogle className='text-gray-400 text-3xl' />
              </button>

            </div>
            <p className="text-sm text-center mx-auto sm:px-6 dark:text-gray-400">Don't have an account?
              <Link to="/login" rel="noopener noreferrer" href="#" className=" font-extrabold ms-2  dark:text-gray-500">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Register;