import { AuthFooter } from "../components/AuthFooter/AuthFooter";
import { AuthHeader } from "../components/AuthHeader/AuthHeader";
import ForgotPassword from "../components/ForgotPasswordForm/ForgotPasswordForm";

const forgotpassword = () => {
  return (
    <>
      <AuthHeader
        text={"قبلاً ثبت نام کردی؟"}
        buttonText={"ورود"}
        link={"Login"}
      />
      <ForgotPassword />
      <AuthFooter />
    </>
  );
};

export default forgotpassword;