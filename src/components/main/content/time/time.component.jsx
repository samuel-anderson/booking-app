import useNavigation from "../../../../hooks/useNavigation";
import { getStep, STEPS } from "../stepper/stepper.component";

const Time = () => {
  const { navigateAndUpdateStep } = useNavigation();

  const handleClick = () => {
    const { route, step } = getStep(STEPS.done);
    navigateAndUpdateStep(route, step);
  };
  return (
    <div>
      Choose a Time <span onClick={handleClick}>Go to Done</span>
    </div>
  );
};

export default Time;
