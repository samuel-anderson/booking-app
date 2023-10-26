import TimeSlot from "../time-slot/time-slot.styles";
import moment from "moment";

const AvailableTime = ({ schedule, selectedDayofWeek }) => {
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
    <div
      style={{ display: "flex", flexWrap: "wrap", alignContent: "flex-start" }}
    >
      {schedule.map((day, idx) => {
        return generateTimeSlots(day.start, day.end).map((slot, idx) => (
          <TimeSlot
            key={idx + 300}
            slot={slot}
            className={getTimeSlotClass()}
          />
        ));
      })}
    </div>
  );
};

export default AvailableTime;
