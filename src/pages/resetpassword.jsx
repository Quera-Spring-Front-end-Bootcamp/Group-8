import { AuthFooter } from "../components/AuthFooter/AuthFooter";
import { AuthHeader } from "../components/AuthHeader/AuthHeader";
import ResetPassword from "../components/ResetPasswordForm/ResetPasswordForm"

const resetpassword = () => {
  return (
    <>
      <AuthHeader
        text={""}
        buttonText={""}
        link={""}
      />
      <ResetPassword />
      <AuthFooter />
    </>
  );
};

export default resetpassword;