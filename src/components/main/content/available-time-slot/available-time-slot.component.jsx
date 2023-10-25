import { useSelector } from "react-redux";
import moment from "moment";

const AvailableTime = () => {
  const selectedDate = useSelector((state) => state.cart.date);

  return (
    <>
      {selectedDate ? moment(selectedDate).format("L") : moment().format("L")}
      <div style={{ display: "flex" }}>
        {[1, 2, 3, 4, 5, 6].map((_) => {
          return <div style={{ padding: 10 }}>Time</div>;
        })}
      </div>
    </>
  );
};

export default AvailableTime;
