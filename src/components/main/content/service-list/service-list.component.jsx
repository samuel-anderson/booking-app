import useNavigation from "../../../../hooks/useNavigation";
import { getStep, STEPS } from "../stepper/stepper.component";

const ServiceList = () => {
  const { navigateAndUpdateStep } = useNavigation();

  const handleClick = () => {
    const { route, step } = getStep(STEPS.time);
    navigateAndUpdateStep(route, step);
  };
  return (
    <div>
      Choose a service <span onClick={handleClick}>Go to Time</span>
    </div>
  );
};

export default ServiceList;
