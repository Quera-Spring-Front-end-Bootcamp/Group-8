import { AuthFooter } from "../components/Dashboard/login/AuthFooter/AuthFooter";
import { AuthHeader } from "../components/Dashboard/login/AuthHeader/AuthHeader";
import ResetPasswordForm from "../components/Dashboard/login/ResetPasswordForm/ResetPasswordForm"

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