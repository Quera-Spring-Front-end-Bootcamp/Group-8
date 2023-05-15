import Login from "../components/Login/Login";
import { AuthFooter } from "../components/AuthFooter/AuthFooter";
import { AuthHeader } from "../components/AuthHeader/AuthHeader";

const login = () => {
    return (

        <>
            <AuthHeader />
            <Login />
            <AuthFooter />
        </>
    )

};

export default login;