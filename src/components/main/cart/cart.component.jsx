import { useSelector } from "react-redux";
import { CartStyles } from "./cart.styles";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const activeStep = useSelector((state) => state.step.activeStep);

  const showProfessional = () => {
    return cart.professional ? (
      <div>Some Professional</div>
    ) : (
      <div>Any Professional</div>
    );
  };

  return (
    <CartStyles>
      Cart
      {activeStep === 0 && <div>Skeleton</div>}
      {activeStep === 1 && showProfessional()}
      {cart.service && <div>{cart.service.title}</div>}
      {cart.addOns.length > 0 &&
        cart.addOns.map((addOn, idx) => <div key={idx}>{addOn.title}</div>)}
    </CartStyles>
  );
};

export default Cart;
