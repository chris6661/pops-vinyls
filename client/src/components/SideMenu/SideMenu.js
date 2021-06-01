import "./SideMenu.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideMenu = ({ show, click }) => {
  const SideMenuClass = ["SideMenu"];

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  if (show) {
    SideMenuClass.push("show");
  }

  return (
    <div className={SideMenuClass.join(" ")}>
      <ul className="SideMenu__links" onClick={click}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart{" "}
              <span className="SideMenu__cartbadge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;