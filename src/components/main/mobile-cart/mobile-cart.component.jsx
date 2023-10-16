import { BottomSheet } from "./mobile-car.styles";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectOrderTotal } from "../../../features/cart/cartSelector";

const MobileCart = () => {
  const [isClosed, setIsClosed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const orderTotal = useSelector(selectOrderTotal);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (!cart.service) setIsClosed(false);
    setIsExpanded(false);
  }, [cart.service]);

  const cartVisibility = () => {
    if (isClosed) return "closed";
    else if (isExpanded) return "expanded";
  };

  const showOrderTotal = () => {
    return orderTotal !== 0 ? ` $${orderTotal}` : "";
  };

  const showProfessional = () => {
    return cart.professional ? cart.professional.name : "Any Professional";
  };

  return (
    <>
      <BottomSheet>
        <div
          className={`bottom-sheet ${
            cart.service ? "open" : ""
          } ${cartVisibility()}`}
        >
          {!isExpanded && (
            <button onClick={() => setIsClosed(!isClosed)}>Open/Close</button>
          )}
          {!isClosed && (
            <button onClick={() => setIsExpanded(!isExpanded)}>Expand</button>
          )}

          {!isClosed && (
            <div className="content">
              <span>{showProfessional()}</span>
              <span>{showOrderTotal()}</span>
            </div>
          )}
        </div>
      </BottomSheet>
    </>
  );
};

export default MobileCart;
