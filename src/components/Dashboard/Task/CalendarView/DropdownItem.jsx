import React,{ useContext } from "react";
import { PriorityContext } from "./TaskCalendar";

const DropdownItem = (props) => {

  const{priorityColor, setPriorityColor,openPriority, setOpenPriority}=useContext(PriorityContext);
  const handleClick=()=>{
    if(props.title==="حذف اولویت"){
      setPriorityColor("#C1C1C1");
      setOpenPriority(false);
    }else{
      setPriorityColor(props.iconColor);
      setOpenPriority(false);
    }
    
  }
  return (
    <div
      className="w-full hover:transition hover:ease-in-out hover:delay-10 hover:bg-[#C7E3E3] cursor-pointer pr-4 pl-8"
      onClick={handleClick}
    >
      <div className="h-[40px] text-[14px] flex items-center justify-start">
        <span
          className={`text-[18px] material-symbols-rounded ml-1`}
          style={{ color: props.iconColor }}
        >
          {props.icon}
        </span>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default DropdownItem;
