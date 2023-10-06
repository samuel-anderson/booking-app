import useNavigation from "../../../../hooks/useNavigation";
import { getStep, STEPS } from "../stepper/stepper.component";

const ProfessionalList = () => {
  const { navigateAndUpdateStep } = useNavigation();

  const handleClick = () => {
    const { route, step } = getStep(STEPS.service);
    navigateAndUpdateStep(route, step);
  };
  return (
    <div>
      Choose a professional - <span onClick={handleClick}>Go Service</span>
    </div>
  );
};

export default ProfessionalList;
