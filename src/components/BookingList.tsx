import { useEffect, useState } from 'react';
import axios from 'axios';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await axios.get('/api/bookings');
      setBookings(response.data);
    };

    fetchBookings();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Your Bookings</h2>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id} className="border p-2 mb-2">
            Ground: {booking.ground}, Date: {booking.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;
