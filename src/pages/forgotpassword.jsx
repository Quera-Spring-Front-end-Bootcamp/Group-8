import { AuthFooter } from "../components/Dashboard/login/AuthFooter/AuthFooter";
import { AuthHeader } from "../components/Dashboard/login/AuthHeader/AuthHeader";
import ForgotPasswordForm from "../components/ForgotPasswordForm/ForgotPasswordForm";

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