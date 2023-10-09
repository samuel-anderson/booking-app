import useNavigation from "../../../../hooks/useNavigation";
import { getStep, STEPS } from "../stepper/stepper.component";

const Completed = () => {
  const { navigateAndUpdateStep } = useNavigation();

  const handleClick = () => {
    const { route, step } = getStep(STEPS.professional);
    navigateAndUpdateStep(route, step);
  };
  return (
    <div>
      Done <span onClick={handleClick}>Reset</span>
    </div>
  );
};

export default Completed;
