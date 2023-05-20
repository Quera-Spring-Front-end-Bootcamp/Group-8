import { AuthFooter } from "../components/AuthFooter/AuthFooter";
import { AuthHeader } from "../components/AuthHeader/AuthHeader";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const register = () => {
    return (
        <>
            <AuthHeader />
            <RegisterForm/>
            <AuthFooter />
        </>
    )

};

export default register;