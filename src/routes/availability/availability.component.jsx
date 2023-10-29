import AvailableTimeSlot from "../../components/main/content/available-time-slot/available-time-slot.component";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getStep,
  STEPS,
} from "../../components/main/content/stepper/stepper.component";
import useNavigation from "../../hooks/useNavigation";
import Calendar from "../../components/main/content/calendar/calendar.component";
import { AvailabilityContainer } from "./availability.styles";
import moment from "moment";
import { DAYSOFWEEK } from "../../utils/date";

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

  const selectedDate = useSelector((state) => state.cart.serviceDate);
  const selectedProfessional = useSelector((state) => state.cart.professional);

  const selectedDayofWeek = selectedDate
    ? moment(selectedDate).day()
    : moment().day();

  const schedule =
    selectedProfessional && selectedProfessional.schedule
      ? selectedProfessional.schedule[DAYSOFWEEK[selectedDayofWeek]]
      : null;

  return (
    <>
      Choose a Time
      <AvailabilityContainer>
        <Calendar />
        {schedule && (
          <AvailableTimeSlot
            schedule={schedule}
            selectedDayofWeek={selectedDayofWeek}
          />
        )}
        {!schedule && <>NO SCHEDULE</>}
      </AvailabilityContainer>
    </>
  );
};

export default Availability;
