import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import ProfessionalList from "../../components/main/content/professional-list/professional-list.component";

import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";
import { setProfessional } from "../../features/cart/cartSlice";
import { setStep } from "../../features/step/stepSlice";
import {
  STEPS,
  getStep,
} from "../../components/main/content/stepper/stepper.component";

const mockStore = configureStore([]);

const barber = { id: "big_mike", name: "Big Mike" };
const store = mockStore({
  professionals: {
    barbers: [barber],
  },
});

describe("Professional List Component", () => {
  beforeEach(() => {
    store.clearActions(); // Clear any actions from previous tests
  });

  test("Renders Professional", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProfessionalList />
        </BrowserRouter>
      </Provider>
    );

    //screen.debug();

    // Use assertions to verify that the component displays the data
    expect(screen.getByText(barber.name)).toBeInTheDocument();
  });

  test("Sets Professional", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProfessionalList />
        </BrowserRouter>
      </Provider>
    );

    // Simulate user interaction
    fireEvent.click(screen.getByText(barber.name));

    // Check if the correct action was dispatched
    const actions = store.getActions();
    expect(actions).toContainEqual(setProfessional({ professional: barber }));
  });

  test("Navigates to Service Page", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ProfessionalList />
        </BrowserRouter>
      </Provider>
    );

    // Simulate user interaction
    fireEvent.click(screen.getByText(barber.name));

    // Check if the correct action was dispatched
    const actions = store.getActions();

    const { step } = getStep(STEPS.service);
    expect(actions).toContainEqual(setStep(step));
  });
});
