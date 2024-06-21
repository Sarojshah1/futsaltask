import { useForm } from 'react-hook-form';
import axios from 'axios';

const BookingForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post('/api/bookings', data);
      alert('Booking successful!');
    } catch (error) {
      console.error('Error booking:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Futsal Ground</label>
        <input {...register('ground', { required: true })} className="border p-2 w-full" />
        {errors.ground && <span className="text-red-500">This field is required</span>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Date</label>
        <input type="date" {...register('date', { required: true })} className="border p-2 w-full" />
        {errors.date && <span className="text-red-500">This field is required</span>}
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2">Book Now</button>
    </form>
  );
};

export default BookingForm;
