import { ServicesContainer } from "./service-list.styles";
import ServiceCard from "../service-card/service-card.component";
import { useSelector } from "react-redux";

const ServiceList = () => {
  const services = useSelector((state) => state.services.services);
  const selectedService = useSelector((state) => state.cart.service);
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

  return (
    <>
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
    </>
  );
};

export default ServiceList;
