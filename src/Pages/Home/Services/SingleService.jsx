import React from 'react';

const SingleService = ({ service }) => {

  const { type, img, description } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img className='w-full h-[364px]' src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {type}

        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;