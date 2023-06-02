import { AuthFooter } from "../components/Login/AuthFooter/AuthFooter";
import { AuthHeader } from "../components/Login/AuthHeader/AuthHeader";
import SendPasswordForm from "../components/Login/SendPasswordForm/SendPasswordForm"

const forgotPassword = () => {
  return (
    <>
      <AuthHeader
        text={"قبلاً ثبت نام کردی؟"}
        buttonText={"ورود"}
        link={"Login"}
      />
      <SendPasswordForm />
      <AuthFooter />
    </>
  );
};

export default forgotPassword;