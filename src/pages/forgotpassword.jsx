import { AuthFooter } from "../components/login/AuthFooter/AuthFooter";
import { AuthHeader } from "../components/login/AuthHeader/AuthHeader";
<<<<<<< HEAD
import ForgotPasswordForm from "../components/login/ForgotPasswordForm/ForgotPasswordForm";
=======
import ForgotPasswordForm from "../components//login/ForgotPasswordForm/ForgotPasswordForm";
>>>>>>> eldamavandi

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