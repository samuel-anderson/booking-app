import ServiceList from "../../components/main/content/service-list/service-list.component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setStep } from "../../features/step/stepSlice";
import Header from "../../components/main/content/header/header.component";

const Service = () => {
  const activeStep = useSelector((state) => state.step.activeStep);

  const dispatch = useDispatch();

  useEffect(() => {
    if (activeStep !== 1) dispatch(setStep(1));
  }, [dispatch, activeStep]);

  return (
    <div style={{ position: "relative" }}>
      <Header text="Choose Service" />
      <ServiceList />
    </div>
  );
};

export default Service;
