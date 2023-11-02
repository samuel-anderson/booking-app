import { useNavigate } from "react-router-dom";
import { setStep } from "../features/step/stepSlice";

import { useDispatch } from "react-redux";

const useNavigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Function to navigate to a specific route
  function navigateAndUpdateStep(route, nextStep) {
    dispatch(setStep(nextStep));
    navigate(route);
  }

  //function for logic to discern when to kick to step or empty cart

  return { navigateAndUpdateStep };
};

export default useNavigation;
