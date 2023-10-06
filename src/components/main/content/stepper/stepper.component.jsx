import { Stepper, Step, StepLabel } from "@mui/material";
import { useSelector } from "react-redux";
//import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Label } from "./stepper.styles";
import useNavigation from "../../../../hooks/useNavigation";

const steps = ["Professional", "Service", "Time", "Done"];

export const STEPS = {
  professional: "professional",
  service: "service",
  time: "time",
  done: "done",
};

export const getStep = (step = STEPS.professional) => {
  return {
    [STEPS.professional]: { step: 0, route: "/" },
    [STEPS.service]: { step: 1, route: "/service" },
    [STEPS.time]: { step: 2, route: "/time" },
    [STEPS.done]: { step: 3, route: "/done" },
  }[step];
};

const Steps = () => {
  const activeStep = useSelector((state) => state.step.activeStep);
  const { navigateAndUpdateStep } = useNavigation();

  const onClickHandler = (idx, label) => {
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
              className={idx <= activeStep ? "activeLabel" : "unActiveLabel"}
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
