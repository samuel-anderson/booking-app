import { TimeSlotStyles } from "./time-slot.styles";
import { useDispatch } from "react-redux";
import { setStartTime } from "../../../../features/cart/cartSlice";

const TimeSlot = ({ slot, className }) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(setStartTime(slot));
  };
  return (
    <TimeSlotStyles className={className} onClick={clickHandler}>
      {slot}
    </TimeSlotStyles>
  );
};

export default TimeSlot;
