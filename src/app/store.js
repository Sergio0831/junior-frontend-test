import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import modalReducer from "../features/modalSlice";
import currencyReducer from "../features/currencySlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    currency: currencyReducer
  }
});
