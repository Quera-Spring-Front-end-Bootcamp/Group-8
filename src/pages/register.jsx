import { AuthFooter } from "../components/Login/AuthFooter/AuthFooter";
import { AuthHeader } from "../components/Login/AuthHeader/AuthHeader";
import RegisterForm from "../components/Login/RegisterForm/RegisterForm"

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