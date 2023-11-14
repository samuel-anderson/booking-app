import { useState, useEffect } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { selectBarberEmails } from "../../../../features/professionals/professionalsSelector";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signUpStart } from "../../../../features/user/userSlice";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.user.currentUser);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const [validEmail, setValidEmail] = useState(false);
  const [error, setError] = useState(null);
  const barberEmails = useSelector(selectBarberEmails);
  //const professionals = useSelector((state) => state.professionals.barbers);

  useEffect(() => {
    if (currentUser) navigate("/dashboard");
  }, [navigate, currentUser]);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!email || !password) return;
    else {
      dispatch(signUpStart({ email, password }));
      finishAuth();
    }
  };

  const finishAuth = () => {
    resetFormFields();
    setValidEmail(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const nextClick = () => {
    if (barberEmails.includes(email)) {
      setValidEmail(true);
      setError(null);
    } else setError("*Email NOT found*");
  };
  return (
    <>
      <form
        onSubmit={submitHandler}
        style={{ width: "100%", paddingRight: 20 }}
      >
        {!validEmail && (
          <FormInput
            label="Email"
            inputOptions={{
              type: "email",
              required: true,
              onChange: handleChange,
              name: "email",
              value: email,
            }}
          />
        )}
        <p style={{ fontSize: 14, color: "red" }}>{error}</p>

        {validEmail && (
          <FormInput
            label="Password"
            inputOptions={{
              type: "password",
              required: true,
              onChange: handleChange,
              name: "password",
              value: password,
            }}
          />
        )}

        {validEmail && (
          <Button buttonOptions={{ type: "submit" }}>LOG IN</Button>
        )}

        {!validEmail && (
          <Button buttonOptions={{ onClick: nextClick }}>NEXT</Button>
        )}
      </form>
    </>
  );
};

export default SignInForm;
