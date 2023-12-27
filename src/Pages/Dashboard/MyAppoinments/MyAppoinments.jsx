import React, { useContext } from 'react';
import useMyAppoinment from '../../../hooks/useMyAppoinment';
import { BookingContext } from '../../../providers/BookingProvider';

const MyAppoinments = () => {

  const { booking } = useContext(BookingContext);
  console.log(booking);

  const [myAppintment] = useMyAppoinment();
  console.log(myAppintment);
  return (
    <div>
      <div className='w-full'>

        <h1>appooinment: {myAppintment.length}</h1>
        <div>
          <div className="overflow-x-auto md:ms-40">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Payment</th>

                </tr>
              </thead>
              <tbody>
                {
                  myAppintment.map((bookings, index) => <tr key={bookings._id}>
                    <th>{index + 1}</th>
                    <td>{bookings.name}</td>
                    <td>{bookings.specialty}</td>
                    <td>{bookings.price}</td>
                    <td>
                      <button className='btn btn-sm'>Pay</button>
                    </td>


                  </tr>
                  )
                }


              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MyAppoinments;