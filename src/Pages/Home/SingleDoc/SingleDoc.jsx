
import { FaArrowCircleRight, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleDoc = ({ doctor }) => {

  const { id, name, specialty, avgRating, totalRating, img, totalPatients, hospital, experience } = doctor;


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
            <Link to={`/singleDoc/${id}`}>
              <FaArrowCircleRight className='text-xl' />
            </Link>
          </div>
          <div>
            {/* Display the experience based on doctor's structure */}
            {/* {experience.length > 0 ? (
              <div>
                <h3>Experience:</h3>
                {experience.map((exp, index) => (
                  <div key={index}>
                    <p>{exp.title} <br /> {exp.hospital} <br /> {exp.from} </p>
                  </div>
                ))}
              </div>
            ) : (
              <p>No experience data available</p>
            )} */}

          </div>

        </div>
      </div >
    </section >
  );
};

export default SingleDoc;