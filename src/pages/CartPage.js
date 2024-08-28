import { useCallback, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "../components/CartItem";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const CartPage = () => {
  // const { cart, setCart } = useContext(CartContext);

  const cart = useSelector((state) => state.cart);
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // const deleteItem = useCallback((item) => {
  //   setCart((prevCart) => {
  //       const newCart = prevCart.filter(element => element.product.id !== item.product.id)
  //       localStorage.setItem("CART", JSON.stringify(newCart));
  //       return newCart;
  //   });
  //   toast(`${item.product.title} removed from cart`);
  // }, [setCart]);

  // const modifyQuantity = useCallback((item, increment) => {
  //   if (item.quantity + increment === 0) {
  //       deleteItem(item);
  //       return;
  //   }

  //   setCart((prevCart) => {
  //       const newCart = prevCart.map(element => {
  //           if(element.product.id === item.product.id){
  //               return {
  //                   ...element,
  //                   quantity : element.quantity + increment
  //               }
  //           }

  //           return element;
  //       })
  //       localStorage.setItem("CART", JSON.stringify(newCart));
  //       return newCart;
  //   })

  // }, [setCart, deleteItem]);

  return (
    <>
      <h1>Cart</h1>
      <div>
        {cart.length === 0 && <h6>Cart is empty</h6>}
        {cart.map((item) => (
          <CartItem key={item.product.id} cartItem={item} />
        ))}
      </div>
    </>
  );
};

export default CartPage;
