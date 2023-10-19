import Content from "./content/content.component";
import Cart from "./cart/cart.component";
import MobileCart from "./mobile-cart/mobile-cart.component";
import { MainStyles } from "./main.styles";

const Main = () => {
  return (
    <MainStyles>
      <Content />
      <Cart />
      <MobileCart />
    </MainStyles>
  );
};

export default Main;
