import { ServicesContainer } from "./service-list.styles";
import ServiceCard from "../service-card/service-card.component";
import { useSelector, useDispatch } from "react-redux";

import { fetchServicesStart } from "../../../../features/services/servicesSlice";
import { setStep } from "../../../../features/step/stepSlice";

import { useEffect } from "react";

const ServiceList = () => {
  const services = useSelector((state) => state.services.services);
  const selectedService = useSelector((state) => state.cart.service);
  const serviceList = services.length > 0 && services[0].data.items;
  const activeStep = useSelector((state) => state.step.activeStep);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServicesStart());
    if (activeStep !== 1) dispatch(setStep(1));
  }, [dispatch, activeStep]);

  return (
    <div style={{ position: "relative" }}>
      Choose a service
      {selectedService && <ServiceCard service={selectedService} />}
      <ServicesContainer>
        {serviceList &&
          serviceList
            .filter((service) => {
              if (!selectedService) return true;
              return service.id !== selectedService.id;
            })
            .map((service) => {
              return (
                <div key={service.id}>
                  <ServiceCard service={service} />
                </div>
              );
            })}
      </ServicesContainer>
    </div>
  );
};

export default ServiceList;
