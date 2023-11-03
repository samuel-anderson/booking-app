import { useNavigate } from "react-router-dom";
import { setStep } from "../features/step/stepSlice";
import {
  getStep,
  STEPS,
} from "../components/main/content/stepper/stepper.component";

import { useDispatch, useSelector } from "react-redux";

const useNavigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const activeStep = useSelector((state) => state.step.activeStep);

  // Function to navigate to a specific route
  function navigateAndUpdateStep(route, nextStep) {
    dispatch(setStep(nextStep));
    navigate(route);
  }

  function checkStep(currentStep) {
    const { route, step } = getStep(STEPS.professional);

    if (activeStep !== currentStep) navigateAndUpdateStep(route, step);
  }
  //function for logic to discern when to kick to step or empty cart
  /*
  0
  1
  2
  3

  idx & activeStep
  emptyCart

  isCartFinished -> Go to 1 and empty



  */

  return { navigateAndUpdateStep, checkStep };
};

export default useNavigation;
