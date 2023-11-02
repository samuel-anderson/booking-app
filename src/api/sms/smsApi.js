import { sendSMS } from "../../utils/firebase";
import { appointmentObjectToAdd } from "../../utils/firebase";
import { updateDocument } from "../../utils/firebase";

const showAddOns = (cart) => {
  if (cart.addOns.length === 0) return "";
  else if (cart.addOns.length === 1) return ` with ${cart.addOns.length} addon`;
  else return ` with ${cart.addOns.length} addons`;
};

const insertBooking = (cart, clientInfo) => {
  const { clientFirstName, clientLastName, clientPhoneNumber } = clientInfo;

  const updateObj = appointmentObjectToAdd(
    cart.professional.id,
    cart.serviceDate,
    {
      clientName: `${clientFirstName} ${clientLastName}`,
      clientPhoneNumber: clientPhoneNumber,
      service: cart.service,
      addOns: cart.addOns,
      serviceDate: cart.serviceDate,
      startTime: cart.startTime,
      endTime: cart.endTime,
      estimatedDuration: cart.estimatedDuration,
    }
  );

  updateDocument("barber_shop", "appointments", updateObj);
};

export const submitBooking = (cart, clientInfo) => {
  try {
    const { clientFirstName, clientLastName, clientPhoneNumber } = clientInfo;
    insertBooking(cart, clientInfo);
    if (cart.professional) {
      return sendSMS({
        clientName: `${clientFirstName} ${clientLastName}`,
        professionalPhoneNumber: cart.professional.phoneNumber,
        date: cart.serviceDate,
        startTime: cart.startTime,
        endTime: cart.endTime,
        service: cart.service.title + showAddOns(cart),
        clientPhoneNumber: clientPhoneNumber,
      });
    }
  } catch (e) {
    console.log(e);
  }
};
