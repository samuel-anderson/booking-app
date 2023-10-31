import TimeSlot from "../time-slot/time-slot.component";
import moment from "moment";
import { AvailableTimeSlotContainer } from "./available-time-slot.styles";
import { useSelector, useDispatch } from "react-redux";
import { matchDatabaseDateFormat } from "../../../../utils/date";
import { useEffect } from "react";
import { fetchAppointmentsStart } from "../../../../features/appointments/appointmentsSlice";
import { generateTimeSlots, isBetweenTimes } from "../../../../utils/date.js";

const AvailableTime = ({ schedule }) => {
  const dispatch = useDispatch();
  const estimatedDuration = useSelector(
    (state) => state.cart.estimatedDuration
  );

  useEffect(() => {
    dispatch(fetchAppointmentsStart());
  }, [dispatch]);

  const appointments = useSelector((state) => state.appointments.appointments);
  const professional = useSelector((state) => state.cart.professional);
  const serviceDate = useSelector((state) => state.cart.serviceDate);
  const scheduledAppointments = appointments[professional.id]
    ? appointments[professional.id][matchDatabaseDateFormat(serviceDate)]
    : null;

  const filterTimeSlots = (timeSlot) => {
    let keepTimeSlot = true;
    let slot = moment(timeSlot, "h:mm A");

    if (scheduledAppointments) {
      return isBetweenTimes(
        keepTimeSlot,
        slot,
        scheduledAppointments,
        estimatedDuration
      );
    }
    return keepTimeSlot;
  };
  return (
    <AvailableTimeSlotContainer>
      {schedule.map((day) => {
        return generateTimeSlots(day.start, day.end)
          .filter(filterTimeSlots)
          .map((slot, idx) => <TimeSlot key={idx} slot={slot} />);
      })}
    </AvailableTimeSlotContainer>
  );
};

export default AvailableTime;
