import { showProfessional, showOrderTotal } from "../../../../utils/cart";

const CartProfessional = ({ professional, orderTotal }) => {
  return (
    <div className="order-total">
      <span>{showProfessional(professional)}</span>
      <span>{showOrderTotal(orderTotal)}</span>
    </div>
  );
};

export default CartProfessional;
