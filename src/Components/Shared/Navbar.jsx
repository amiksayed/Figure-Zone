import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav className="nav-bar">
        <NavLink className="nav-link">Home</NavLink>
        <NavLink className="nav-link">All Toys</NavLink>
        <NavLink className="nav-link">Blogs</NavLink>
        <NavLink className="nav-link">About Us</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
