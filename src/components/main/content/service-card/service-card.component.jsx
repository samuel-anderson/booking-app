import { useDispatch } from "react-redux";
import { addService } from "../../../../features/cart/cartSlice";

import { ServiceCardStyles } from "./service-card.styles";

const ServiceCard = ({ service }) => {
  const { title, duration, price } = service;
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(addService({ service }));
  };

  return (
    <ServiceCardStyles onClick={clickHandler}>
      <div className="service">
        <p className="title">{title.toUpperCase()}</p>
        <p className="duration">{duration} min</p>
      </div>
      <p className="price">${price}</p>
    </ServiceCardStyles>
  );
};

export default ServiceCard;
