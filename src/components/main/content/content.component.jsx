import { Routes, Route } from "react-router-dom";

import ProfessionalList from "./professional-list/professional-list.component";
import ServiceList from "./service-list/service-list.component";
import Steps from "./stepper/stepper.component";

import { ContentStyles } from "./content.styles";

const Content = () => {
  return (
    <ContentStyles>
      <Steps />
      <Routes>
        <Route path="/" element={<ProfessionalList />} />
        <Route path="/service" element={<ServiceList />} />
      </Routes>
    </ContentStyles>
  );
};

export default Content;
