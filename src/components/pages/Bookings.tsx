import BookingForm from "../BookingForm";
import BookingList from "../BookingList";


const Bookings = () => {
  return (
    <div className="p-4">
      <BookingForm />
      <BookingList />
    </div>
  );
};

export default Bookings;
