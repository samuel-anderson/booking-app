import { useSelector } from "react-redux";
import { CartStyles } from "./cart.styles";
import CartSkeleton from "../cart-skeleton/cart-skeleton.component";
import Button from "../content/button/button.component";

import useSMS from "../../../hooks/useSMS";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const activeStep = useSelector((state) => state.step.activeStep);

  const { showOrder, showAddOns, showOrderTotal, submitBooking } = useSMS();

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

      <Button clickHandler={submitBooking} text="FINISH" classStyle="default" />
    </CartStyles>
  );
};

export default Cart;
