import { AuthFooter } from "../components/AuthFooter/AuthFooter";
import { AuthHeader } from "../components/AuthHeader/AuthHeader";
import ResetPasswordForm from "../components/ResetPasswordForm/ResetPasswordForm"

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