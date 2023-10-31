import { combineReducers } from "@reduxjs/toolkit";
import stepReducer from "../features/step/stepSlice";
import cartReducer from "../features/cart/cartSlice";
import shopReducer from "../features/shop/shopSlice";
import professionalReducer from "../features/professionals/professionalsSlice";
import serviceReducer from "../features/services/servicesSlice";
import appointementReducer from "../features/appointments/appointmentsSlice";

const rootReducer = combineReducers({
  step: stepReducer,
  cart: cartReducer,
  shop: shopReducer,
  professionals: professionalReducer,
  services: serviceReducer,
  appointments: appointementReducer,
});

export default rootReducer;
