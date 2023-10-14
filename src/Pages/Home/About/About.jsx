import React from 'react';

const About = () => {
  return (
    <section>
      <div className='container'>
        <div className='flex justify-between items-center gap-30 flex-col lg:flex-row '>
          <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
            <img className='drop-shadow-lg' src="https://i.ibb.co/Z1wTWGL/about.png" alt="" />
            <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
              <img src="https://i.ibb.co/RjNkmgN/about-card.png" alt="" />
            </div>
          </div>

          <div className="w-full mb-5 md:mb-0 lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h1 className='text-5xl font-extrabold pb-10 tracking-normal'>Proud to be one of the <br />Nations best</h1>
            <div className="text-gray-500">
              <p className='pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus praesentium provident aliquid quam excepturi atque a, rem totam alias autem dolore eveniet sequi? Pariatur id impedit provident officia natus quod, saepe laudantium accusamus fugit enim iste deleniti est consectetur illo!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptates nostrum quod sed reiciendis aut commodi, eaque sapiente quibusdam quos nisi rerum sint tenetur eos assumenda. Consectetur sint rem ex.</p>
            </div>

            <button className='btn drop-shadow-lg btn-sm mt-10 bg-primary text-white hover:bg-green-500'>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;