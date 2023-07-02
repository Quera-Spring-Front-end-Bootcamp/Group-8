import { Route } from "react-router-dom";
import Forgotpassword from "./pages/forgotpassword";
import Register from "./pages/register";
import Login from "./pages/login";
import ResetPassword from "./pages/resetpassword";
import SendPasswordForm from "./pages/sendpassword";
import Layout from "./components/Dashboard/Layout/index";
import Profile from './pages/profile'
import ListView from './pages/listview'
import ColumnView from './pages/columnview'
import Calender from './pages/calenderview'
import React, { createContext,useState,useEffect } from "react";

import "./styles/App.css";

export const ActiveButtonsContext = createContext();

//for local
export const baseUrl="http://localhost:3000/api";

function App() {
  const [activeListViewBtn, setActiveListViewBtn] = useState(false);
  const [activeColumnViewBtn, setActiveColumnViewBtn] = useState(false);
  const [activeCalendarBtn, setActiveCalendarBtn] = useState(false);
  const [boards, setBoards]=useState([])
  const [projectId,setProjectId] = useState("")
  return (

    <ActiveButtonsContext.Provider
    value={{
      activeListViewBtn,
      setActiveListViewBtn,
      activeColumnViewBtn,
      setActiveColumnViewBtn,
      activeCalendarBtn,
      setActiveCalendarBtn,
      boards, 
      setBoards,
      projectId,
      setProjectId
    }}
  >
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

      <Route path="/calendar">
        <Calender />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path='/listview'>
          <ListView/>
      </Route>
      <Route path='/columnview'>
          <ColumnView/>
      </Route>
      
    </ActiveButtonsContext.Provider>
  );
}

export default App;
