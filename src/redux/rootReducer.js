import { combineReducers } from "@reduxjs/toolkit";
import stepReducer from "../features/step/stepSlice";
import cartReducer from "../features/cart/cartSlice";

const rootReducer = combineReducers({
  step: stepReducer,
  cart: cartReducer,
});

export default rootReducer;
