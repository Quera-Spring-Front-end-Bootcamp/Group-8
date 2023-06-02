import LoginForm from "../components/Login/LoginForm/LoginForm";
import { AuthFooter } from "../components/Login/AuthFooter/AuthFooter";
import { AuthHeader } from "../components/Login/AuthHeader/AuthHeader";

const login = () => {
  return (
    <>
      <AuthHeader
        text={"ثبت نام نکردی؟"}
        buttonText={"ثبت نام"}
        link={"Register"}
      />
      <LoginForm />
      <AuthFooter />
    </>
  );
};

export default login;

// export default login;