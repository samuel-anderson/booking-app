import { useDispatch } from "react-redux";
import { addService } from "../../../../features/cart/cartSlice";

import { ServiceCardStyles } from "./service-card.styles";

const ServiceCard = ({ service, onClickHandler, isSelected }) => {
  const { title, duration, price } = service;
  const dispatch = useDispatch();

  const clickHandler = () => {
    if (!isSelected) {
      dispatch(addService({ service }));
      onClickHandler(service);
    }
  };

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
    </ServiceCardStyles>
  );
};

export default ServiceCard;
