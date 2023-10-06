import { useNavigate } from "react-router-dom";
import { setStep } from "../../../../features/step/stepSlice";

import { useDispatch, useSelector } from "react-redux";

const ProfessionalList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const activeStep = useSelector((state) => state.step.activeStep);

  const handleClick = () => {
    dispatch(setStep(activeStep + 1));

    navigate("/service");
  };
  return (
    <div>
      Choose a professional - <span onClick={handleClick}>Click Me</span>
    </div>
  );
};

export default ProfessionalList;
