import React from 'react';
import { Link } from 'react-router-dom';

import { FaArrowAltCircleRight } from "react-icons/fa";

const Banner = () => {
  return (
    <>

      <section className='hero__section pt-10  md:pt-36 md:pb-36 2xl:h-[850px]'>
        <div className="container">
          <div className='flex flex-col lg:flex-row gap-24 items-start justify-between'>
            {/**=====bannersection===== */}
            <div >
              <div className="lg:w-[570px] ">
                <h1 className='text-6xl  font-extrabold tracking-normal'>We Help Patients <br /> Live a Healthy,<br /> Longer Life</h1>
                <p className='pt-5  pb-3 text-gray-500 w-5/6'>Empowering Healthier Lives, Extending Lifelines: Our Mission is to Guide Patients Towards Optimal Health and Longevity, Ensuring Every Moment Counts on the Path to Wellness and Vitality.</p>
              </div>

              <Link to='/ourDoctor' className='btn btn-wide bg-primary text-white hover:bg-green-500 '>Request Appointment</Link>

              <div className='flex gap-20 pt-20 cursor-pointer'>

                <div>
                  <h1 className='text-4xl font-extrabold'>30+</h1>
                  <span className='w-[90px] h-2 bg-yellow-500 rounded-full block mt-[-12px] pb-2 mb-3'></span>
                  <p className='text-gray-500 font-extrabold'>Years of Experience</p>
                </div>

                <div>
                  <h1 className='text-4xl font-extrabold'>15+</h1>
                  <span className='w-[90px] h-2 bg-purple-500 rounded-full block mt-[-12px] pb-2 mb-3'></span>
                  <p className='text-gray-500 font-extrabold'>Clinic Location</p>
                </div>

                <div>
                  <h1 className='text-4xl font-extrabold'>100%</h1>
                  <span className='w-[90px] h-2 bg-sky-400 rounded-full block mt-[-12px] pb-2 mb-3'></span>
                  <p >Patient Satisfaction</p>
                </div>

              </div>
            </div>

            {/* https://i.ibb.co/XJT5J2F/hero-img03.png
https://i.ibb.co/Hhcf0RB/hero-img02.png
https://i.ibb.co/HD6Z6Ys/hero-img01.png */}
            <div className='flex gap-8 justify-end'>
              <div>
                <img src="https://i.ibb.co/HD6Z6Ys/hero-img01.png" alt="" />
              </div>

              <div className='mt-8'>
                <img className='mb-5' src='https://i.ibb.co/Hhcf0RB/hero-img02.png' alt="" />
                <img src="https://i.ibb.co/XJT5J2F/hero-img03.png" alt="" />
              </div>
            </div>

          </div>




        </div>

      </section>


      <section className='py-20'>
        <div className='text-center'>
          <h2 className='text-4xl font-bold pb-3'>Providing the Best <br /> Medical Services</h2>
          <p className='md:w-1/3 px-5 pb-10 mx-auto text-gray-500'>Experience Exceptional Healthcare: Our Dedicated Team Delivers Top-notch Medical Services, Guided by Compassion, Expertise, and a Commitment to Your Optimal Health and Wellness.</p>
        </div>


        {/* https://i.ibb.co/MpxS4vt/icon02.png
        https://i.ibb.co/L1qWP6n/icon01.png */}

        <div className='grid md:grid-cols-3 gap-20 text-center mx-auto md:py-28'>
          <div className='text-center'>
            <img className='mx-auto ' src="https://i.ibb.co/L1qWP6n/icon01.png" alt="" />
            <h1 className='pt-10 pb-3  font-extrabold  text-2xl'>Find a Doctor</h1>
            <p className='md:w-1/2 px-10 md:px-0 mx-auto text-gray-500'>Your Health Partner Awaits: Connect with the Right Doctor for You, Start Your Journey to Better Health Today.</p>

            <Link >
              <FaArrowAltCircleRight className='mx-auto text-2xl mt-3 ' />
            </Link>
          </div>

          <div className='text-center mx-auto'>
            <img className='mx-auto' src="https://i.ibb.co/MpxS4vt/icon02.png" alt="" />
            <h1 className='pt-10 pb-3 font-extrabold  text-2xl'>Find Location</h1>
            <p className='md:w-1/2 px-10 md:px-0 mx-auto text-gray-500'>Discover Your Destination: Find Our Conveniently Located Facilities and Begin Your Journey to Health and Wellness Today.</p>
            <Link >
              <FaArrowAltCircleRight className='mx-auto text-2xl mt-3 ' />
            </Link>
          </div>

          <div className='text-center'>
            <img className='mx-auto' src="https://i.ibb.co/FWkhmdm/icon03.png" alt="" />
            <h1 className='pt-10 pb-3 font-extrabold text-2xl'>Book Appointment</h1>
            <p className='md:w-1/2 px-10 md:px-0 mx-auto text-gray-500'>Effortless Booking, Expert Care: Secure Your Appointment Today and Experience Personalized Healthcare Tailored to Your Needs.</p>
            <Link >
              <FaArrowAltCircleRight className='mx-auto text-2xl mt-3 ' />
            </Link>
          </div>


        </div>
      </section>
    </>


  );
};

export default Banner;