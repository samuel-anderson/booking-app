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
import Header from "../../components/main/content/header/header.component";

const Availability = () => {
  const { step } = getStep(STEPS.availability);
  const { checkStep } = useNavigation();

  useEffect(() => {
    checkStep(step);
  }, [checkStep, step]);

  const selectedDate = useSelector((state) => state.cart.serviceDate);
  const selectedProfessional = useSelector((state) => state.cart.professional);

  const selectedDayofWeek = selectedDate
    ? moment(selectedDate).day()
    : moment().day();

  const schedule =
    selectedProfessional && selectedProfessional.schedule
      ? selectedProfessional.schedule[DAYSOFWEEK[selectedDayofWeek]]
      : null;

  const checkProfessionalSchedule = (date) => {
    const day = moment(date).day();

    const hasSchedule =
      selectedProfessional && selectedProfessional.schedule
        ? selectedProfessional.schedule[DAYSOFWEEK[day]]
        : null;

    return hasSchedule;
  };

  return (
    <>
      <Header text="Choose Date & Time" />

      <AvailabilityContainer>
        <Calendar clickHandler={checkProfessionalSchedule} />
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
