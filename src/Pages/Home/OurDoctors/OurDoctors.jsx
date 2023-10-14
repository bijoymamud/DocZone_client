import { useEffect, useState } from "react";
import SingleDoc from "../SingleDoc/SingleDoc";


const OurDoctors = () => {

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("../../../../public/doctors.json")
      .then(res => res.json())
      .then(data => setDoctors(data))
  }, [])

  return (
    <section className="md:py-28">
      <div className="container  mx-auto">
        <div className=''>
          <h2 className='text-4xl text-center font-bold pb-3'>Our Great Doctors</h2>
          <p className='w-5/6 text-center mx-auto text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <div className="grid md: grid-cols-3 gap-10 mx-auto ms-2 pt-10 ">
            {
              doctors.map(doctor => <SingleDoc key={doctor.id}
                doctor={doctor}
              ></SingleDoc>)
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDoctors;