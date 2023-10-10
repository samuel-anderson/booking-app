import { ServicesContainer } from "./service-list.styles";
import ServiceCard from "../service-card/service-card.component";

const services = [
  {
    id: 1,
    title: "Shave",
    duration: 45,
    price: 40,
  },
  {
    id: 2,
    title: "Shave",
    duration: 45,
    price: 40,
  },
  {
    id: 3,
    title: "Shave",
    duration: 45,
    price: 40,
  },
  {
    id: 4,
    title: "Shave",
    duration: 45,
    price: 40,
  },
  {
    id: 5,
    title: "Shave",
    duration: 45,
    price: 40,
  },
  {
    id: 6,
    title: "Shave",
    duration: 45,
    price: 40,
  },
  {
    id: 7,
    title: "Shave",
    duration: 45,
    price: 40,
  },
  {
    id: 8,
    title: "Shave",
    duration: 45,
    price: 40,
  },
];

const ServiceList = () => {
  return (
    <div>
      Choose a service
      <ServicesContainer>
        {services.map((service) => {
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
