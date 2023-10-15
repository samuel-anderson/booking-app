import { BottomSheet } from "./mobile-car.styles";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const MobileCart = () => {
  const selectedService = useSelector((state) => state.cart.service);
  const [isClosed, setIsClosed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!selectedService) setIsClosed(false);
    setIsExpanded(false);
  }, [selectedService]);

  const cartVisibility = () => {
    if (isClosed) return "closed";
    else if (isExpanded) return "expanded";
  };

  return (
    <>
      <BottomSheet>
        <div
          className={`bottom-sheet ${
            selectedService ? "open" : ""
          } ${cartVisibility()}`}
        >
          {!isExpanded && (
            <button onClick={() => setIsClosed(!isClosed)}>Open/Close</button>
          )}
          {!isClosed && (
            <button onClick={() => setIsExpanded(!isExpanded)}>Expand</button>
          )}

          {!isClosed && <div className="content"></div>}
        </div>
      </BottomSheet>
    </>
  );
};

export default MobileCart;
