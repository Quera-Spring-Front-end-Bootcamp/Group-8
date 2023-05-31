import { AuthFooter } from "../components/login/AuthFooter/AuthFooter";
import { AuthHeader } from "../components/login/AuthHeader/AuthHeader";
import ResetPasswordForm from "../components/login/ResetPasswordForm/ResetPasswordForm"

const resetPassword = () => {
  return (
    <>
      <AuthHeader
        text={""}
        buttonText={""}
        link={""}
      />
      <ResetPasswordForm />
      <AuthFooter />
    </>
  );
};

export default resetPassword;