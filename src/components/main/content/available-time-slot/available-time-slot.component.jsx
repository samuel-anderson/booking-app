// import { useSelector } from "react-redux";
// import moment from "moment";

const AvailableTime = ({ schedule, selectedDayofWeek }) => {
  // const selectedDate = useSelector((state) => state.cart.date);
  // const selectedProfessional = useSelector((state) => state.cart.professional);

  // const selectedDayofWeek = selectedDate
  //   ? moment(selectedDate).format("dddd")
  //   : moment().format("dddd");

  // const schedule =
  //   selectedProfessional.schedule[selectedDayofWeek.toLocaleLowerCase()];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        {selectedDayofWeek}
        {schedule &&
          schedule.map((day, idx) => {
            return (
              <div key={idx}>
                {day.start} - {day.end}
              </div>
            );
          })}
      </div>

      <div style={{ display: "flex" }}>
        {[1, 2, 3, 4, 5, 6].map((_, idx) => {
          return (
            <div key={idx} style={{ padding: 10 }}>
              Time
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableTime;
