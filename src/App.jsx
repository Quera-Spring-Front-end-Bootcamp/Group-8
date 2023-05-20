import { Route } from "react-router-dom";
import Forgotpassword from "./pages/forgotpassword";
import Register from "./pages/register";
import Login from "./pages/login";
import ResetPassword from "./pages/resetpassword";

function App() {
  return (
    <>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/Register">
        <Register />
      </Route>
      <Route path="/ForgotPassword">
        <Forgotpassword />
      </Route>
      <Route path="/ResetPassword">
        <ResetPassword />
      </Route>
    </>
  );
}

export default App;
