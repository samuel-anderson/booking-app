import { BottomSheet } from "./mobile-car.styles";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "../content/button/button.component";
import useSMS from "../../../hooks/useSMS";

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

  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const cart = useSelector((state) => state.cart);

  const { submitBooking, showOrder, showAddOns } = useSMS();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setIsScrollingUp(false);
        setIsClosed(true);
      } else {
        setIsScrollingUp(true);
        setIsClosed(false);
      }

      setPrevScrollY(currentScrollY);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  useEffect(() => {
    if (!cart.service) setIsClosed(false);
    setIsExpanded(false);
  }, [cart.service]);

  const cartVisibility = () => {
    if (isClosed) return "closed";
    else if (isExpanded) return "expanded";
  };

  // const showOrderTotal = () => {
  //   return orderTotal !== 0 ? ` $${orderTotal}` : "";
  // };

  // const showProfessional = () => {
  //   return cart.professional ? cart.professional.name : "Any Professional";
  // };

  return (
    <>
      <BottomSheet>
        <div
          className={`bottom-sheet ${
            cart.service ? "open" : ""
          } ${cartVisibility()}`}
        >
          <div className="order">
            <span className="order-text">Your order</span>

            <IconButton onClick={() => setIsClosed(!isClosed)}>
              {isClosed ? (
                <ExpandLessIcon style={styles.grayIcon} />
              ) : (
                <ExpandMoreIcon style={styles.grayIcon} />
              )}
            </IconButton>
          </div>

          {/* {!isClosed && (
            <button onClick={() => setIsExpanded(!isExpanded)}>Expand</button>
          )} */}

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
                  <div>
                    $
                    {cart.addOns.reduce(
                      (total, addOn) => total + addOn.price,
                      0
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {!isClosed && (
            <Button
              clickHandler={submitBooking}
              text="FINISH"
              classStyle="default"
            />
          )}
        </div>
      </BottomSheet>
    </>
  );
};

export default MobileCart;
