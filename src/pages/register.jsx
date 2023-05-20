import { AuthFooter } from "../components/AuthFooter/AuthFooter";
import { AuthHeader } from "../components/AuthHeader/AuthHeader";

const register = () => {
    return (
        <>
           <AuthHeader
        text={"قبلاً ثبت نام کردی؟"}
        buttonText={"ورود"}
        link={"Login"}
      />
      <ForgotPassword />
      <AuthFooter />
        </>
    )

};

export default Register;

export default register;