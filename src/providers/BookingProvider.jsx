import React, { createContext, useState } from 'react';

export const BookingContext = createContext(null)

const BookingProvider = ({ children }) => {



  const [booking, setBooking] = useState([])

  const handleBooking = (bookings) => {
    setBooking(prevBooking => [...prevBooking, bookings])
  }

  console.log(booking);

  return (
    <BookingContext.Provider value={{ booking, handleBooking }} >
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;