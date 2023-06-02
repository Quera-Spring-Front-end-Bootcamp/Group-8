import { useState } from "react";

import Status from "./Status";
import TasksList from "../../common/Task/TasksList";

const StatusRow = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex align-start justify-start gap-[16px] mx-10">
      <span
        className={`material-symbols-rounded cursor-pointer ${isOpen ? "pt-1" : "m-auto mb-[20px] rotate-90"}`}
        style={{color: props.statusColor}}
        onClick={() => setIsOpen(isOpen ? false : true)}
      >
        expand_circle_down
      </span>
      <div className="w-full">
        <div className="w-full sticky flex items-start">
          <div className="inline-flex items-center grow min-w-[350px] gap-[8px] mb-4">
            <Status name={props.statusName} color={props.statusColor} />
            <span className="text-[12px] font-[200] text-[#1E1E1E]">
              {props.numberOfTasks} تسک
            </span>
          </div>
          {isOpen && (
            <div className="relative inline-flex items-center">
              <div className="w-[160px] inline-flex items-center justify-center">
                اعضا
              </div>
              <div className="w-[160px] inline-flex items-center justify-center">
                مهلت انجام
              </div>
              <div className="w-[160px] inline-flex items-center justify-center">
                اولویت
              </div>
              <div className="w-[160px] inline-flex items-center justify-center">
                توضیحات
              </div>
            </div>
          )}
        </div>
        {isOpen && <TasksList statusColor={"#F92E8F"} />}
      </div>
    </div>
  );
};

export default StatusRow;
