import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  addService,
  removeService,
  addAddOn,
  removeAddOns,
} from "../../../../features/cart/cartSlice";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { useSelector } from "react-redux";

import { ServiceCardStyles, IconBtnStyles } from "./service-card.styles";

const ServiceCard = ({ service }) => {
  const { id, title, duration, price } = service;

  const dispatch = useDispatch();

  const selectedService = useSelector((state) => state.cart.service);
  const selectedAddOns = useSelector((state) => state.cart.addOns);

  const [isHovered, setIsHovered] = useState(false);

  const clickHandler = () => {
    if (isHovered) onClearHandler();
    else if (!selectedService) {
      dispatch(addService({ service }));
    } else dispatch(addAddOn({ addOn: service }));
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const onClearHandler = () => {
    dispatch(removeService());
    dispatch(removeAddOns());
  };

  var isSelected = false;
  if (id && selectedService) isSelected = id === selectedService.id;

  console.log(selectedAddOns);

  return (
    <ServiceCardStyles
      onClick={clickHandler}
      className={isSelected ? "isSelected" : "notSelected"}
    >
      <div className={`service ${isSelected ? "isSelected" : "notSelected"}`}>
        <p className={`title ${isSelected ? "isSelected" : "notSelected"}`}>
          {title.toUpperCase()}
        </p>
        <p className={`duration ${isSelected ? "isSelected" : "notSelected"}`}>
          {duration} min
        </p>
      </div>
      <p className={`price ${isSelected ? "isSelected" : "notSelected"}`}>
        ${price}
      </p>
      {isSelected && (
        <IconBtnStyles
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {!isHovered ? (
            <CheckIcon className="icon" />
          ) : (
            <ClearIcon className="icon" />
          )}
        </IconBtnStyles>
      )}
    </ServiceCardStyles>
  );
};

export default ServiceCard;
