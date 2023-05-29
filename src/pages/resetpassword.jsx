import { AuthFooter } from "../components/Login/AuthFooter/AuthFooter";
import { AuthHeader } from "../components/Login/AuthHeader/AuthHeader";
import ResetPasswordForm from "../components/Login/ResetPasswordForm/ResetPasswordForm"

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