import { useState } from "react";

import StatusRow from "../../common/Status/StatusRow"

const Sprint = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mr-4">
      <div className="w-max mb-8 flex align-center justify-center gap-[8px]">
        <span
          className={`material-symbols-rounded text-[#323232] cursor-pointer ${
            isOpen ? "pt-1" : "m-auto mb-[2px] rotate-90"
          }`}
          onClick={() => setIsOpen(isOpen ? false : true)}
        >
          expand_circle_down
        </span>
        <span className="font-[500] text-[20px] text-[#1E1E1E]">
          پروژه {props.sprintNumber}
        </span>
      </div>
      {isOpen && (
        <StatusRow
          statusName={"در انتظار"}
          statusColor={"#F92E8F"}
          numberOfTasks={"۲"}
        />
      )}
    </div>
  );
};

export default Sprint;
