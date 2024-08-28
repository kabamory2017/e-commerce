import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

export const CART_STORE =  configureStore({
    reducer: {
        cart: cartReducer
    }
})