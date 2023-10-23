import { ServicesContainer } from "./service-list.styles";
import ServiceCard from "../service-card/service-card.component";
import { useSelector, useDispatch } from "react-redux";

import { setStep } from "../../../../features/step/stepSlice";

import { useEffect } from "react";

const ServiceList = () => {
  const services = useSelector((state) => state.services.services);
  const selectedService = useSelector((state) => state.cart.service);
  const activeStep = useSelector((state) => state.step.activeStep);
  const selectedProfessional = useSelector((state) => state.cart.professional);

  const filterServiceByBarber = (barber) => {
    const filteredServices = services
      .filter((service) =>
        barber.services.some((filterService) => filterService.id === service.id)
      )
      .map((service) => {
        const customService = barber.services.find(
          (item) => item.id === service.id
        );
        return {
          ...service,
          duration: customService.duration,
        };
      });
    return filteredServices;
  };

  const serviceList =
    selectedProfessional && selectedProfessional.services
      ? filterServiceByBarber(selectedProfessional)
      : services;

  const dispatch = useDispatch();

  useEffect(() => {
    if (activeStep !== 1) dispatch(setStep(1));
  }, [dispatch, activeStep]);

  return (
    <div style={{ position: "relative" }}>
      Choose a service
      {selectedService && <ServiceCard service={selectedService} />}
      <ServicesContainer>
        {serviceList
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
