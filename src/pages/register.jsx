
import { AuthFooter } from "../components/login/AuthFooter/AuthFooter";
import { AuthHeader } from "../components/login/AuthHeader/AuthHeader";
import RegisterForm from "../components/login/RegisterForm/RegisterForm"

const register = () => {
    return (
        <>
           <AuthHeader
        text={"قبلاً ثبت نام کردی؟"}
        buttonText={"ورود"}
        link={"login"}
      />
      <RegisterForm />
      <AuthFooter />
        </>
    )

};

export default register;