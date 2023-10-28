import {
  selectOrderTotal,
  selectDurationTotal,
} from "../features/cart/cartSelector";

import { useSelector } from "react-redux";

const useCart = () => {
  const cart = useSelector((state) => state.cart);
  const orderTotal = useSelector(selectOrderTotal);
  const durationTotal = useSelector(selectDurationTotal);

  const showOrderTotal = () => {
    return orderTotal !== 0 ? `$${orderTotal}` : "";
  };

  const showDurationTotal = () => {
    if (durationTotal === 0) return "";

    const hours = Math.floor(durationTotal / 60);
    const minutes = durationTotal % 60;
    const hoursTxt = hours === 0 ? "" : `${hours} hr.`;
    const minTxt = minutes === 0 ? "" : `${minutes} min.`;

    return `Est. Time: ${hoursTxt} ${minTxt}`;
  };

  const showStartTime = () => {
    return cart.startTime ? ` @ ${cart.startTime}` : "";
  };

  const showProfessional = () => {
    return cart.professional ? cart.professional.name : "Any Professional";
  };

  const showOrder = () => {
    return (
      <div className="order-total">
        <span>{showProfessional()}</span>
        <span>{showOrderTotal()}</span>
      </div>
    );
  };

  const showAddOns = () => {
    if (cart.addOns.length === 0) return "";
    else if (cart.addOns.length === 1)
      return ` with ${cart.addOns.length} addon`;
    else return ` with ${cart.addOns.length} addons`;
  };

  return {
    showOrder,
    showAddOns,
    showStartTime,
    showProfessional,
    showOrderTotal,
    showDurationTotal,
  };
};

export default useCart;
