import { BottomSheet } from "./mobile-cart.styles";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../content/button/button.component";
import useNavigation from "../../../hooks/useNavigation";
import { selectAddOnTotal } from "../../../features/cart/cartSelector";
import { getStep, STEPS } from "../content/stepper/stepper.component";

import {
  selectDurationTotal,
  selectOrderTotal,
} from "../../../features/cart/cartSelector";
import { setEstimatedDuration } from "../../../features/cart/cartSlice";

import MobilCartHeader from "./sub-components/mobile-cart-header.components";
import MobileCartContent from "./sub-components/mobile-cart-content";

export const styles = {
  grayIcon: {
    color: "gray",
    backgroundColor: "rgb(58,58,60)",
    borderRadius: 50,
  },
};

const MobileCart = () => {
  const dispatch = useDispatch();
  const [isClosed, setIsClosed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const cart = useSelector((state) => state.cart);
  const addOnTotal = useSelector(selectAddOnTotal);

  const { navigateAndUpdateStep } = useNavigation();

  const activeStep = useSelector((state) => state.step.activeStep);
  const durationTotal = useSelector(selectDurationTotal);
  const orderTotal = useSelector(selectOrderTotal);

  useEffect(() => {
    if (!cart.service) setIsClosed(false);
    setIsExpanded(false);
  }, [cart.service]);

  const cartVisibility = () => {
    if (isClosed) return "closed";
    else if (isExpanded) return "expanded";
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

  const navigate = (route, step) => {
    navigateAndUpdateStep(route, step);
  };
  return (
    <>
      <BottomSheet>
        <div
          className={`bottom-sheet ${
            cart.service ? "open" : ""
          } ${cartVisibility()}`}
        >
          <MobilCartHeader
            durationTotal={durationTotal}
            startTime={cart.startTime}
            onClick={() => setIsClosed(!isClosed)}
            isClosed={isClosed}
          />

          {!isClosed && (
            <MobileCartContent
              professional={cart.professional}
              service={cart.service}
              addOns={cart.addOns}
              orderTotal={orderTotal}
              addOnTotal={addOnTotal}
            />
          )}

          {activeStep === 1 && !isClosed && (
            <Button
              buttonOptions={{
                onClick: navigateToTimeStep,
                className: "default",
              }}
            >
              Choose Time
            </Button>
          )}

          {activeStep === 2 && cart.startTime && (
            <Button
              buttonOptions={{
                onClick: navigateToFinishStep,
                className: "default",
              }}
            >
              Finish
            </Button>
          )}
        </div>
      </BottomSheet>
    </>
  );
};

export default MobileCart;
