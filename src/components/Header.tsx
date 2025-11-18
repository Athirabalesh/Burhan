import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-[#2E6D68] text-white p-4 flex flex-col md:flex-row md:justify-between md:items-center">
    <h1 className="text-xl font-bold mb-2 md:mb-0 text-center md:text-left">BURHAN INTERNATIONAL</h1>
    <nav className="flex flex-wrap justify-center space-x-4">
      <Link to="/" className="hover:text-gray-300">Home</Link>
      <Link to="/products" >Products</Link>
      <Link to="/weoffer" >We Offer</Link>
      <Link to="/aboutus" >About Us</Link>
      <Link to="/contact" >Contact</Link>
    </nav>
  </header>
);

export default Header;
