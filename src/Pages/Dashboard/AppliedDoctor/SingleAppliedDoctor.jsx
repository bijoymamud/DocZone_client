import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleAppliedDoctor = ({ appliedDoctors }) => {

  const { name, photo, specialty } = appliedDoctors;

  const handleApprove = () => {
    toast.success('Successfully Approved', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }


  return (
    // <div className="card w-96 bg-base-100 shadow-xl">
    //   <figure><img className='w-[300px] h-[300px]' src={photo} alt="Shoes" /></figure>
    //   <div className="card-body">
    //     <h2 className="card-title">
    //       {firstName}
    //       <div className="badge badge-secondary">NEW</div>
    //     </h2>
    //     <p>If a dog chews shoes whose shoes does he choose?</p>
    //     <div className="card-actions justify-end">
    //       <div onClick={handleApprove} className="badge badge-outline hover:bg-green-600 hover:border-none hover:text-white hover:cursor-pointer">Approve</div>
    //       <ToastContainer />
    //     </div>
    //   </div>
    // </div>

    <div>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure><img className='w-full h-[350px]' src={photo} alt={name} /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions flex items-center justify-between mb-2">
            <button className="btn btn-sm mb-2 hover:bg-sky-200 bg-sky-200">{specialty}</button>
            {/* <div  >
              <p className='flex items-center justify-between gap-2'><FaStar className='text-yellow-500' /> {avgRating} <span className='text-gray-500'>({totalRating})</span></p>
            </div> */}
          </div>

        </div>
      </div>
    </div>
  );
};

export default SingleAppliedDoctor;