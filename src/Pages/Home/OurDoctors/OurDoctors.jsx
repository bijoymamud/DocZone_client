import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import SingleDoc from "../SingleDoc/SingleDoc";


const OurDoctors = () => {
  const { user } = useContext(AuthContext)
  console.log(user);
  const [doctors, setDoctors] = useState([]);
  const [displayCount, setDisplayCount] = useState(3);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/doctor")
      .then(res => res.json())
      .then(data => setDoctors(data))
  }, [])


  const handleSeeMore = () => {
    setShowAll(true);
    setDisplayCount(doctors.length);
  }

  return (
    <section className="md:py-28 py-20">
      <div className="container  mx-auto">
        <div className=''>
          <div className="md:my-20">
            <h2 className='text-4xl text-center font-bold pb-3'>Our Great Doctors</h2>
            <p className='w-5/6 text-center mx-auto text-gray-500'>Empowering Health, Inspiring Hope: Our Great Doctors, Your Wellness Journey.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mx-auto ms-2 pt-10 ">
            {
              doctors.slice(0, displayCount).map(doctor => <SingleDoc key={doctor._id}
                doctor={doctor}
              ></SingleDoc>)
            }
          </div>
        </div>
      </div>

      <div className='text-center md:mt-20 md:mb-36 font'>

        {!showAll && (
          <button onClick={handleSeeMore} className='btn btn-wide bg-sky-200 hover:bg-green-400'>See More</button>
        )}
      </div>


    </section>
  );
};

export default OurDoctors;