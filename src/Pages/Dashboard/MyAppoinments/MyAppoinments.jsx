import React, { useContext } from 'react';
import { BookingContext } from '../../../providers/BookingProvider';

const MyAppoinments = () => {

  const { booking } = useContext(BookingContext);
  console.log(booking);
  return (
    <div>
      <div className='w-full'>


        <div>
          <div className="overflow-x-auto md:ms-40">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Category</th>

                </tr>
              </thead>
              <tbody>
                {
                  booking.map((bookings, index) => <tr key={bookings._id}>
                    <th>{index + 1}</th>
                    <td>{bookings.name}</td>
                    <td>{bookings.specialty}</td>


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