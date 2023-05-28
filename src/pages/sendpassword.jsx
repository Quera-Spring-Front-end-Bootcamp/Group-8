import { AuthFooter } from "../components/Dashboard/login/AuthFooter/AuthFooter";
import { AuthHeader } from "../components/Dashboard/login/AuthHeader/AuthHeader";
import SendPasswordForm from "../components/Dashboard/login/SendPasswordForm/SendPasswordForm";

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