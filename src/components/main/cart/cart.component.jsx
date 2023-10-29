import { useSelector, useDispatch } from "react-redux";
import { CartStyles, BtnContainer } from "./cart.styles";
import CartSkeleton from "../cart-skeleton/cart-skeleton.component";
import Button from "../content/button/button.component";
import useNavigation from "../../../hooks/useNavigation";
import { getStep, STEPS } from "../content/stepper/stepper.component";
import {
  selectDurationTotal,
  selectOrderTotal,
} from "../../../features/cart/cartSelector";
import { setEstimatedDuration } from "../../../features/cart/cartSlice";
import CartHeader from "./sub-components/cart-header.component";
import CartProfessional from "./sub-components/cart-professional.component";
import CartService from "./sub-components/cart-service.component";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const activeStep = useSelector((state) => state.step.activeStep);
  const durationTotal = useSelector(selectDurationTotal);
  const orderTotal = useSelector(selectOrderTotal);

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
      <CartHeader durationTotal={durationTotal} startTime={cart.startTime} />
      {activeStep === 0 && <CartSkeleton />}

      {cart.professional && (
        <CartProfessional
          professional={cart.professional}
          orderTotal={orderTotal}
        />
      )}

      {cart.service && (
        <CartService
          title={cart.service.title}
          addOns={cart.addOns}
          orderTotal={orderTotal}
        />
      )}

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
