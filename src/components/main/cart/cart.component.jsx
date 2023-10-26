import { useSelector } from "react-redux";
import { CartStyles, BtnContainer } from "./cart.styles";
import CartSkeleton from "../cart-skeleton/cart-skeleton.component";
import Button from "../content/button/button.component";

import useSMS from "../../../hooks/useSMS";
import useNavigation from "../../../hooks/useNavigation";
import { getStep, STEPS } from "../content/stepper/stepper.component";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const activeStep = useSelector((state) => state.step.activeStep);

  const { showOrder, showAddOns, showOrderTotal, showDurationTotal } = useSMS();

  const { navigateAndUpdateStep } = useNavigation();
  const navigate = () => {
    const { route, step } = getStep(STEPS.availability);
    navigateAndUpdateStep(route, step);
  };

  return (
    <CartStyles>
      <div className="order-text">
        Your Order <span className="order-duration">{showDurationTotal()}</span>
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

      {activeStep === 1 && cart.service && (
        <BtnContainer>
          <Button
            clickHandler={navigate}
            text="Choose Time"
            classStyle="default"
          />
        </BtnContainer>
      )}
    </CartStyles>
  );
};

export default Cart;
