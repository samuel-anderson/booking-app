import { useSelector } from "react-redux";
import { CartStyles } from "./cart.styles";
import CartSkeleton from "../cart-skeleton/cart-skeleton.component";
import { selectOrderTotal } from "../../../features/cart/cartSelector";
import { sendSMS } from "../../../utils/firebase";
import Button from "../content/button/button.component";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const activeStep = useSelector((state) => state.step.activeStep);
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

  const bookingTestHandler = () => {
    sendSMS({
      clientName: "TEST CLIENT",
      professionalPhoneNumber: cart.professional.phoneNumber
        ? cart.professional.phoneNumber
        : "+7602774923",
      date: "TODAY",
      time: "5:00pm",
      service: cart.service.title + showAddOns(),
      clientPhoneNumber: "7609893444",
    });
  };

  return (
    <CartStyles>
      <div className="order-text">Your Order </div>
      {activeStep === 0 && <CartSkeleton />}
      {activeStep === 1 && showOrder()}

      {cart.service && (
        <div className="order-info">
          <div>
            {cart.service.title}
            {showAddOns()}
          </div>
          <div>{showOrderTotal()}</div>
        </div>
      )}

      <Button onClick={bookingTestHandler} text="FINISH" classStyle="default" />
    </CartStyles>
  );
};

export default Cart;
