import Content from "./content/content.component";
import Cart from "./cart/cart.component";
import { MainStyles } from "./main.styles";

const Main = () => {
  return (
    <MainStyles>
      <Content />
      <Cart />
    </MainStyles>
  );
};

export default Main;
