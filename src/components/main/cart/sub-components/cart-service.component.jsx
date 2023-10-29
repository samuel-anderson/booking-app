import { showAddOnsDesktop, showOrderTotal } from "../../../../utils/cart";
const CartService = ({ title, addOns, orderTotal }) => {
  return (
    <div className="order-info">
      <div>
        {title}
        {showAddOnsDesktop(addOns)}
      </div>
      <div>{showOrderTotal(orderTotal)}</div>
    </div>
  );
};

export default CartService;
