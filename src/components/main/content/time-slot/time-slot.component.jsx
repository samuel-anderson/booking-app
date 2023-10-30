import { TimeSlotStyles } from "./time-slot.styles";
import { useDispatch, useSelector } from "react-redux";
import { setStartTime } from "../../../../features/cart/cartSlice";

const TimeSlot = ({ slot }) => {
  const dispatch = useDispatch();

  const startTime = useSelector((state) => state.cart.startTime);

  const getTimeSlotClass = (slot) => {
    if (slot === startTime) return "selected";
    return "notSelected";
  };

  const clickHandler = () => {
    if (slot === startTime) dispatch(setStartTime(null));
    else dispatch(setStartTime(slot));
  };
  return (
    <TimeSlotStyles className={getTimeSlotClass(slot)} onClick={clickHandler}>
      {slot}
    </TimeSlotStyles>
  );
};

export default TimeSlot;
