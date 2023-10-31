import { createSlice } from "@reduxjs/toolkit";

const APPOINTMENTS_INITIAL_STATE = {
  appointments: [],
};

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState: APPOINTMENTS_INITIAL_STATE,
  reducers: {
    setAppointments: (state, action) => {
      state.appointments = action.payload;
    },
  },
});

export const { setAppointments } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;
