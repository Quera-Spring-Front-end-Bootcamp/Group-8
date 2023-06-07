import { AuthFooter } from "../components/login/AuthFooter/AuthFooter";

import ForgotPasswordForm from "../components/login/ForgotPasswordForm/ForgotPasswordForm";


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