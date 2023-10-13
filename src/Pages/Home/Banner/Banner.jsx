import React from 'react';



const Banner = () => {
  return (
    <section className='hero__section pt-10  md:pt-36 md:pb-36 2xl:h-[850px'>
      <div className="container">
        <div className='flex flex-col lg:flex-row gap-24 items-start justify-between'>
          {/**=====bannersection===== */}
          <div >
            <div className="lg:w-[570px] ">
              <h1 className='text-6xl  font-extrabold tracking-normal'>We Help Patients <br /> Live a Healthy,<br /> Longer Life</h1>
              <p className='pt-5 text-gray-500 pb-5 w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vel illo veniam, nam architecto assumenda nesciunt quis tempore quam ex suscipit repudiandae, dolores officiis sed.</p>
            </div>

            <button className='btn btn-wide bg-primary text-white hover:bg-green-500 '>Request Appointment</button>

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
  );
};

export default Banner;