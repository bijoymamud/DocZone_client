import React from 'react';
import { FaStar } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import docDetails from "../../../../public/doctors.json";
const DocDetails = () => {

  const { id } = useParams();
  console.log(id);

  const info = docDetails.find((detail) => detail.id == id)

  return (
    <section className='container w-4/6 md:py-32
    '>

      <div className='flex gap-10 mx-auto'>

        <div className='flex gap-5 '>
          <div>
            <img className='h-[200px] w-[200px]' src={info.img} alt="" />
          </div>

          <div className='text-start '>
            <button className="btn btn-sm mb-2 hover:bg-sky-200 bg-sky-200 mt-2">{info.specialty}</button>
            <div className='py-3'>
              <h2 className='card-title mt-1'>{info.name}</h2>
              <p className='flex items-center gap-1 my-1'><FaStar className='text-orange-500' /><span className='font-bold'>{info.avgRating}</span><span className='ms-1 text-gray-400'>({info.totalRating})</span></p>
            </div>
            <p className='text-gray-500 pt-3 w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>

        <div>
          <div className=' p-5 shadow-xl rounded-md'>
            <div className=' flex items-center justify-between gap-20'>
              <h1 className='text-gray-600 font-semibold'>Ticket Price</h1>
              <h1 className='font-extrabold  card-title'>{info.visitPrice}</h1>
            </div>

            <div >
              <h2 className='font-extrabold mt-10 pb-2 '>Available Time Slots:</h2>

              <ul className='text-gray-500'>
                {info?.visitingHours.map((slot) => (
                  <li className='flex items-center justify-between gap-10 py-1' key={slot.day}>
                    {slot.day}: <span className='font-bold'>{slot.hours}</span>
                  </li>
                ))}
              </ul>

            </div>
            <div className='text-center'>
              <button className='bg-primary text-white btn btn-wide mt-5 hover:bg-green-600 hover:text-white'>BOOK APPOINMENT</button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default DocDetails;