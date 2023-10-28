import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getStep, STEPS } from "../stepper/stepper.component";
import useNavigation from "../../../../hooks/useNavigation";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import useSMS from "../../../../hooks/useSMS";

const defaultFormFields = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
};

const Finish = () => {
  const activeStep = useSelector((state) => state.step.activeStep);
  const { navigateAndUpdateStep } = useNavigation();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, phoneNumber } = formFields;
  const [phoneError, setPhoneError] = useState("");

  const { submitBooking } = useSMS();

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
      submitBooking(firstName, lastName, phoneNumber);
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
      <h3>Finish Booking</h3>
      <form onSubmit={submitHandler} style={{ width: "100%" }}>
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
        <Button buttonOptions={{ type: "submit" }}>Finish Booking!</Button>
      </form>
    </div>
  );
};

export default Finish;
