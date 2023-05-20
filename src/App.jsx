import { Route } from "react-router-dom";
import Forgotpassword from "./pages/forgotpassword";
import Register from "./pages/register";
import Login from "./pages/login";
import ResetPassword from "./pages/resetpassword";
import "./styles/App.css";

function App() {
  return (
    <>
      {/* <Route path="/Login">
        <Login />
      </Route> */}
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
    </>
  );
}

export default App;
