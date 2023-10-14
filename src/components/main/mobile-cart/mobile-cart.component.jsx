import { BottomSheet } from "./mobile-car.styles";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const MobileCart = () => {
  const selectedService = useSelector((state) => state.cart.service);
  const [isExpanded, setIsExpanded] = useState(false);

  const [isScrollinglUp, setIsScrollingUp] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    if (!selectedService) {
      setIsExpanded(false);
      setIsScrollingUp(false);
    }
  }, [selectedService]);

  const toggleBottomSheet = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (selectedService && !isExpanded) {
        const currentScrollY = window.scrollY;

        if (currentScrollY > prevScrollY) {
          setIsScrollingUp(false);
        } else if (currentScrollY < prevScrollY) {
          setIsScrollingUp(true);
        }

        setPrevScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selectedService, isExpanded, prevScrollY]);

  const cartVisibility = () => {
    if (isExpanded) return "expanded";
    else if (isScrollinglUp) return "closed";
    else return "open";
  };

  return (
    <>
      <BottomSheet>
        <div
          className={`bottom-sheet ${
            selectedService ? "visible" : ""
          } ${cartVisibility()}`}
        >
          <button onClick={toggleBottomSheet}>Icon</button>
          {!isScrollinglUp && <div className="content"></div>}
        </div>
      </BottomSheet>
    </>
  );
};

export default MobileCart;
