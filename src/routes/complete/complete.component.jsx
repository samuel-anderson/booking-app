import Finish from "../../components/main/content/finish/finish.component";
import Header from "../../components/main/content/header/header.component";
import Confirmation from "../../components/main/content/confirmation/confirmation.component";
import { useSelector } from "react-redux";
import {
  getStep,
  STEPS,
} from "../../components/main/content/stepper/stepper.component";
import { useEffect } from "react";
import useNavigation from "../../hooks/useNavigation";

const Complete = () => {
  const isCartFinised = useSelector((state) => state.cart.isFinished);

  const { step } = getStep(STEPS.finish);
  const { checkStep } = useNavigation();

  useEffect(() => {
    checkStep(step);
  }, [checkStep, step]);

  return (
    <>
      <Header text="Finish Booking" />
      {!isCartFinised && <Finish />}
      {isCartFinised && <Confirmation />}
    </>
  );
};

export default Complete;
