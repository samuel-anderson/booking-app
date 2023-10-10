import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    professional: {
      id: null,
      name: "",
    },
    services: [],
  },
  reducers: {
    setProfessional: (state, action) => {
      state.professional.id = action.payload.id;
      state.professional.name = action.payload.name;
    },
    addService: (state, action) => {
      state.services = [...state.services, action.payload.service];
    },
  },
});

export const { setProfessional, addService } = cartSlice.actions;
export default cartSlice.reducer;
