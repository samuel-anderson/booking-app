import { ServicesContainer } from "./service-list.styles";
import ServiceCard from "../service-card/service-card.component";
import { useSelector } from "react-redux";

// const services = [
//   {
//     id: 1,
//     title: "Shave",
//     duration: 45,
//     price: 40,
//   },
//   {
//     id: 2,
//     title: "Shave",
//     duration: 45,
//     price: 40,
//   },
//   {
//     id: 3,
//     title: "Shave",
//     duration: 45,
//     price: 40,
//   },
//   {
//     id: 4,
//     title: "Shave",
//     duration: 45,
//     price: 40,
//   },
//   {
//     id: 5,
//     title: "Shave",
//     duration: 45,
//     price: 40,
//   },
//   {
//     id: 6,
//     title: "Shave",
//     duration: 45,
//     price: 40,
//   },
//   {
//     id: 7,
//     title: "Shave",
//     duration: 45,
//     price: 40,
//   },
//   {
//     id: 8,
//     title: "Shave",
//     duration: 45,
//     price: 40,
//   },
// ];

const ServiceList = () => {
  const services = useSelector((state) => state.services.services);
  const serviceList = services[0].data.data;

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
