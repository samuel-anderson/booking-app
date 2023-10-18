import { createSlice } from "@reduxjs/toolkit";

const CART_INITIAL_STATE = {
  professional: null,
  service: null,
  addOns: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    emptyCart: (state) => {
      state.professional = null;
      state.service = null;
      state.addOns = [];
    },
    setProfessional: (state, action) => {
      state.professional = action.payload.professional;
    },
    addService: (state, action) => {
      state.service = action.payload.service;
    },
    removeService: (state) => {
      state.service = null;
    },
    addAddOn: (state, action) => {
      const addExists = state.addOns.some(
        (service) => action.payload.addOn.id === service.id
      );

      if (!addExists) state.addOns = [...state.addOns, action.payload.addOn];
    },
    removeAddOn: (state, action) => {
      state.addOns = state.addOns.filter(
        (addOn) => addOn.id !== action.payload.addOn.id
      );
    },
    removeAddOns: (state) => {
      state.addOns = [];
    },
  },
});

export const {
  emptyCart,
  setProfessional,
  addService,
  removeService,
  addAddOn,
  removeAddOn,
  removeAddOns,
} = cartSlice.actions;
export default cartSlice.reducer;
