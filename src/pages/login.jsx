import LoginForm from "../components/LoginForm/LoginForm";
import { AuthFooter } from "../components/login/AuthFooter/AuthFooter";
import { AuthHeader } from "../components/login/AuthHeader/AuthHeader";

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