import { showDurationTotal, showStartTime } from "../../../../utils/cart";

const CartHeader = ({ durationTotal, startTime }) => {
  return (
    <div className="order-text">
      Your Order{" "}
      <span className="order-duration">{showDurationTotal(durationTotal)}</span>
      <span className="order-duration">{showStartTime(startTime)}</span>
    </div>
  );
};

export default CartHeader;
