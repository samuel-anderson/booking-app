import ServiceList from "../../components/main/content/service-list/service-list.component";
import Header from "../../components/main/content/header/header.component";
import useNavigation from "../../hooks/useNavigation";
import {
  getStep,
  STEPS,
} from "../../components/main/content/stepper/stepper.component";
import { useEffect } from "react";

const Service = () => {
  const { step } = getStep(STEPS.service);
  const { checkStep } = useNavigation();

  useEffect(() => {
    checkStep(step);
  }, [checkStep, step]);

  return (
    <div style={{ position: "relative" }}>
      <Header text="Choose Service" />
      <ServiceList />
    </div>
  );
};

export default Service;
