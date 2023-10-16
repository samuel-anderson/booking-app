import useNavigation from "../../../../hooks/useNavigation";
import { getStep, STEPS } from "../stepper/stepper.component";
import { useDispatch } from "react-redux";
import { setProfessional } from "../../../../features/cart/cartSlice";

import { ProfessionalCardStyles } from "./professional-card.styles";

const ProfessionalCard = ({ professional }) => {
  const {
    data: { name },
  } = professional;
  const { navigateAndUpdateStep } = useNavigation();
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(setProfessional({ professional: professional.data }));
    navigate();
  };

  const navigate = () => {
    const { route, step } = getStep(STEPS.service);
    navigateAndUpdateStep(route, step);
  };
  return (
    <ProfessionalCardStyles onClick={clickHandler}>
      <img src="/images/ryan_johnson.jpg" alt={`${name}`} />
      <span>{name}</span>
      {/* <span>nextAvailableTime</span> */}
    </ProfessionalCardStyles>
  );
};

export default ProfessionalCard;
