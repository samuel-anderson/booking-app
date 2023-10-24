import useNavigation from "../../../../hooks/useNavigation";
import { getStep, STEPS } from "../stepper/stepper.component";

import { GenericCardStyles } from "./generic-card.styles";

const GenericCard = ({ icon, title, subText }) => {
  const { navigateAndUpdateStep } = useNavigation();

  const navigate = () => {
    const { route, step } = getStep(STEPS.service);
    navigateAndUpdateStep(route, step);
  };
  return (
    <GenericCardStyles onClick={navigate}>
      <span>{title}</span>
    </GenericCardStyles>
  );
};

export default GenericCard;
