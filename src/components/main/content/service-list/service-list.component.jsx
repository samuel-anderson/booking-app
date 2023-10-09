import useNavigation from "../../../../hooks/useNavigation";
import { getStep, STEPS } from "../stepper/stepper.component";
import { useSelector } from "react-redux";

const ServiceList = () => {
  const { navigateAndUpdateStep } = useNavigation();
  const { id, name } = useSelector((state) => state.cart.professional);

  const handleClick = () => {
    const { route, step } = getStep(STEPS.time);
    navigateAndUpdateStep(route, step);
  };
  return (
    <div>
      Choose a service <span onClick={handleClick}>Go to Time</span>
      <div>
        {name} - {id}
      </div>
    </div>
  );
};

export default ServiceList;
