import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStep, STEPS } from "../stepper/stepper.component";
import useNavigation from "../../../../hooks/useNavigation";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { sendSMSStart } from "../../../../features/sms/smsSlice";
import CircularProgress from "@mui/material/CircularProgress";
import { LoadingContainer } from "./finish.styles";

const defaultFormFields = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
};

const Finish = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const sms = useSelector((state) => state.sms);

  const activeStep = useSelector((state) => state.step.activeStep);
  const { navigateAndUpdateStep } = useNavigation();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, phoneNumber } = formFields;
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    const navigate = () => {
      const { route, step } = getStep(STEPS.professional);
      navigateAndUpdateStep(route, step);
    };

    if (activeStep !== 3) navigate();
  }, [navigateAndUpdateStep, activeStep]);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!validatePhoneNumber()) return;

    try {
      //const response = await submitBooking(firstName, lastName, phoneNumber);

      dispatch(
        sendSMSStart({
          cart: cart,
          clientInfo: {
            clientFirstName: firstName,
            clientLastName: lastName,
            clientPhoneNumber: phoneNumber,
          },
        })
      );

      resetFormFields();
    } catch (e) {
      console.log(e);
    }
  };

  const validatePhoneNumber = () => {
    if (phoneNumber.length !== 14) {
      setPhoneError("Please enter a valid phone number.");
      return false;
    } else {
      setPhoneError("");
      return true;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: name === "phoneNumber" ? formatPhoneNumber(value) : value,
    });
  };

  const formatPhoneNumber = (val) => {
    let value = val.replace(/\D/g, ""); // Remove non-numeric characters
    let formattedValue = "";

    if (value.length >= 1) {
      formattedValue = `(${value.slice(0, 3)}`;
    }
    if (value.length > 3) {
      formattedValue += `) ${value.slice(3, 6)}`;
    }
    if (value.length > 6) {
      formattedValue += `-${value.slice(6, 10)}`;
    }

    return formattedValue;
  };
  return (
    <div>
      <form
        onSubmit={submitHandler}
        style={{ width: "100%", paddingRight: 20 }}
      >
        <FormInput
          label="First Name"
          inputOptions={{
            type: "text",
            required: true,
            onChange: handleChange,
            name: "firstName",
            value: firstName,
          }}
        />

        <FormInput
          label="Last Name"
          inputOptions={{
            type: "text",
            required: true,
            onChange: handleChange,
            name: "lastName",
            value: lastName,
          }}
        />

        <FormInput
          label="Phone Number"
          inputOptions={{
            type: "tel",
            required: true,
            onChange: handleChange,
            name: "phoneNumber",
            value: phoneNumber,
          }}
        />

        <div>{phoneError}</div>
        {!sms.loading && (
          <Button buttonOptions={{ type: "submit" }}>Finish Booking!</Button>
        )}
        {sms.loading && (
          <LoadingContainer>
            <CircularProgress />
          </LoadingContainer>
        )}
      </form>
    </div>
  );
};

export default Finish;
