import React from 'react';

const SingleService = ({ service }) => {

  const { type, img, description } = service;
  return (
    <>

      <div className="card mx-auto mt-14 md:mt-0 w-96 bg-base-100 shadow-xl">
        <figure><img className='w-full h-[364px]' src={img} alt="medical " /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {type}

          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">

          </div>
        </div>
      </div>
    </>
  );
};

export default SingleService;