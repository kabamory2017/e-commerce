import { memo } from "react";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeProduct,
} from "../stores/CartSlice";

const CartItem = memo(({ cartItem }) => {
  const dispatch = useDispatch();

  console.log("CartItem");
  return (
    <div className="mb-4 card d-flex flex-row justify-content-between align-items-center p-3">
      <div className="d-flex align-items-center">
        <img
          className="cart-image"
          alt={cartItem.product.title}
          src={cartItem.product.thumbnail}
        />
        <div>
          <h6>{cartItem.product.title}</h6>
          <h5 className="text-primary">${cartItem.product.price}</h5>
        </div>
      </div>

      <div className=" d-flex flex-row justify-content-between align-items-center p-3">
        <button
          onClick={() => dispatch(incrementQuantity(cartItem.product))}
          className="btn btn-sm btn-primary"
        >
          <i className="bi bi-plus"></i>
        </button>
        <span className="mx-3">{cartItem.quantity}</span>
        <button
          onClick={() => dispatch(decrementQuantity(cartItem.product))}
          className="btn btn-sm btn-primary"
        >
          <i className="bi bi-dash"></i>
        </button>
      </div>

      <div>
        <button
          onClick={() => dispatch(removeProduct(cartItem.product.id))}
          className="btn btn-sm btn-danger"
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
});

export default CartItem;
