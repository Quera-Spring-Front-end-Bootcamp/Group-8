import { Route } from "react-router-dom";
import Forgotpassword from "./pages/forgotpassword";
import Register from "./pages/register";
import Login from "./pages/login";
import ResetPassword from "./pages/resetpassword";
import SendPasswordForm from "./pages/sendpassword";
import "./styles/App.css";

function App() {
  return (
    <>
      <Route exact path="/" component={Login} />
      <Route path="/Register">
        <Register />
      </Route>
      <Route path="/ForgotPassword">
        <Forgotpassword />
      </Route>
      <Route path="/ResetPassword">
        <ResetPassword />
      </Route>
      <Route path="/sendpassword">
        <SendPasswordForm />
      </Route>
    </>
  );
}

export default App;
