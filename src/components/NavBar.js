// import { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import { CartContext } from "../contexts/CartContext";

const NavBar = () => {
  // const { cart } = useContext(CartContext);
  // const cart = useSelector(cartReducer);
  // const cart = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart);

  // const cart = [];
  console.log(cart);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-2">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          E-commerce app
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                Cart
              </NavLink>
            </li>
          </ul>
          <NavLink className="btn btn-primary position-relative" to="/cart">
            {/* <button type="button" className="btn btn-primary position-relative"> */}
            <i className="bi bi-cart"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
            </span>
            {/* </button> */}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
