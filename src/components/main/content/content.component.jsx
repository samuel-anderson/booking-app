import { Routes, Route } from "react-router-dom";
import Professional from "../../../routes/professional/professional.component";
import Service from "../../../routes/service/service.component";
import Availability from "../../../routes/availability/availability.component";
import Step from "../../../routes/step/step.component";
import Done from "../../../routes/done/done.component";
import { ContentStyles } from "./content.styles";

const Content = () => {
  return (
    <ContentStyles>
      <Routes>
        <Route path="/" element={<Step />}>
          <Route index element={<Professional />} />
          <Route path="/services" element={<Service />} />
          <Route path="/availability" element={<Availability />} />
          <Route path="/done" element={<Done />} />
        </Route>
      </Routes>
    </ContentStyles>
  );
};

export default Content;
