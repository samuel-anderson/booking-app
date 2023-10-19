import { BtnContainer } from "./button.styles";

const Button = ({ clickHandler, text, classStyle }) => {
  return (
    <BtnContainer className={`${classStyle}`} onClick={clickHandler}>
      <p>{text}</p>
    </BtnContainer>
  );
};

export default Button;
