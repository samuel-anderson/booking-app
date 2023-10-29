import {
  showProfessional,
  showOrderTotal,
  showAddOnsMobile,
} from "../../../../utils/cart";
const MobileCartContent = ({
  service,
  professional,
  orderTotal,
  addOns,
  addOnTotal,
}) => {
  return (
    <div className="content">
      <div className="order-total">
        <span>{showProfessional(professional)}</span>
        <span>{showOrderTotal(orderTotal)}</span>
      </div>
      {service && (
        <div className="order-info">
          <div>{service.title.toUpperCase()}</div>
          <div>${service.price}</div>
        </div>
      )}
      {addOns.length > 0 && (
        <div className="order-info">
          <div>{showAddOnsMobile(addOns).replace("with", "+")}</div>
          <div>${addOnTotal}</div>
        </div>
      )}
    </div>
  );
};

export default MobileCartContent;
