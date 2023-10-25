import AvailableTimeSlot from "../../components/main/content/available-time-slot/available-time-slot.component";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getStep,
  STEPS,
} from "../../components/main/content/stepper/stepper.component";
import useNavigation from "../../hooks/useNavigation";
import Calendar from "../../components/main/content/calendar/calendar.component";

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
      <Calendar />
      <AvailableTimeSlot />
    </>
  );
};

export default Availability;
