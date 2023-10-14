import React from 'react';
import { FaArrowCircleRight, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleDoc = ({ doctor }) => {

  const { id, name, specialty, avgRating, totalRating, img, totalPatients, hospital } = doctor;
  return (
    <section className=''>
      <div className="card card-compact shadow-none w-5/6 mx-auto bg-base-100 ">
        <figure><img className='w-full' src={img} alt="Shoes" /></figure>
        <div className="">
          <h2 className="card-title py-4">{name}</h2>

          <div className="card-actions flex items-center justify-between mb-2">
            <button className="btn btn-sm mb-2 hover:bg-sky-200 bg-sky-200">{specialty}</button>
            <div  >
              <p className='flex items-center justify-between gap-2'><FaStar className='text-yellow-500' /> {avgRating} <span className='text-gray-500'>({totalRating})</span></p>
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <div>
              <p className='font-extrabold' >+{totalPatients} patients</p>
              <small className='text-gray-500'>{hospital}</small>
            </div>
            <Link to='/doctors'>
              <FaArrowCircleRight className='text-xl' />
            </Link>
          </div>

        </div>
      </div >
    </section>
  );
};

export default SingleDoc;