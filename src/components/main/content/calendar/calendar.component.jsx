// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
// import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import { useState } from "react";
import { CalendarContainer, DateContainer } from "./calendar.styles";
import { useDispatch } from "react-redux";
import { setServiceDate } from "../../../../features/cart/cartSlice";

const Calendar = () => {
  const dispatch = useDispatch();
  const [currentMonth, setCurrentMonth] = useState(
    moment().format("MMMM YYYY")
  );

  const generateNext14Days = () => {
    const dates = [];
    const currentDate = moment(); // Get the current date

    while (currentDate.isSameOrBefore(moment().add(14, "days"))) {
      dates.push({
        value: currentDate.format("YYYY-MM-DD"),
        date: currentDate.date(),
        month: currentDate.format("MMMM YYYY"),
        day: currentDate.format("dd"),
      });

      currentDate.add(1, "days");
    }
    return dates;
  };

  return (
    <CalendarContainer>
      <div>{currentMonth}</div>
      <DateContainer>
        {generateNext14Days().map((item, idx) => {
          return (
            <div
              key={idx}
              style={{ padding: 10 }}
              onClick={() => {
                setCurrentMonth(item.month);
                dispatch(setServiceDate(item.value));
              }}
            >
              <div>{item.date}</div>
              <div>{item.day}</div>
            </div>
          );
        })}
      </DateContainer>
    </CalendarContainer>
  );
};

export default Calendar;
