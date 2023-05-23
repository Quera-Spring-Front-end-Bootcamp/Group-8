import { Route } from "react-router-dom";
import Forgotpassword from "./pages/forgotpassword";
import Register from "./pages/register";
import Login from "./pages/login";
import ResetPassword from "./pages/resetpassword";
import SendPasswordForm from "./pages/sendpassword";
import Layout from "./components/Layout/index"
import "./styles/App.css";

function App() {
  return (
    <>
      <Route exact path="/" component={Login} />
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/forgotPassword">
        <Forgotpassword />
      </Route>
      <Route path="/resetPassword">
        <ResetPassword />
      </Route>
      <Route path="/sendpassword">
        <SendPasswordForm />
      </Route>
      <Route path="/layout">
        <Layout />
      </Route>
    </>
  );
}

export default App;
