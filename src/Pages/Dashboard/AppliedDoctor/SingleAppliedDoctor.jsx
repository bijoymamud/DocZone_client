import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleAppliedDoctor = ({ appliedDoctors }) => {

  const { firstName, photo } = appliedDoctors;

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
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img className='w-[300px] h-[300px]' src={photo} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {firstName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div onClick={handleApprove} className="badge badge-outline hover:bg-green-600 hover:border-none hover:text-white hover:cursor-pointer">Approve</div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default SingleAppliedDoctor;