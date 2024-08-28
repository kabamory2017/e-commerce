import { memo } from "react";
import ProductItem from "./ProductItem";
// import { CartContext } from "../contexts/CartContext";
// import { toast } from "react-toastify";
// memo => [composant, function => previous state, current state]
const ProductList = memo(({ products }) => {
  // const {setCart } = useContext(CartContext);
  // console.log("ProductList");

  // todo : fixed quantity error
  // const addToCart = useCallback((product) => {
  //   setCart((prevCart) => {
  //     let index = prevCart.findIndex((item) => item.product.id === product.id);
  //     if (index !== -1) {
  //       // increment quantity in cart
  //       const newCart = [...prevCart];
  //       // newCart[index].quantity = newCart[index].quantity + 1
  //       newCart[index].quantity += 1;
  //       localStorage.setItem("CART", JSON.stringify(newCart));
  //       return newCart;
  //     }

  //     let result = [...prevCart, {product: product, quantity: 1}];
  //     localStorage.setItem("CART", JSON.stringify(result));
  //     return result;
  //   });
  //   toast(`Added ${product.title} to cart`);
  // }, [setCart]);

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-12 col-md-3 mb-3">
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  );
});

export default ProductList;
