import React from 'react';
import { FaStar } from 'react-icons/fa';

const FindSingleDoc = ({ findDoctor }) => {

  const { id, name, specialty, avgRating, totalRating, img, } = findDoctor;
  return (

    <section >
      {/* <div className="card card-compact shadow-none w-5/6 mx-auto bg-base-100 ">
        <figure><img className='w-full' src={img} alt="Shoes" /></figure>
        <div className="">
          <h2 className="card-title py-4">{name}</h2>

          <div className="card-actions flex items-center justify-between mb-2">
            <button className="btn btn-sm mb-2 hover:bg-sky-200 bg-sky-200">{specialty}</button>
            <div  >
              <p className='flex items-center justify-between gap-2'><FaStar className='text-yellow-500' /> {avg_Rating} <span className='text-gray-500'>({total_Rating})</span></p>
            </div>
          </div>



        </div>

      </div> */}
      <div className="card card-compact w-5/6 bg-base-100 shadow-xl">
        <figure><img className='w-full h-[350px]' src={img} alt={name} /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions flex items-center justify-between mb-2">
            <button className="btn btn-sm mb-2 hover:bg-sky-200 bg-sky-200">{specialty}</button>
            <div  >
              <p className='flex items-center justify-between gap-2'><FaStar className='text-yellow-500' /> {avgRating} <span className='text-gray-500'>({totalRating})</span></p>
            </div>
          </div>

        </div>
      </div>
    </section>


  );
};

export default FindSingleDoc;