import { ServicesContainer } from "./service-list.styles";
import ServiceCard from "../service-card/service-card.component";
import { useSelector } from "react-redux";

const ServiceList = () => {
  const services = useSelector((state) => state.services.services);
  const selectedService = useSelector((state) => state.cart.service);

  const serviceList = services[0].data.items;

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
