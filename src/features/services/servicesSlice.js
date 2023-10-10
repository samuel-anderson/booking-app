import { createSlice } from "@reduxjs/toolkit";

const SERVICES_INITIAL_STATE = {
  services: [],
  loading: false,
  error: null,
};

const servicesSlice = createSlice({
  name: "services",
  initialState: SERVICES_INITIAL_STATE,
  reducers: {
    fetchServicesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchServicesSuccess: (state, action) => {
      state.loading = false;
      state.services = action.payload;
    },
    fetchServicesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchServicesStart,
  fetchServicesSuccess,
  fetchServicesFailure,
} = servicesSlice.actions;
export default servicesSlice.reducer;
