import { useSelector } from "react-redux";
import { CartStyles } from "./cart.styles";
import CartSkeleton from "../cart-skeleton/cart-skeleton.component";
import { selectOrderTotal } from "../../../features/cart/cartSelector";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const activeStep = useSelector((state) => state.step.activeStep);

  const orderTotal = useSelector(selectOrderTotal);
  const orderDiplay = orderTotal !== 0 ? `$${orderTotal}` : "";

  const showProfessional = () => {
    return (
      <div className="order-total">
        <span>
          {cart.professional ? cart.professional.name : "Any Professional"}
        </span>
        <span>{orderDiplay}</span>
      </div>
    );
  };

  return (
    <CartStyles>
      <div className="order-text">Your Order </div>
      {activeStep === 0 && <CartSkeleton />}
      {activeStep === 1 && showProfessional()}

      {cart.service && (
        <div className="order-info">
          <div>
            {cart.service.title}
            {cart.addOns.length === 0
              ? ""
              : ` with ${cart.addOns.length} addon(s)`}
          </div>
          <div>{orderDiplay}</div>
        </div>
      )}
    </CartStyles>
  );
};

export default Cart;
