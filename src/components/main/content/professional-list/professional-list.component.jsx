import useNavigation from "../../../../hooks/useNavigation";
import { getStep, STEPS } from "../stepper/stepper.component";
import ProfessionalCard from "../professional-card/professional-card.component";
import { ProfessionalContainer } from "./professional-list.styles";

const professionals = [
  {
    imageUrl: "/images/ryan_johnson.jpg",
    name: "Sam",
    nextAvailableTime: "Tomorrow",
  },
  {
    imageUrl: "/images/ryan_johnson.jpg",
    name: "Sam",
    nextAvailableTime: "Tomorrow",
  },
  {
    imageUrl: "/images/ryan_johnson.jpg",
    name: "Sam",
    nextAvailableTime: "Tomorrow",
  },
  {
    imageUrl: "/images/ryan_johnson.jpg",
    name: "Sam",
    nextAvailableTime: "Tomorrow",
  },
  {
    imageUrl: "/images/ryan_johnson.jpg",
    name: "Sam",
    nextAvailableTime: "Tomorrow",
  },
  {
    imageUrl: "/images/ryan_johnson.jpg",
    name: "Sam",
    nextAvailableTime: "Tomorrow",
  },
  {
    imageUrl: "/images/ryan_johnson.jpg",
    name: "Sam",
    nextAvailableTime: "Tomorrow",
  },
  {
    imageUrl: "/images/ryan_johnson.jpg",
    name: "Sam",
    nextAvailableTime: "Tomorrow",
  },
  {
    imageUrl: "/images/ryan_johnson.jpg",
    name: "Sam",
    nextAvailableTime: "Tomorrow",
  },
];

const ProfessionalList = () => {
  const { navigateAndUpdateStep } = useNavigation();

  const handleClick = () => {
    const { route, step } = getStep(STEPS.service);
    navigateAndUpdateStep(route, step);
  };
  return (
    <div>
      Choose a professional - <span onClick={handleClick}>Go Service</span>
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
