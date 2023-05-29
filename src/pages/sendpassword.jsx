import { AuthFooter } from "../components/login/AuthFooter/AuthFooter";
import { AuthHeader } from "../components/login/AuthHeader/AuthHeader";
import SendPasswordForm from "../components/login/SendPasswordForm/SendPasswordForm";

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