import { createSelector } from "@reduxjs/toolkit";

const selectBarbers = (state) => state.professionals.barbers;

export const selectBarberEmails = createSelector(selectBarbers, (barbers) => {
  return barbers.map((barber) => barber.email);
});
