import { AuthFooter } from "../components/AuthFooter/AuthFooter";
import { AuthHeader } from "../components/AuthHeader/AuthHeader";
import ResetPasswordForm from "../components/ResetPasswordForm/ResetPasswordForm"

const ResetPassword = () => {
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

export default ResetPassword;