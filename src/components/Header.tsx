import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-[#2E6D68] text-white p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">BURHAN</h1>
    <nav className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/weoffer">WeOffer</Link>
      <Link to="/aboutus">About Us</Link>
      <Link to="/contact">Contact</Link>
      
    </nav>
  </header>
);

export default Header;
