import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const { id } = useParams();
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search)
  // console.log(queryParams);
  const location = useLocation();
  const { bookingInfo } = location.state || {};

  return (
    <div>
      <h2>Payment Component</h2>
      {bookingInfo ? (
        <div>
          <p>Name: {bookingInfo.name}</p>
          <p>Specialty: {bookingInfo.specialty}</p>
          <p>Price: {bookingInfo.price}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>No booking information found.</p>
      )}
    </div>
  );
};

export default Success;