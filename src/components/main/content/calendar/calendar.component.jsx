// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
// import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import { useState } from "react";
import { CalendarContainer, DateContainer, Date } from "./calendar.styles";
import { useDispatch } from "react-redux";
import {
  setServiceDate,
  setStartTime,
} from "../../../../features/cart/cartSlice";

const Calendar = () => {
  const dispatch = useDispatch();
  const [displayDate, setDisplayedDate] = useState(
    moment().format("MMMM Do, YYYY")
  );

  const generateNext14Days = () => {
    const dates = [];
    const currentDate = moment(); // Get the current date

    while (currentDate.isSameOrBefore(moment().add(14, "days"))) {
      dates.push({
        value: currentDate.format("YYYY-MM-DD"),
        date: currentDate.date(),
        displayDate: currentDate.format("MMMM Do, YYYY"),
        day: currentDate.format("dd"),
      });

      currentDate.add(1, "days");
    }
    return dates;
  };

  return (
    <CalendarContainer>
      <div>{displayDate}</div>
      <DateContainer>
        {generateNext14Days().map((item, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                setDisplayedDate(item.displayDate);
                dispatch(setServiceDate(item.value));
                dispatch(setStartTime(null));
              }}
            >
              <Date>{item.date}</Date>
              <div style={{ textAlign: "center" }}>{item.day}</div>
            </div>
          );
        })}
      </DateContainer>
    </CalendarContainer>
  );
};

export default Calendar;
