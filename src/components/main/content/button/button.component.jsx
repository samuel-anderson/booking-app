import { BtnContainer } from "./button.styles";

const Button = ({ text, classStyle }) => {
  return (
    <BtnContainer className={`.${classStyle}`}>
      <p>{text}</p>
    </BtnContainer>
  );
};

export default Button;
