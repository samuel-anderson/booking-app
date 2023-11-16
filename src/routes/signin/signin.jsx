import SignInForm from "../../components/main/content/sign-in-form/sign-in-form.component";
import Button from "../../components/main/content/button/button.component";
import { useState } from "react";

const SignIn = () => {
  const [action, setAction] = useState(null);

  const backAction = () => {
    setAction(null);
  };

  const clickHandler = (loginOrRegister) => {
    setAction(loginOrRegister);
  };
  return (
    <>
      {action ? (
        <SignInForm action={action} goBack={backAction} />
      ) : (
        <>
          <Button
            buttonOptions={{
              onClick: () => clickHandler("login"),
              style: { marginBottom: 10 },
            }}
          >
            LOG IN
          </Button>

          <Button buttonOptions={{ onClick: () => clickHandler("register") }}>
            REGISTER
          </Button>
        </>
      )}
    </>
  );
};

export default SignIn;
