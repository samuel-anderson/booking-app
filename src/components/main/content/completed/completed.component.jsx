import useNavigation from "../../../../hooks/useNavigation";
import useFCM from "../../../../hooks/useFCM";
import { getStep, STEPS } from "../stepper/stepper.component";

const Completed = () => {
  const { navigateAndUpdateStep } = useNavigation();
  const { request } = useFCM();

  //request();

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
