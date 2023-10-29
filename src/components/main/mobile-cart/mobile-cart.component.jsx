import { BottomSheet } from "./mobile-car.styles";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../content/button/button.component";
// import useCart from "../../../hooks/useCart";
import useNavigation from "../../../hooks/useNavigation";
import { selectAddOnTotal } from "../../../features/cart/cartSelector";
import { getStep, STEPS } from "../content/stepper/stepper.component";

import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import {
  selectDurationTotal,
  selectOrderTotal,
} from "../../../features/cart/cartSelector";
import { setEstimatedDuration } from "../../../features/cart/cartSlice";

import {
  showProfessional,
  showOrderTotal,
  showDurationTotal,
  showAddOnsMobile,
  showStartTime,
} from "../../../utils/cart";

const styles = {
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

  // const { showOrder, showAddOns, showDurationTotal, showStartTime } = useCart();
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
          <div className="order">
            <div className="order-text">
              Your order{" "}
              <span className="order-duration">
                {showDurationTotal(durationTotal)}
              </span>
              <span className="order-duration">
                {showStartTime(cart.startTime)}
              </span>
            </div>

            <IconButton onClick={() => setIsClosed(!isClosed)}>
              {isClosed ? (
                <ExpandLessIcon style={styles.grayIcon} />
              ) : (
                <ExpandMoreIcon style={styles.grayIcon} />
              )}
            </IconButton>
          </div>

          {!isClosed && (
            <div className="content">
              <div className="order-total">
                <span>{showProfessional(cart.professional)}</span>
                <span>{showOrderTotal(orderTotal)}</span>
              </div>
              {cart.service && (
                <div className="order-info">
                  <div>{cart.service.title.toUpperCase()}</div>
                  <div>${cart.service.price}</div>
                </div>
              )}
              {cart.addOns.length > 0 && (
                <div className="order-info">
                  <div>
                    {showAddOnsMobile(cart.addOns).replace("with", "+")}
                  </div>
                  <div>${addOnTotal}</div>
                </div>
              )}
            </div>
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
