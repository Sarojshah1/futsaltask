import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-between">
        <li><Link to="/" className="text-white">Home</Link></li>
        <li><Link to="/bookings" className="text-white">Bookings</Link></li>
        <li><Link to="/grounds" className="text-white">Grounds</Link></li>
        <li><Link to="/profile" className="text-white">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
