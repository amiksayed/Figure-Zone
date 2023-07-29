import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/fig-zone.png";
const Header = () => {
  return (
    <header>
      <div className="search-bar">
        <div className="search-bar-position">
          <input type="text" placeholder="Search..." />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>

      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <div className="buttons-div">
        <div className="mail-content-div">
          <button>
            <i className="fa-solid fa-envelope"></i>
          </button>

          <div>
            <h3>Email Us</h3>
            <p>info@example.com</p>
          </div>
        </div>
        <div className="cart-content-div">
          <button>
            <i className="fa-solid fa-cart-shopping"></i>
          </button>

          <div>
            <h3>Shopping Cart</h3>
            <p>$ 0.00 - 0 item</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
