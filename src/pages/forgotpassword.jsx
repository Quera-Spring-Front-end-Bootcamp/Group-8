import { AuthFooter } from "../components/AuthFooter/AuthFooter";
import { AuthHeader } from "../components/AuthHeader/AuthHeader";
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