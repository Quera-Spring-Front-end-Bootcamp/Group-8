import React, { useContext } from "react";
import { CalendarContext } from "../../../../pages/calenderview";

const CalendarTitle = () => {
  const { calendarTitle,setCalendarPrev,setCalendarNext,setCalendarToday } = useContext(CalendarContext);
  const handleToday=()=>{
    setCalendarToday(true);
  }
  const handlePrev=()=>{
    setCalendarPrev(true);
  }
  const handleNext=()=>{
    setCalendarNext(true);
  }

  return (
    <div className="flex items-center gap-[10px] mr-[40px] ">
      <button className="mt-[4px] text-[12px] leading-[18px] text-right font-medium" onClick={handleToday}>امروز</button>
      <button className="material-symbols-rounded font-thin text-[20px]" onClick={handlePrev}>
chevron_right
</button>
<button className="material-symbols-rounded font-thin text-[20px]" onClick={handleNext}>
chevron_left
</button>
      <div className="font-medium text-[12px] leading-[18px] text-right text-[#000000] mt-[5px] mr-[10px]">
        {calendarTitle}
      </div>
    </div>
  );
};

export default CalendarTitle;
