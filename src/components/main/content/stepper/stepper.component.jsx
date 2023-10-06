import { Stepper, Step, StepLabel } from "@mui/material";
import { useSelector } from "react-redux";
//import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
//import "./stepper.styles.css";

const steps = ["Professional", "Service", "Time", "Done"];

const Steps = () => {
  const activeStep = useSelector((state) => state.step.activeStep);

  return (
    <Stepper activeStep={activeStep}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default Steps;
