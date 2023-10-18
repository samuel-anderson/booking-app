import { createSelector } from "@reduxjs/toolkit";

const selectService = (state) => state.cart.service;
const selectAddOns = (state) => state.cart.addOns;

export const selectOrderTotal = createSelector(
  selectService,
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