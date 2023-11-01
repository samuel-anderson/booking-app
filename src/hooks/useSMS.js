import { useSelector } from "react-redux";
import { sendSMS } from "../utils/firebase";
import { appointmentObjectToAdd } from "../utils/firebase";
import { updateDocument } from "../utils/firebase";

const useSMS = () => {
  const cart = useSelector((state) => state.cart);

  const showAddOns = () => {
    if (cart.addOns.length === 0) return "";
    else if (cart.addOns.length === 1)
      return ` with ${cart.addOns.length} addon`;
    else return ` with ${cart.addOns.length} addons`;
  };

  const insertBooking = (
    clientFirstName,
    clientLastName,
    clientPhoneNumber
  ) => {
    //clean up forming the appointment info obj
    //export more functions
    //create form, with input and labels
    //onSubmit****
    //test exisiting apointment logic

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

  const submitBooking = (
    clientFirstName,
    clientLastName,
    clientPhoneNumber
  ) => {
    try {
      insertBooking(clientFirstName, clientLastName, clientPhoneNumber);
      if (cart.professional) {
        return sendSMS({
          clientName: `${clientFirstName} ${clientLastName}`,
          professionalPhoneNumber: cart.professional.phoneNumber,
          date: cart.serviceDate,
          startTime: cart.startTime,
          endTime: cart.endTime,
          service: cart.service.title + showAddOns(),
          clientPhoneNumber: clientPhoneNumber,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return {
    submitBooking,
  };
};

export default useSMS;
