import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {

  const {
    register,
    handleSubmit,

    formState: { errors }
  } = useForm()
  return (
    <div className='Auth_bg'>

      <div className='min-h-screen hero container mx-auto'>
        <div className='items-center justify-between gap-10 px-3 md:flex'>
          <div className='md:w-1/2'>
            <img src='https://i.ibb.co/jDMz1bj/login-page-banner.png' alt='' />

          </div>
          <div className='flex-shrink-0 w-full  ag-transparent border   rounded-lg shadow-xl md:w-1/2 card backdrop-blur-sm'>
            <div className='text-center '>
              <h1 className='my-5 text-4xl font-bold '>
                Registration
              </h1>
            </div>
            <div className='  card-body'>
              <form onSubmit={handleSubmit()} className='! '>
                <div className='grid-cols-2 gap-3 md:grid'>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Name</span>
                    </label>
                    <input
                      {...register('name', { required: true })}
                      type='text'
                      placeholder='Enter your name'
                      className=' ag-transparent input input-bordered'
                    />
                    {errors.name && <span>This field is required</span>}
                  </div>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Email</span>
                    </label>
                    <input
                      {...register('email', { required: true })}
                      type='email'
                      placeholder='Enter your email'
                      className=' ag-transparent input input-bordered'
                    />
                    {errors.email && <span>This field is required</span>}
                  </div>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Password</span>
                    </label>
                    <input
                      {...register('password', {
                        required: 'Password field is required',
                        minLength: {
                          value: 6,
                          message: 'Password must be at least 6 characters'
                        }
                      })}
                      type={'password'}
                      placeholder='Enter your password'
                      className=' ag-transparent input input-bordered'
                    />
                    <label className='label'>
                      <a className='label-aext-alt link link-hover'>

                      </a>
                    </label>
                    {errors.password && <span>{errors.password.message}</span>}
                  </div>

                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Confirm Password</span>
                    </label>
                    <input
                      {...register('confirm', {
                        required: 'Confirm password field is required',

                      })}
                      type={'password'}
                      placeholder='Confirm password'
                      className=' ag-transparent input input-bordered'
                    />
                    {errors.confirm && <span>{errors.confirm.message}</span>}
                  </div>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Contact Number</span>
                    </label>
                    <input
                      {...register('number', { required: true })}
                      type='number'
                      placeholder='+880'
                      className=' ag-transparent input input-bordered'
                    />
                    {errors.number && <span>This field is required</span>}
                  </div>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Image</span>
                    </label>
                    <div className='items-center border-2 rounded-lg form-control   '>
                      <input
                        {...register('image', { required: true })}
                        name='image'
                        type='file'
                        className='w-full col-span-5  ag-transparent  file-input'
                      />
                    </div>
                    {errors.image && (
                      <span className='mt-1 aext-red-500'>
                        Image field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Address</span>
                  </label>
                  <input
                    {...register('address', { required: true })}
                    type='text'
                    placeholder='Enter your Address'
                    className=' ag-transparent input input-bordered'
                  />
                </div>
                <div className='mt-5 form-control'>
                  <button className='btn btn-primary'>Registration</button>
                </div>
              </form>
              <div className='text-center'>
                <div className='divider divide-red-50'></div>

                <div className='flex items-center justify-center gap-4 my-2'>

                </div>
                <p>
                  Already Have Any Account?{' '}
                  <Link className='link link-hover' to='/login'>
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

export default Register;