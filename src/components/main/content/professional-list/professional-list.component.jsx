// import useNavigation from "../../../../hooks/useNavigation";
// import { getStep, STEPS } from "../stepper/stepper.component";
import ProfessionalCard from "../professional-card/professional-card.component";
import { ProfessionalContainer } from "./professional-list.styles";

const professionals = [
  {
    id: 1,
    imageUrl: "/images/ryan_johnson.jpeg",
    name: "Sam",
    nextAvailableTime: "Tomorrow",
  },
  {
    id: 2,
    imageUrl: "/images/ryan_johnson.jpeg",
    name: "Sam",
    nextAvailableTime: "Tomorrow",
  },
  {
    id: 3,
    imageUrl: "/images/ryan_johnson.jpeg",
    name: "Sam",
    nextAvailableTime: "Tomorrow",
  },
  {
    id: 4,
    imageUrl: "/images/ryan_johnson.jpeg",
    name: "Sam",
    nextAvailableTime: "Tomorrow",
  },
  {
    id: 5,
    imageUrl: "/images/ryan_johnson.jpeg",
    name: "Sam",
    nextAvailableTime: "Tomorrow",
  },
  {
    id: 6,
    imageUrl: "/images/ryan_johnson.jpeg",
    name: "Sam",
    nextAvailableTime: "Tomorrow",
  },
  {
    id: 7,
    imageUrl: "/images/ryan_johnson.jpeg",
    name: "Sam",
    nextAvailableTime: "Tomorrow",
  },
  {
    id: 8,
    imageUrl: "/images/ryan_johnson.jpeg",
    name: "Sam",
    nextAvailableTime: "Tomorrow",
  },
  {
    id: 9,
    imageUrl: "/images/ryan_johnson.jpeg",
    name: "Sam",
    nextAvailableTime: "Tomorrow",
  },
];

const ProfessionalList = () => {
  // const { navigateAndUpdateStep } = useNavigation();

  // const handleClick = () => {
  //   const { route, step } = getStep(STEPS.service);
  //   navigateAndUpdateStep(route, step);
  // };
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
