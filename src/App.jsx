import { Route } from "react-router-dom";
import Forgotpassword from "./pages/forgotpassword";
import Register from "./pages/register";
import Login from "./pages/login";
import ResetPassword from "./pages/resetpassword";
import SendPasswordForm from "./pages/sendpassword";
<<<<<<< HEAD
import Layout from "./components/Dashboard/Layout/index";
import Profile from './pages/profile'
import ListView from './pages/listview'
import ColumnView from './pages/columnview'
=======

import Layout from "./components/Dashboard/Layout/index";

>>>>>>> 02ffb7a45c32f4c1531fa73c8d98d1cdc57d0760
import "./styles/App.css";

function App() {
  return (
    <>
      <Route exact path="/" component={Login} />
<<<<<<< HEAD

=======
>>>>>>> 02ffb7a45c32f4c1531fa73c8d98d1cdc57d0760
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
<<<<<<< HEAD
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path='/listview'>
          <ListView/>
      </Route>
      <Route path='/columnview'>
          <ColumnView/>
      </Route>
      
=======
>>>>>>> 02ffb7a45c32f4c1531fa73c8d98d1cdc57d0760
    </>
  );
}

export default App;
