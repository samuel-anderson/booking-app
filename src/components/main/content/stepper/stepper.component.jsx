import { Stepper, Step, StepLabel } from "@mui/material";
import { useSelector } from "react-redux";
import { Label } from "./stepper.styles";
import useNavigation from "../../../../hooks/useNavigation";

const steps = ["Professional", "Service", "Availability", "Finish"];

export const STEPS = {
  professional: "professional",
  service: "service",
  availability: "availability",
  finish: "finish",
};

export const getStep = (step = STEPS.professional) => {
  return {
    [STEPS.professional]: { step: 0, route: "/" },
    [STEPS.service]: { step: 1, route: "/services" },
    [STEPS.availability]: { step: 2, route: "/availability" },
    [STEPS.finish]: { step: 3, route: "/finish" },
  }[step];
};

const getActiveLabelClass = (idx, activeStep) => {
  return idx <= activeStep ? "activeLabel" : "unActiveLabel";
};

const Steps = () => {
  const activeStep = useSelector((state) => state.step.activeStep);
  const isCartFinished = useSelector((state) => state.cart.isFinished);
  const { navigateAndUpdateStep } = useNavigation();

  const onClickHandler = (idx, label) => {
    if (idx === 0 || isCartFinished) labelClickHandler(STEPS.professional);
    else if (idx < activeStep) labelClickHandler(label.toLowerCase());
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
