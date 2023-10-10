// import useNavigation from "../../../../hooks/useNavigation";
// import { getStep, STEPS } from "../stepper/stepper.component";
import ProfessionalCard from "../professional-card/professional-card.component";
import { ProfessionalContainer } from "./professional-list.styles";
import { useSelector } from "react-redux";

const ProfessionalList = () => {
  const professionals = useSelector((state) => state.professionals.barbers);

  return (
    <div>
      Choose a professional
      <ProfessionalContainer>
        {professionals.map((professional, idx) => {
          return (
            <div key={idx}>
              <ProfessionalCard professional={professional} />
            </div>
          );
        })}
      </ProfessionalContainer>
    </div>
  );
};

export default ProfessionalList;
