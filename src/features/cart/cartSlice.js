import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    professional: {
      id: null,
      name: "",
    },
    service: null,
    addOns: [],
  },
  reducers: {
    setProfessional: (state, action) => {
      state.professional.id = action.payload.id;
      state.professional.name = action.payload.name;
    },
    addService: (state, action) => {
      state.service = action.payload.service;
    },
    removeService: (state) => {
      state.service = null;
    },
    addAddOn: (state, action) => {
      state.addOns = [...state.addOns, action.payload.addOn];
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
  removeAddOns,
} = cartSlice.actions;
export default cartSlice.reducer;
