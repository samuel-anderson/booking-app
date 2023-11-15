import { useState, useEffect } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { selectBarberEmails } from "../../../../features/professionals/professionalsSelector";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import { signInStart, signUpStart } from "../../../../features/user/userSlice";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = ({ action, goBack }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userSlice = useSelector((state) => state.user);

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
      if (action === "register") dispatch(signUpStart({ email, password }));
      else dispatch(signInStart({ email, password }));

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
    } else setError("*Barber email NOT found*");
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

        {userSlice.loading ? (
          <CircularProgress />
        ) : (
          <>
            <p style={{ fontSize: 14, color: "red" }}>{error}</p>
            <p style={{ fontSize: 14, color: "red" }}>{userSlice.error}</p>
          </>
        )}

        {validEmail && (
          <Button
            buttonOptions={{ type: "submit", style: { marginBottom: 10 } }}
          >
            {action === "login" ? "LOG IN" : "REGISTER"}
          </Button>
        )}
        {!validEmail && (
          <Button
            buttonOptions={{ onClick: nextClick, style: { marginBottom: 10 } }}
          >
            NEXT
          </Button>
        )}
        <Button buttonOptions={{ onClick: goBack }}>
          BACK TO SIGN IN PAGE
        </Button>
      </form>
    </>
  );
};

export default SignInForm;
