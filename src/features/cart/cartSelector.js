import { createSelector } from "@reduxjs/toolkit";

const selectServce = (state) => state.cart.service;
const selectAddOns = (state) => state.cart.addOns;

export const selectOrderTotal = createSelector(
  selectServce,
  selectAddOns,
  (service, addOns) => {
    const servicePrice = service ? service.price : 0;
    const addOnPrice =
      addOns.length === 0
        ? 0
        : addOns.reduce((total, addOn) => total + addOn.price, 0);

    return servicePrice + addOnPrice;
  }
);
