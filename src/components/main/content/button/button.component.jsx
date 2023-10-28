import { BtnContainer } from "./button.styles";

const Button = ({ children, buttonOptions }) => {
  return <BtnContainer {...buttonOptions}>{children}</BtnContainer>;
};

export default Button;
