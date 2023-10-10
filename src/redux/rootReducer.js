import { combineReducers } from "@reduxjs/toolkit";
import stepReducer from "../features/step/stepSlice";
import cartReducer from "../features/cart/cartSlice";
import professionalReducer from "../features/professionals/professionalsSlice";
import serviceReducer from "../features/services/servicesSlice";

const rootReducer = combineReducers({
  step: stepReducer,
  cart: cartReducer,
  professionals: professionalReducer,
  services: serviceReducer,
});

export default rootReducer;
