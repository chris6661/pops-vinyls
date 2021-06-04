import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Auth from '../utils/auth';

const Navbar = ({ click }) => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/"><h2>Home</h2></Link>
      </div>

      <ul className="navbar__links">
        <li>
        {Auth.loggedIn() ? (
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        ) : (
          <>
          </>
        )}
        </li>
        
        <li>
        {Auth.loggedIn() ? (
            <>
              <a className="navbar__text" href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link className="navbar__text" to="/login">Login</Link>
            </>
          )}
        </li>
        <li>
        {Auth.loggedIn() ? (
            <>
            </>
          ) : (
            <>
              <Link className="navbar__text" to="/signup">Signup</Link>
            </>
          )}
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
