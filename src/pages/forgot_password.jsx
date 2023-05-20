import { AuthFooter } from "../components/AuthFooter/AuthFooter";
import { AuthHeader } from "../components/AuthHeader/AuthHeader";
import ForgotPasswordForm from "../components/ForgotPasswordForm/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <>
      <AuthHeader
        text={"قبلاً ثبت نام کردی؟"}
        buttonText={"ورود"}
        link={"Login"}
      />
      <ForgotPasswordForm />
      <AuthFooter />
    </>
  );
};

export default ForgotPassword;