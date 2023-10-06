import { useNavigate } from "react-router-dom";
import { setStep } from "../../../../features/step/stepSlice";

import { useDispatch, useSelector } from "react-redux";

const ServiceList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const activeStep = useSelector((state) => state.step.activeStep);

  const handleClick = () => {
    dispatch(setStep(activeStep - 1));
    navigate("/");
  };
  return (
    <div>
      Choose a service <span onClick={handleClick}>Click Me</span>
    </div>
  );
};

export default ServiceList;
