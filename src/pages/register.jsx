import { AuthFooter } from "../components/Dashboard/login/AuthFooter/AuthFooter";
import { AuthHeader } from "../components/Dashboard/login/AuthHeader/AuthHeader";
import RegisterForm from "../components/Dashboard/login/RegisterForm/RegisterForm"

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