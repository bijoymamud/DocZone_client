import React from 'react';
import useBeDoctor from '../../../hooks/useBeDoctor';
import SingleAppliedDoctor from './SingleAppliedDoctor';

const AppliedDoctor = () => {
  const [beDoctor] = useBeDoctor();

  return (
    <div>
      <h2><span className='text-gray-500'>Total Applied Doctor:</span> <span className='font-extrabold'>{beDoctor.length}</span></h2>

      <div className='md:grid grid-cols-2 mx-auto gap-20 md:pt-20'>
        {
          beDoctor.map((appliedDoctors) => <SingleAppliedDoctor key={appliedDoctors.id}
            appliedDoctors={appliedDoctors}
          ></SingleAppliedDoctor>)
        }
      </div>
    </div>
  );
};

export default AppliedDoctor;