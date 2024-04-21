import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useMyAppoinment from '../../../hooks/useMyAppoinment';
import { AuthContext } from '../../../providers/AuthProvider';
import { BookingContext } from '../../../providers/BookingProvider';

const MyAppoinments = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { booking } = useContext(BookingContext);
  console.log(booking);

  const [myAppintment] = useMyAppoinment();
  console.log(myAppintment);
  const total = myAppintment.reduce((sum, appoinment) => appoinment.price + sum, 0)






  return (
    <div>
      <div className=' w-full md:gap-28 items-center mb-10 grid grid-cols-3 text-center'>
        <h1>Appooinment: {myAppintment.length}</h1>
        <h1>Total Price: $ {total}</h1>
        <Link className='btn btn-sm hover:btn-success' to="/dashboard/payment">PAY</Link >
      </div>
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
                  <th>Price</th>


                </tr>
              </thead>
              <tbody>
                {
                  myAppintment.map((bookings, index) => <tr key={bookings._id}>
                    <th>{index + 1}</th>
                    <td>{bookings.name}</td>
                    <td>{bookings.specialty}</td>
                    <td>$ {bookings.price}</td>
                    <td>
                      {/* <Link to={`/success?name=${bookings.name}&price=${bookings.price}`}>PAY</Link > */}

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

