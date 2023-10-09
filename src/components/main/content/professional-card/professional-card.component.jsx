import { ProfessionalCardStyles } from "./professional-card.styles";

const ProfessionalCard = ({ professional }) => {
  const { imageUrl, name, nextAvailableTime } = professional;
  return (
    <ProfessionalCardStyles>
      <img src={imageUrl} alt={`${name}`} />

      <span>{name}</span>
      <span>{nextAvailableTime}</span>
    </ProfessionalCardStyles>
  );
};

export default ProfessionalCard;
