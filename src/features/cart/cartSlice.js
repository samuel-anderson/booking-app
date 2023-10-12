import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    professional: null,
    service: null,
    addOns: [],
  },
  reducers: {
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
  setProfessional,
  addService,
  removeService,
  addAddOn,
  removeAddOn,
  removeAddOns,
} = cartSlice.actions;
export default cartSlice.reducer;
