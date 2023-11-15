import React, { useEffect, useState } from 'react';
import FindSingleDoc from './FindSingleDoc';

const FindDoc = () => {

  const [findDoctors, setfindDoctors] = useState([]);

  useEffect(() => {
    fetch("../../../public/findDoc.json")
      .then(res => res.json())
      .then(data => setfindDoctors(data))
  }, [])



  return (
    <div className='container  md:my-20'>
      <h2 className='text-center text-3xl font-extrabold'>Our Doctors</h2>
      <div className='grid md:grid-cols-3 gap-16 md:py-20'>
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