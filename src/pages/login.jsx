import LoginForm from "../components/LoginForm/LoginForm";
import { AuthFooter } from "../components/AuthFooter/AuthFooter";
import { AuthHeader } from "../components/AuthHeader/AuthHeader";

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
