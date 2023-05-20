import { AuthFooter } from "../components/AuthFooter/AuthFooter";
import { AuthHeader } from "../components/AuthHeader/AuthHeader";
import SendPasswordForm from "../components/SendPasswordForm/SendPasswordForm";

const ForgotPassword = () => {
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

export default ForgotPassword;