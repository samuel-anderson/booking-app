import ProfessionalList from "../../components/main/content/professional-list/professional-list.component";
// import GenericCard from "../../components/main/content/generic-card/generic-card.component";
import { Container } from "./professional.styles";
const Professional = () => {
  return (
    <div>
      Choose a professional
      <Container>
        {/* <GenericCard title="Choose a service first" /> */}
        <ProfessionalList />
      </Container>
    </div>
  );
};

export default Professional;
