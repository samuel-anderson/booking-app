import { Routes, Route } from "react-router-dom";
import Professional from "../../../routes/professional/professional.component";
import Service from "../../../routes/service/service.component";
import Availability from "../../../routes/availability/availability.component";
import Step from "../../../routes/step/step.component";
import Complete from "../../../routes/complete/complete.component";
import { ContentStyles } from "./content.styles";

const Content = () => {
  return (
    <ContentStyles>
      <Step />
      <Routes>
        <Route path="/" element={<Professional />} />
        <Route path="services" element={<Service />} />
        <Route path="availability" element={<Availability />} />
        <Route path="finish" element={<Complete />} />
      </Routes>
    </ContentStyles>
  );
};

export default Content;
