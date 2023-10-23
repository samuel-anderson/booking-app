import Steps from "../../components/main/content/stepper/stepper.component";
import { Outlet } from "react-router-dom";

const Step = () => {
  return (
    <>
      <Steps />
      <Outlet />
    </>
  );
};

export default Step;
