import { useState } from "react";

import StatusColor from "../../common/Status/StatusColor";
import Avatar from "../../common/Avatar/Avatar";
import Dropdown from "../../common/Dropdown/DropdownModal";

const TaskRow = (props) => {
  const [flagDropdownIsOpen, setFlagDropdownIsOpen] = useState(false);

  const toggleDropdown = () => {
    setFlagDropdownIsOpen(flagDropdownIsOpen ? false : true);
  };

  return (
    <li className="w-full flex items-center justify-around py-3 bg-white border-b-[1px] border-b-[#E9E9E9] pr-4 hover:bg-gray-100">
      <div className="w-full flex items-center justify-start">
        <StatusColor color={props.statusColor} />
        <div className="min-w-[350px] h-[34px] relative shrink grow z-30 mr-2 flex items-center justify-start text-[14px] text-[#0E0E0E]">
          {props.title}
        </div>
        <div className="w-[160px] h-[34px] relative shrink-0 flex items-center justify-center">
          <div className="relative flex flex-row-reverse justify-end pl-3">
            <Avatar width="32px" padding="4px" name="U" />
            <Avatar width="32px" padding="4px" name="U" />
          </div>
        </div>
        <div className="w-[160px] h-[34px] relative shrink-0 text-[14px] text-[#0E0E0E] flex items-center justify-center">
          {props.deadline}
        </div>
        <div className="w-[160px] h-[34px] relative shrink-0 flex-col text-center pt-2 mx-0">
          <span
            className="text-[18px] text-[#7b7b7b] material-symbols-rounded hover:transition hover:ease-in-out hover:delay-10 hover:text-[#208D8E] cursor-pointer"
            onClick={toggleDropdown}
          >
            flag
          </span>
          <div className="absolute left-[90px]">
            {flagDropdownIsOpen && <Dropdown onClick={toggleDropdown} />}
          </div>
        </div>
        <div className="w-[160px] h-[34px] relative shrink-0 flex items-center justify-center">
          <span className="text-[18px] text-[#7b7b7b] material-symbols-rounded hover:transition hover:ease-in-out hover:delay-10 hover:text-[#208D8E] cursor-pointer">
            description
          </span>
        </div>
      </div>
    </li>
  );
};

export default TaskRow;
