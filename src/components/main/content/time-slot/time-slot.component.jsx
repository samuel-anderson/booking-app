import { TimeSlotStyles } from "./time-slot.styles";
import { useDispatch } from "react-redux";

const TimeSlot = ({ slot, className }) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    console.log(slot);
  };
  return (
    <TimeSlotStyles className={className} onClick={clickHandler}>
      {slot}
    </TimeSlotStyles>
  );
};

export default TimeSlot;
