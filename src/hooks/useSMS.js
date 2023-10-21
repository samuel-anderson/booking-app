import { selectOrderTotal } from "../features/cart/cartSelector";

import { useSelector } from "react-redux";
import { sendSMS } from "../utils/firebase";

const useSMS = () => {
  const cart = useSelector((state) => state.cart);
  const orderTotal = useSelector(selectOrderTotal);

  const showOrderTotal = () => {
    return orderTotal !== 0 ? `$${orderTotal}` : "";
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

  const submitBooking = () => {
    if (cart.professional) {
      sendSMS({
        clientName: "TEST CLIENT",
        professionalPhoneNumber: cart.professional.phoneNumber
          ? cart.professional.phoneNumber
          : "+18583543893",
        date: "TODAY",
        time: "5:00pm",
        service: cart.service.title + showAddOns(),
        clientPhoneNumber: "7609893444",
      });
    }
  };

  return {
    submitBooking,
    showOrder,
    showAddOns,
    showProfessional,
    showOrderTotal,
  };
};

export default useSMS;
