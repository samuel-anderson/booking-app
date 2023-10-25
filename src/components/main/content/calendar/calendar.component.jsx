import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { setDate } from "../../../../features/cart/cartSlice";

const Calendar = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.cart.date);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <StaticDatePicker
        value={selectedDate ? selectedDate : moment()}
        onChange={(date) => dispatch(setDate(moment(date)))}
      />
    </LocalizationProvider>
  );
};

export default Calendar;