import TimeSlot from "../time-slot/time-slot.component";
import moment from "moment";
import { AvailableTimeSlotContainer } from "./available-time-slot.styles";
import { useSelector } from "react-redux";
import { matchDatabaseDateFormat } from "../../../../utils/date";

const AvailableTime = ({ schedule }) => {
  //1. load appointment document on useEffect
  //2. extract utility date functions

  const appointments = useSelector((state) => state.appointments.appointments);
  const professional = useSelector((state) => state.cart.professional);
  const serviceDate = useSelector((state) => state.cart.serviceDate);
  const scheduledAppointments = appointments[professional.id]
    ? appointments[professional.id][matchDatabaseDateFormat(serviceDate)]
    : null;

  const generateTimeSlots = (startTime, endTime) => {
    const slots = [];
    let currentTime = moment(startTime, "h:mm A");
    const endTimeMoment = moment(endTime, "h:mm A");

    while (currentTime.isSameOrBefore(endTimeMoment)) {
      slots.push(currentTime.format("h:mm A"));
      currentTime.add(15, "minutes");
    }

    return slots;
  };

  const filterTimeSlots = (timeSlot) => {
    let keepTimeSlot = true;
    let slot = moment(timeSlot, "h:mm A");

    if (scheduledAppointments) {
      for (var i = 0; i < scheduledAppointments.length; i++) {
        let { startTime, endTime } = scheduledAppointments[i];
        let start = moment(startTime, "h:mm A");
        let end = moment(endTime, "h:mm A");

        if (slot.isSameOrAfter(start) && slot.isBefore(end)) {
          keepTimeSlot = false;
        }
      }
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
