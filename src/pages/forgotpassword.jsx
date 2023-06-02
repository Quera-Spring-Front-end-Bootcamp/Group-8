import { AuthFooter } from "../components/Login/AuthFooter/AuthFooter";
import { AuthHeader } from "../components/Login/AuthHeader/AuthHeader";
import ForgotPasswordForm from "../components/Login/ForgotPasswordForm/ForgotPasswordForm";

const forgotPassword = () => {
  return (
    <>
      <AuthHeader
        text={"قبلاً ثبت نام کردی؟"}
        buttonText={"ورود"}
        link={"login"}
      />
      <ForgotPasswordForm />
      <AuthFooter />
    </>
  );
};

export default forgotPassword;