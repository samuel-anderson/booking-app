import Content from "./content/content.component";
import Cart from "./cart/cart.component";
import MobileCart from "./mobile-cart/mobile-cart.component";
import { MainStyles } from "./main.styles";

const Main = () => {
  const showCart = () => {
    const mobileBreakPoint = 768;
    const isMobile = window.innerWidth < mobileBreakPoint;

    if (isMobile) return <MobileCart />;
    else return <Cart />;
  };

  return (
    <MainStyles>
      <Content />
      {showCart()}
    </MainStyles>
  );
};

export default Main;
