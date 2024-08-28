import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
// import { CartContext } from './contexts/CartContext';
// import { useState } from 'react';
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { CART_STORE } from "./stores/store";
// import ProductPage from './pages/ProductPage';

// cart: []
// cartItem : {product: product=>object, quantity}
function App() {
  // const [cart, setCart] = useState(JSON.parse(localStorage.getItem("CART")) || []);
  return (
    // <CartContext.Provider value={{
    //   cart,
    //   setCart
    // }}>
    <Provider store={CART_STORE}>
      <div className="App">
        <NavBar />
        <div className="container-fluid container-md mt-3">
          <Outlet />
        </div>
        {/* <NavBar />
        <div className='container-fluid container-md mt-3'>
          <ProductPage />
        </div> */}
        <ToastContainer />
      </div>
    </Provider>
    // </CartContext.Provider>
  );
}

export default App;
