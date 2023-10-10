import { createSlice } from "@reduxjs/toolkit";

const PROFESSIONALS_INITIAL_STATE = {
  barbers: [],
  loading: false,
  error: null,
};

const professionalsSlice = createSlice({
  name: "professionals",
  initialState: PROFESSIONALS_INITIAL_STATE,
  reducers: {
    fetchProfessionalsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProfessionalsSuccess: (state, action) => {
      state.loading = false;
      state.barbers = action.payload;
    },
    fetchProfessionalsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProfessionalsStart,
  fetchProfessionalsSuccess,
  fetchProfessionalsFailure,
} = professionalsSlice.actions;
export default professionalsSlice.reducer;
