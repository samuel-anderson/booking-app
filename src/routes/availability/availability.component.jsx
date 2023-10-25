import AvailableTime from "../../components/main/content/available-time/available-time.component";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getStep,
  STEPS,
} from "../../components/main/content/stepper/stepper.component";
import useNavigation from "../../hooks/useNavigation";

const Availability = () => {
  const activeStep = useSelector((state) => state.step.activeStep);

  const { navigateAndUpdateStep } = useNavigation();

  useEffect(() => {
    const navigate = () => {
      const { route, step } = getStep(STEPS.professional);
      navigateAndUpdateStep(route, step);
    };

    if (activeStep !== 2) navigate();
  }, [navigateAndUpdateStep, activeStep]);

  return (
    <>
      Choose a Time
      <AvailableTime />
    </>
  );
};

export default Availability;
