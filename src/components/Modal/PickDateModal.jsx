import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns-jalali";

// pretend you are senior front end developer

const PickDateModal = () => {
  const today = new Date();
  const daysOfWeek = [...Array(7)].map((_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    return { date: format(date, "dd-MM-yy"), day: format(date, "EEEE") };
  });

  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="fixed flex top-[30%] left-[30%] border shadow-md">
      <div className="flex flex-col w-[150px]">
        {daysOfWeek.map((day) => (
          <div className="p-[7px] cursor-pointer" key={day.date}>
            <span>{day.day}</span>
            <span>{day.date}</span>
          </div>
        ))}
      </div>
      <div>
        <Calendar onChange={onChange} value={date} />
      </div>
    </div>
  );
};
export default PickDateModal;
