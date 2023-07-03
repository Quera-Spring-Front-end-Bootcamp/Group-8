import React, { createContext,useContext, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import faLocale from "@fullcalendar/core/locales/fa";
import { CalendarContext } from "../../../../pages/calenderview";
import { useRef, useEffect } from "react";
import Dropdown from "./DropdownModal";

export const PriorityContext = createContext();

const TaskCalendar = () => {
  
  const {
    setCalendarTitle,
    calendarPrev,
    setCalendarPrev,
    calendarNext,
    setCalendarNext,
    calendarToday,
    setCalendarToday,
  } = useContext(CalendarContext);

  const calendarRef = useRef(null);

  const [showModal, setShowModal] = useState(false);
  const [modalDate, setModalDate] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [task, setTask] = useState("");
  const [priorityColor, setPriorityColor] = useState("salam");
  const [openPriority, setOpenPriority] = useState(false); 
  const themeColor = localStorage.getItem("themeColor")
  ? localStorage.getItem("themeColor")
  : "#208D8E";

  const handleDateClick = (date) => {
    if (showModal) {
      const formattedDate = new Date(date.date).toLocaleDateString("fa-IR", {
        day: "numeric",
        month: "long",
      });
      setModalDate(formattedDate);
      setTaskDate(date.date);
      setTask("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskDate);
    console.log(task);
    if (task) {
      calendarRef.current.getApi().addEvent({
        title: task,
        start: taskDate,
        allDay: true,
        color: priorityColor,
      });
    }
    setShowModal(false);
  };

  useEffect(() => {
    if (calendarPrev) {
      handlePrev();
    }
    if (calendarNext) {
      handleNext();
    }
    if (calendarToday) {
      handleToday();
    }
  }, [calendarPrev, calendarNext, calendarToday]);

  const handleNext = () => {
    calendarRef.current.getApi().next();
    setCalendarNext(false);
    setShowModal(false);
  };

  const handlePrev = () => {
    calendarRef.current.getApi().prev();
    setCalendarPrev(false);
    setShowModal(false);
  };

  const handleToday = () => {
    calendarRef.current.getApi().today();
    setCalendarToday(false);
    setShowModal(false);
  };

  return (
    <PriorityContext.Provider value={{priorityColor, setPriorityColor,openPriority, setOpenPriority}}>
    <div className="flex flex-col relative mt-[-22px]">
      <FullCalendar
        viewClassNames={"w-full h-full"}
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale={faLocale}
        contentHeight="590px"
        fixedWeekCount={false}
        firstDay={"6"}
        headerToolbar={false}
        showNonCurrentDates={false}
        // dayMaxEventRows={true}
        dayMaxEvents={2}
        dateClick={handleDateClick}
        datesSet={(args) => setCalendarTitle(args.view.title)}
        dayCellContent={(props) => {
          return (
            <div className="w-full flex flex-col justify-between h-full ">
              <div className="mt-auto flex justify-between w-full h-full relative -z-5">
                <button
                  className="flex justify-center items-center rounded-[3px] opacity-0 invisible group-hover:opacity-100 group-hover:visible w-[25px] h-[25px] p-[5px] absolute top-[73px] left-[2px] "
                  style={{ zIndex: "100",backgroundColor:themeColor }}
                  onClick={() => {
                    setShowModal(true);
                    setPriorityColor("#C1C1C1");
                  }}
                >
                  <span className="material-symbols-rounded text-white text-[17px] border">
                    add
                  </span>
                </button>

                <div className="">{props.dayNumberText}</div>
                <div></div>
              </div>
            </div>
          );
        }}
        dayCellClassNames={"group h-[110px]  "}
        eventClassNames={"text-[12px] h-[20px]"}
      />
      {showModal && (
        <div className="flex justify-center items-center absolute h-full w-full">
          <div
            className=" flex flex-col w-[463px] h-[151px] bg-[#FFFFFF] z-[1] border border-[#208D8E] rounded-[8px]"
            style={{ boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)" }}
          >
            <form onSubmit={handleSubmit}>
              <div className="flex gap-[20px] m-[10px] ">
                <span
                  className="material-symbols-rounded cursor-pointer text-[#C8C8C8] text-[20px]"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  close
                </span>
                <input
                  type="text"
                  name="taskName"
                  className="w-[400px] h-[70px] border-none placeholder-[#C8C8C8] outline-none"
                  placeholder="نام تسک را وارد کنید"
                  onChange={(e) => {
                    setTask(e.target.value);
                  }}
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-[20px] mr-[20px]">
                  <span className="material-symbols-rounded cursor-pointer text-[30px] text-[#C1C1C1] rounded-full p-[2px] "style={{color:priorityColor,border:openPriority? "1px dashed":"none"}}
                  onClick={()=>setOpenPriority(true)}>
                    flag
                  </span>
                  {openPriority &&(<div><Dropdown /></div>)}
                  <span className="mt-[5px] text-[20px]"style={{color:themeColor}}>
                    {modalDate}
                  </span>
                </div>
                <button className="flex justify-center items-center ml-[20px] w-[125px] h-[32px] rounded-[4px] text-[#FFFFFF] text-[12px] text-right font-medium"style={{backgroundColor:themeColor}}>
                  ساختن تسک
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </PriorityContext.Provider>
  );
};

export default TaskCalendar;
