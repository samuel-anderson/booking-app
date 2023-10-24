// import useNavigation from "../../../../hooks/useNavigation";
// import { getStep, STEPS } from "../stepper/stepper.component";
import ProfessionalCard from "../professional-card/professional-card.component";
import { useSelector } from "react-redux";

const ProfessionalList = () => {
  const professionals = useSelector((state) => state.professionals.barbers);

  return (
    <>
      {professionals.map((professional, idx) => {
        return (
          <div key={idx}>
            <ProfessionalCard professional={professional} />
          </div>
        );
      })}
    </>
  );
};

export default ProfessionalList;
