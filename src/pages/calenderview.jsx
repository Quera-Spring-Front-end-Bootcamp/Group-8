import { ActiveButtonsContext } from "../App";
import Layout from "../components/Dashboard/Layout/index";
import TaskCalendar from "../components/Dashboard/Task/CalendarView/TaskCalendar";
import React, { createContext,useState,useContext,useEffect } from "react";


export const CalendarContext = createContext();

const calenderview = () => {
  const [calendarTitle,setCalendarTitle]=useState("");
  const [calendarPrev,setCalendarPrev]=useState(false); 
  const [calendarNext,setCalendarNext]=useState(false);
  const [calendarToday,setCalendarToday]=useState(false);
  const{setActiveCalendarBtn}=useContext(ActiveButtonsContext);
  useEffect(() => {
    setActiveCalendarBtn(true);
  }, []);
  return (
  <CalendarContext.Provider value={{calendarTitle,setCalendarTitle,calendarPrev,setCalendarPrev,calendarNext,setCalendarNext,calendarToday,setCalendarToday}}>
    <Layout>
 
      <TaskCalendar/>
      
    </Layout>
    </CalendarContext.Provider>
  );
};

export default calenderview;
