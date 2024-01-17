import React, { useEffect, useState } from 'react';
import FindSingleDoc from './FindSingleDoc';

const FindDoc = () => {

  const [findDoctors, setfindDoctors] = useState([]);

  useEffect(() => {
    fetch("https://doctor-appoinment-server-nine.vercel.app/doctor")
      .then(res => res.json())
      .then(data => setfindDoctors(data))
  }, [])



  return (
    <div className='container  md:my-20'>
      <h2 className='text-center text-3xl font-extrabold'>Our Doctors</h2>

      <p className='w-2/6 text-center md:mt-5 mx-auto text-gray-500'>Discovering Wellness, One Doctor at a Time: Find Your Perfect Partner in Health with Our Great Doctors.</p>


      <div className='grid md:grid-cols-3 ms-10 gap-16 md:py-20'>
        {
          findDoctors.map((findDoctor) => <FindSingleDoc key={findDoctor.id}
            findDoctor={findDoctor}
          ></FindSingleDoc>)
        }
      </div>
    </div>
  );
};

export default FindDoc;