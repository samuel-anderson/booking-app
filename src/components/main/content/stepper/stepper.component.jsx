import { Stepper, Step, StepLabel } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
//import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Label } from "./stepper.styles";
import useNavigation from "../../../../hooks/useNavigation";
import { emptyCart } from "../../../../features/cart/cartSlice";

const steps = ["Professional", "Service", "Time", "Done"];

export const STEPS = {
  professional: "professional",
  service: "service",
  availability: "availability",
  done: "done",
};

export const getStep = (step = STEPS.professional) => {
  return {
    [STEPS.professional]: { step: 0, route: "/" },
    [STEPS.service]: { step: 1, route: "/services" },
    [STEPS.availability]: { step: 2, route: "/availability" },
    [STEPS.done]: { step: 3, route: "/done" },
  }[step];
};

const getActiveLabelClass = (idx, activeStep) => {
  return idx <= activeStep ? "activeLabel" : "unActiveLabel";
};

const Steps = () => {
  const activeStep = useSelector((state) => state.step.activeStep);
  const { navigateAndUpdateStep } = useNavigation();
  const dispatch = useDispatch();

  const onClickHandler = (idx, label) => {
    if (idx === 0) dispatch(emptyCart());
    if (idx < activeStep) labelClickHandler(label.toLowerCase());
  };

  const labelClickHandler = (label) => {
    const { route, step } = getStep(STEPS[label]);
    navigateAndUpdateStep(route, step);
  };

  return (
    <Stepper activeStep={activeStep}>
      {steps.map((label, idx) => (
        <Step key={label}>
          <StepLabel>
            <Label
              className={getActiveLabelClass(idx, activeStep)}
              onClick={() => {
                onClickHandler(idx, label);
              }}
            >
              {label}
            </Label>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default Steps;
