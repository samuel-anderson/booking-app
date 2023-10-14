import { BottomSheet } from "./mobile-car.styles";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const MobileCart = () => {
  const selectedService = useSelector((state) => state.cart.service);
  const [isExpand, setIsExpandOpen] = useState(false);

  useEffect(() => {
    if (!selectedService) setIsExpandOpen(false);
  }, [selectedService]);

  const toggleBottomSheet = () => {
    setIsExpandOpen(!isExpand);
  };
  return (
    <>
      <BottomSheet>
        <div
          className={`bottom-sheet ${selectedService ? "open" : ""} ${
            isExpand ? "grow" : ""
          }`}
        >
          <button onClick={toggleBottomSheet}>Toggle Bottom Sheet</button>
          {/* Content for the bottom sheet */}
          <div className="content">{/* Add your content here */}</div>
        </div>
      </BottomSheet>
    </>
  );
};

export default MobileCart;
