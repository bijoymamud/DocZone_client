import React from 'react';
import { FaStar } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import docDetails from "../../../../public/doctors.json";
const DocDetails = () => {

  const { id } = useParams();
  console.log(id);

  const info = docDetails.find((detail) => detail.id == id)

  return (
    <section className='container w-5/6
    '>

      <div className='flex justify-between'>

        <div>
          <div>
            <img src={info.img} alt="" />
          </div>

          <div className='text-start'>
            <h2>{info.specialty}</h2>
            <h2>{info.name}</h2>
            <p className='flex items-center gap-1'><FaStar className='text-orange-500' /><span className='font-bold'>{info.avgRating}</span><span className='ms-1 text-gray-400'>({info.totalRating})</span></p>
          </div>
        </div>

        <div>
          <h2>For visit</h2>
        </div>
      </div>

    </section>
  );
};

export default DocDetails;