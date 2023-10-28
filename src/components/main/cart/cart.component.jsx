import { useSelector, useDispatch } from "react-redux";
import { CartStyles, BtnContainer } from "./cart.styles";
import CartSkeleton from "../cart-skeleton/cart-skeleton.component";
import Button from "../content/button/button.component";

import useCart from "../../../hooks/useCart";
import useNavigation from "../../../hooks/useNavigation";
import { getStep, STEPS } from "../content/stepper/stepper.component";
import { selectDurationTotal } from "../../../features/cart/cartSelector";
import { setEstimatedDuration } from "../../../features/cart/cartSlice";
// import { updateDocument } from "../../../utils/firebase";
// import { appointmentObjectToAdd } from "../../../utils/firebase";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const activeStep = useSelector((state) => state.step.activeStep);
  const durationTotal = useSelector(selectDurationTotal);

  const {
    showOrder,
    showAddOns,
    showOrderTotal,
    showDurationTotal,
    showStartTime,
  } = useCart();

  const { navigateAndUpdateStep } = useNavigation();

  const navigate = (route, step) => {
    navigateAndUpdateStep(route, step);
  };

  const navigateToTimeStep = () => {
    dispatch(setEstimatedDuration(durationTotal));

    const { route, step } = getStep(STEPS.availability);
    navigate(route, step);
  };

  const navigateToFinishStep = () => {
    const { route, step } = getStep(STEPS.finish);
    navigate(route, step);
  };

  return (
    <CartStyles>
      {activeStep === 0 || (
        <div className="order-text">
          Your Order{" "}
          <span className="order-duration">{showDurationTotal()}</span>
          <span className="order-duration">{showStartTime()}</span>
        </div>
      )}

      {activeStep === 0 && <CartSkeleton />}

      {/* ***************** ORDER INFO COMPONENT *************** */}
      {/* ***************** ORDER INFO COMPONENT *************** */}

      {cart.professional && showOrder()}

      {cart.service && (
        <div className="order-info">
          <div>
            {cart.service.title}
            {showAddOns()}
          </div>
          <div>{showOrderTotal()}</div>
        </div>
      )}

      {cart.startTime && (
        <div className="order-info">
          <div></div>
        </div>
      )}
      {/* ***************** ORDER INFO COMPONENT *************** */}
      {/* ***************** ORDER INFO COMPONENT *************** */}

      {activeStep === 1 && cart.service && (
        <BtnContainer>
          <Button
            buttonOptions={{
              onClick: navigateToTimeStep,
              className: "default",
            }}
          >
            Choose Time
          </Button>
        </BtnContainer>
      )}

      {activeStep === 2 && cart.startTime && (
        <BtnContainer>
          <Button
            buttonOptions={{
              onClick: navigateToFinishStep,
              className: "default",
            }}
          >
            Finish
          </Button>
        </BtnContainer>
      )}
    </CartStyles>
  );
};

export default Cart;
