import { Route } from "react-router-dom";
import Forgotpassword from "./pages/forgotpassword";
import Register from "./pages/register";
import Login from "./pages/login";

function App() {
  return (
    <>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/forgotpassword">
        <Forgotpassword />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </>
  );
}

export default App;
