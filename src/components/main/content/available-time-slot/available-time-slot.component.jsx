import TimeSlot from "../time-slot/time-slot.component";
import moment from "moment";
import { AvailableTimeSlotContainer } from "./available-time-slot.styles";

const AvailableTime = ({ schedule }) => {
  const getTimeSlotClass = () => {
    return "available";
  };

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

  return (
    <AvailableTimeSlotContainer>
      {schedule.map((day) => {
        return generateTimeSlots(day.start, day.end).map((slot, idx) => (
          <TimeSlot key={idx} slot={slot} className={getTimeSlotClass()} />
        ));
      })}
    </AvailableTimeSlotContainer>
  );
};

export default AvailableTime;
