import { useSelector, useDispatch } from "react-redux";
import { CartStyles, BtnContainer } from "./cart.styles";
import CartSkeleton from "../cart-skeleton/cart-skeleton.component";
import Button from "../content/button/button.component";

import useSMS from "../../../hooks/useSMS";
import useNavigation from "../../../hooks/useNavigation";
import { getStep, STEPS } from "../content/stepper/stepper.component";
import { selectDurationTotal } from "../../../features/cart/cartSelector";
import { setEstimatedDuration } from "../../../features/cart/cartSlice";
import { updateDocument } from "../../../utils/firebase";
import { appointmentObjectToAdd } from "../../../utils/firebase";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const activeStep = useSelector((state) => state.step.activeStep);
  const durationTotal = useSelector(selectDurationTotal);

  const { showOrder, showAddOns, showOrderTotal, showDurationTotal } = useSMS();

  const { navigateAndUpdateStep } = useNavigation();

  const clickHandler = () => {
    dispatch(setEstimatedDuration(durationTotal));
    navigate();
  };

  const clickFinishHandler = () => {
    //clean up forming the appointment info obj
    //export more functions
    //create form, with input and labels
    //onSubmit****
    //test exisiting apointment logic
    const {
      professional,
      serviceDate,
      startTime,
      estimatedDuration,
      service,
      addOns,
    } = cart;
    const updateObj = appointmentObjectToAdd(professional.id, serviceDate, {
      clientName: "Johnny Joe",
      clientPhoneNumber: "+9998453334",
      service,
      addOns,
      serviceDate,
      startTime,
      estimatedDuration,
    });

    console.log(updateObj);

    updateDocument("barber_shop", "appointments", updateObj);
  };
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
            clickHandler={clickHandler}
            text="Choose Time"
            classStyle="default"
          />
        </BtnContainer>
      )}

      {activeStep === 2 && cart.startTime && (
        <BtnContainer>
          <Button
            clickHandler={clickFinishHandler}
            text="Finish"
            classStyle="default"
          />
        </BtnContainer>
      )}
    </CartStyles>
  );
};

export default Cart;
