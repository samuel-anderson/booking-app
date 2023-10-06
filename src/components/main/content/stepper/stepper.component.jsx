import { Stepper, Step, StepLabel } from "@mui/material";
import { useSelector } from "react-redux";

const steps = ["Professional", "Service", "Time", "Done"];

const Steps = () => {
  const activeStep = useSelector((state) => state.step.activeStep);

  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default Steps;
