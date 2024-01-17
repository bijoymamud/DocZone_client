import React, { useContext, useState } from 'react';
import useMyAppoinment from '../../../hooks/useMyAppoinment';
import { BookingContext } from '../../../providers/BookingProvider';

const MyAppoinments = () => {

  const { booking } = useContext(BookingContext);
  console.log(booking);
  const [bookingDetails, setBookingDetails] = useState([])

  const [myAppintment] = useMyAppoinment();
  console.log(myAppintment);






  return (
    <div>
      <div className='w-full'>

        <h1 className='underline text-md md:mb-5'>Your Appooinments:  <span className='font-extrabold'>{myAppintment.length}</span></h1>
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
                      {/* Open the modal using document.getElementById('ID').showModal() method */}
                      <button className="btn" onClick={() => (document.getElementById('my_modal_2').showModal(), setBookingDetails(bookings))}>PAY</button>

                    </td>





                  </tr>
                  )
                }


              </tbody>
            </table>
          </div>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">{bookingDetails.name}</h3>
              <p className="py-4">{bookingDetails.specialty}</p>
              <p className="py-4">Amount to Pay: <span className='ms-2 font-extrabold'>{bookingDetails.price} BDT</span></p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>

      </div>
    </div>
  );
};

export default MyAppoinments;

