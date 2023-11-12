import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

  const [passShow, setPassShow] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()


  const onSubmit = () => {
    event.preventDefault()
  }


  return (
    <div className='Auth_bg'>

      <div className='min-h-screen hero'>
        <div className='items-center justify-between gap-12 px-3 md:flex'>
          <div className='md:w-1/2'>
            <img src='https://i.ibb.co/jDMz1bj/login-page-banner.png' alt='' />

          </div>
          <div className='flex-shrink-0 w-full  ag-transparent border   rounded-lg shadow-xl md:w-1/2 card backdrop-blur-sm'>
            <div className='text-center '>
              <h1 className='my-5 text-4xl font-bold '>Login</h1>
            </div>
            <div className='card-body'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-control'>
                  <label className='label'>
                    <span className='font-bold label-text'>Email</span>
                  </label>
                  <input
                    {...register('email', { required: true })}
                    type='email'
                    placeholder='email'
                    className=' ag-transparent input input-bordered'
                  />
                  {errors.email && (
                    <span className='mt-1 aext-red-500'>
                      Email field is required
                    </span>
                  )}
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Password</span>
                  </label>
                  <input
                    {...register('password', { required: true })}
                    type={passShow ? 'text' : 'password'}
                    placeholder='enter your password'
                    className=' ag-transparent input input-bordered'
                  />
                  <div className='flex justify-between mb-5 '>
                    <a onClick={() => setPassShow(!passShow)}>
                      <small>
                        {passShow ? (
                          <span>Hide Pass</span>
                        ) : (
                          <span>Show Pass</span>
                        )}
                      </small>
                    </a>
                    <a href='#'>Forgot password?</a>
                  </div>
                </div>
                <div className='form-control '>
                  <input
                    className='btn btn-primary '
                    type='submit'
                    value={'Login'}
                  />
                </div>
              </form>
              <div className='text-center mb-7'>
                <div className='divider divide-red-50'></div>
                <p className='font-semibold'>Or Sign In with</p>
                <div className='flex items-center justify-center gap-4 my-2'>
                  {/* <SocialLogin></SocialLogin> */}
                </div>
                <p className='text-center'>
                  Don't Have Any Account?{' '}
                  <Link className='link link-hover' to='/register'>
                    Click Here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;