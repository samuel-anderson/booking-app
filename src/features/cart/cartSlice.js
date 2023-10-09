import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    professional: {
      id: null,
      name: "",
    },
  },
  reducers: {
    setProfessional: (state, action) => {
      state.professional.id = action.payload.id;
      state.professional.name = action.payload.name;
    },
  },
});

export const { setProfessional } = cartSlice.actions;
export default cartSlice.reducer;
