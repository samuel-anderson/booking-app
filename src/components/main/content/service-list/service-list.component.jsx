import { ServicesContainer } from "./service-list.styles";
import ServiceCard from "../service-card/service-card.component";
import { useSelector } from "react-redux";

const ServiceList = () => {
  const services = useSelector((state) => state.services.services);
  const serviceList = services[0].data.items;

  return (
    <div>
      Choose a service
      <ServicesContainer>
        {serviceList.map((service) => {
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
