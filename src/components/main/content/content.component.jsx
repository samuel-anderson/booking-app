import { Routes, Route } from "react-router-dom";

import ProfessionalList from "./professional-list/professional-list.component";
import ServiceList from "./service-list/service-list.component";
import Steps from "./stepper/stepper.component";
import Time from "./time/time.component";
import Completed from "./completed/completed.component";
import { ContentStyles } from "./content.styles";

const Content = () => {
  return (
    <ContentStyles>
      <Steps />
      <Routes>
        <Route path="/" element={<ProfessionalList />} />
        <Route path="/service" element={<ServiceList />} />
        <Route path="/time" element={<Time />} />
        <Route path="/done" element={<Completed />} />
      </Routes>
    </ContentStyles>
  );
};

export default Content;
