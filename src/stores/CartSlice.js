// use cart in redux store
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cartItems")) || [],
  reducers: {
    addProduct: (state, action) => {
      let index = state.findIndex(
        (value) => value.product.id === action.payload.id
      );
      if (index !== -1) {
        state[index].quantity += 1;
      } else {
        state.push({
          product: action.payload,
          quantity: 1,
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state));
      toast.success("add to cart successfully!");
    },
    removeProduct: (state, action) => {
      const statee = state.filter((item) => item.product.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(statee));
      return statee;

      toast.success("remove from cart successfully!");
    },
    incrementQuantity: (state, action) => {
      let index = state.findIndex(
        (value) => value.product.id === action.payload.id
      );
      if (index !== -1) {
        state[index].quantity += 1;
        console.log("oui");
      }
      localStorage.setItem("cartItems", JSON.stringify(state));
    },
    decrementQuantity: (state, action) => {
      let index = state.findIndex(
        (value) => value.product.id === action.payload.id
      );
      if (index !== -1 && state[index].quantity > 1) {
        state[index].quantity -= 1;
        console.log("oui");
        localStorage.setItem("cartItems", JSON.stringify(state));
      } else {
        const statee = state.filter(
          (item) => item.product.id !== action.payload.id
        );
        localStorage.setItem("cartItems", JSON.stringify(statee));
        return statee;
        toast.success("remove from cart successfully!");
      }
    },
  },
});

export const {
  addProduct,
  removeProduct,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
