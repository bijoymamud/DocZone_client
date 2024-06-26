import React from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BeDoctor = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Make a POST request to your server endpoint
      const response = await fetch(' http://localhost:5000/beDoctor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        console.log('Submission successful');
        toast.success('Submitted Successfully', {
          position: 'bottom-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      } else {
        // Handle the case where the server returns an error
        console.error('Submission failed');
        toast.error('Submission Failed', {
          position: 'bottom-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      }
    } catch (error) {
      console.error('Error submitting form', error);
      toast.error('Error submitting form', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  // const onSubmit = (data) => {
  //   console.log(data);

  //   // toast.success('Submitted Successfully', {

  //   //   position: "bottom-center",
  //   //   autoClose: 3000,
  //   //   hideProgressBar: false,
  //   //   closeOnClick: true,
  //   //   pauseOnHover: true,
  //   //   draggable: true,
  //   //   progress: undefined,
  //   //   theme: "dark",
  //   // });

  // }

  return (
    <div>
      <div className='min-h-screen container pt-5  mx-auto'>

        <section>
          <div >
            <div className='text-center '>
              <h1 className='my-6 text-4xl  '>
                <span className='text-xl text-gray-500'> Your Expertise, Our Wellness</span> <br /> <span className='text-green-700 font-bold'>Apply to Heal Lives Today</span>
              </h1>
            </div>

            <div className='items-center  justify-evenly gap-20 px-3 md:flex'>

              <div >
                <img className='md:full' src='https://i.ibb.co/g3JJD9v/2206-removebg-preview.png' alt='' />

              </div>
              <div className='flex-shrink-0 w-full   md:w-1/2 card backdrop-blur-sm'>

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
                          placeholder='Enter First Name'
                          className=' dark:bg-gray-900 text-white input input-bordered'
                        />
                        {errors.name && <span>This field is required</span>}
                      </div>

                      <div className='form-control'>
                        <label className='label'>
                          <span className='label-text dark:text-gray-400'>Specialty</span>
                        </label>
                        <input
                          {...register('specialty', { required: true })}
                          type='text'
                          placeholder='Enter Specialty'
                          className=' dark:bg-gray-900 text-white input input-bordered'
                        />
                        {errors.specialty && <span>This field is required</span>}
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
                          <span className='label-text dark:text-gray-400'>Personal Image URL</span>
                        </label>

                        <input
                          {...register('photo', { required: true })}
                          name='photo'
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

                      <div className='form-control'>
                        <label className='label'>
                          <span className='label-text dark:text-gray-400'>Age</span>
                        </label>
                        <input
                          {...register('age', { required: true })}
                          name='age'
                          type='number'
                          placeholder='Your age'
                          className=' dark:bg-gray-900 text-white input input-bordered'
                        />
                        {errors.age && <span>This field is required</span>}
                      </div>

                      <div className='form-control'>
                        <label className='label'>
                          <span className='label-text dark:text-gray-400'>Experience</span>
                        </label>
                        <input
                          {...register('experience', { required: true })}
                          name='experience'
                          type='number'
                          placeholder='Your Experience'
                          className=' dark:bg-gray-900 text-white input input-bordered'
                        />
                        {errors.experience && <span>This field is required</span>}
                      </div>

                      <div className='form-control'>
                        <label className='label'>
                          <span className='label-text dark:text-gray-400'>Certificate Link</span>
                        </label>
                        <input
                          {...register('certificate', { required: true })}
                          name='certificate'
                          type='text'
                          placeholder='Certificate Link'
                          className=' dark:bg-gray-900 text-white input input-bordered'
                        />
                        {errors.certificate && <span>This field is required</span>}
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
                      <button className='btn  btn-primary text-white hover:bg-green-600 border-none'>Submit</button>
                    </div>
                  </form>

                </div>

              </div>

            </div>
          </div>
          <ToastContainer />
        </section>

      </div>

    </div>

  );
};

export default BeDoctor;