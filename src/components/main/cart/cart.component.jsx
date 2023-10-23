import { useSelector } from "react-redux";
import { CartStyles, BtnContainer } from "./cart.styles";
import CartSkeleton from "../cart-skeleton/cart-skeleton.component";
import Button from "../content/button/button.component";

import useSMS from "../../../hooks/useSMS";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const activeStep = useSelector((state) => state.step.activeStep);

  const {
    showOrder,
    showAddOns,
    showOrderTotal,
    submitBooking,
    showDurationTotal,
  } = useSMS();

  return (
    <CartStyles>
      <div className="order-text">
        Your Order <span>{showDurationTotal()}</span>
      </div>
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

      {cart.service && (
        <BtnContainer>
          <Button
            clickHandler={submitBooking}
            text="FINISH"
            classStyle="default"
          />
        </BtnContainer>
      )}
    </CartStyles>
  );
};

export default Cart;
