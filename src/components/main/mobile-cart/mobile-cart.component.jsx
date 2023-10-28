import { BottomSheet } from "./mobile-car.styles";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "../content/button/button.component";
import useCart from "../../../hooks/useCart";
import useNavigation from "../../../hooks/useNavigation";
import { selectAddOnTotal } from "../../../features/cart/cartSelector";
import { getStep, STEPS } from "../content/stepper/stepper.component";

import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const styles = {
  grayIcon: {
    color: "gray",
    backgroundColor: "rgb(58,58,60)",
    borderRadius: 50,
  },
};

const MobileCart = () => {
  const [isClosed, setIsClosed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const cart = useSelector((state) => state.cart);
  const addOnTotal = useSelector(selectAddOnTotal);

  const { showOrder, showAddOns, showDurationTotal } = useCart();
  const { navigateAndUpdateStep } = useNavigation();

  const activeStep = useSelector((state) => state.step.activeStep);

  useEffect(() => {
    if (!cart.service) setIsClosed(false);
    setIsExpanded(false);
  }, [cart.service]);

  const cartVisibility = () => {
    if (isClosed) return "closed";
    else if (isExpanded) return "expanded";
  };

  const navigate = () => {
    const { route, step } = getStep(STEPS.availability);
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
              <span className="order-duration">{showDurationTotal()}</span>
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
              {showOrder()}
              {cart.service && (
                <div className="order-info">
                  <div>{cart.service.title.toUpperCase()}</div>
                  <div>${cart.service.price}</div>
                </div>
              )}
              {cart.addOns.length > 0 && (
                <div className="order-info">
                  <div>{showAddOns().replace("with", "+")}</div>
                  <div>${addOnTotal}</div>
                </div>
              )}
            </div>
          )}

          {activeStep === 1 && !isClosed && (
            <Button
              buttonOptions={{ clickHandler: navigate, className: "default" }}
            >
              Choose Time
            </Button>
          )}
        </div>
      </BottomSheet>
    </>
  );
};

export default MobileCart;
