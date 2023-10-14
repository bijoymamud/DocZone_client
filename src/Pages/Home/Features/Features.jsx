import React from 'react';
import { CiVideoOn } from "react-icons/ci";

const Features = () => {
  return (
    <section>
      <div className='container'>
        <div className='flex justify-end items-center gap-3 flex-col lg:flex-row-reverse mx-auto '>

          <div className="w-full mb-5 md:mb-0 lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h1 className='text-5xl font-extrabold pb-10 tracking-normal'>Proud to be one of the <br />Nations best</h1>
            <div className="text-gray-500">
              <p className='pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus praesentium provident aliquid quam excepturi atque a, rem totam alias autem dolore eveniet sequi? Pariatur id impedit provident officia natus quod, saepe laudantium accusamus fugit enim iste deleniti est consectetur illo!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptates nostrum quod sed reiciendis aut commodi, eaque sapiente quibusdam quos nisi rerum sint tenetur eos assumenda. Consectetur sint rem ex.</p>
            </div>

            <button className='btn drop-shadow-lg btn-sm mt-10 bg-primary text-white hover:bg-green-500'>Learn More</button>
          </div>

          <div className='relative xl:w-[770px] flex justify-end mt-16 lg:mt-0 z-10 '>
            <img className='drop-shadow-lg w-3/4' src="https://i.ibb.co/KzFLTPV/feature-img.png" alt="" />


            <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2  lg:pt-4 lg:px-4 lg:pb-6 rounded-md shadow-lg shadow-indigo-500/40'>

              <div className="flex items-center justify-between  ">
                <div className='flex items-center gap-3 lg:gap-5'>
                  <p className='text-md leading-3  lg:leading-5 text-black font-bold'>Web, 28</p>
                  <p className='text-md text-gray-500 leading-3  lg:leading-5  font-semibold'>12.30 PM</p>
                </div>
                <span className='w-5 h-5 lg:w-8 lg:h-8 flex items-center justify-center lg:bg-yellow-600 rounded '>
                  <CiVideoOn className='text-2xl md:text-white' />
                </span>
              </div>

              <div className=''>
                <button className='btn-primary hover:bg-green-500 bg-pink-500 p-1 rounded-sm mt-3 text-white'>Constitution</button>
              </div>

            </div>

          </div>


        </div>
      </div>
    </section>
  );
};

export default Features;