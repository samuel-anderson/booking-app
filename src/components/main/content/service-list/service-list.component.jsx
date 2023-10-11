import { ServicesContainer } from "./service-list.styles";
import ServiceCard from "../service-card/service-card.component";
import { useSelector } from "react-redux";
import { useState } from "react";

const ServiceList = () => {
  const services = useSelector((state) => state.services.services);
  const serviceList = services[0].data.items;
  const [selectedService, setSelectedService] = useState(null);

  const onSelectHandler = (service) => {
    setSelectedService(service);
  };

  const onAddHandler = (service) => {
    console.log("Add");
  };

  return (
    <div>
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
                <ServiceCard
                  service={service}
                  onClickHandler={
                    selectedService ? onAddHandler : onSelectHandler
                  }
                />
              </div>
            );
          })}
      </ServicesContainer>
    </div>
  );
};

export default ServiceList;
