import { useState } from "react";
import Tag from "./Tag";

const ColTask = ({
  imgSrc,
  projectName,
  userName,
  taskTitle,
  dayCount,
  date,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="flex flex-col gap-[18px] w-[250px] mt-[12px] mr-[16px] p-[10px] bg-[#FFFFFF] border border-solid border-[#EFF0F0] rounded-[4px] cursor-pointer "
      style={{
        boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.14)",
      }}
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
    >
      <img
        className="w-[230px] h-[134px] rounded-[3px] order-0 self-stretch grow-0"
        src={(imgSrc = "./")}
        style={{ display: imgSrc ? "block" : "none" }}
        alt="task"
      />
      <div className="flex flex-row items-center justify-between">
        <span className="font-medium text-[10px] leading-[15px] text-right text-[#534D60]  self-start">
          {(projectName = "پروژه اول")}
        </span>
        <span
          className="w-[23px] h-[23px] bg-[#EAF562] flex justify-center items-center rounded-full order-0 grow-0 text-[#000000] text-[8px] leading-[12px] teaxt-right transition duration-500 ease-in-out"
          style={{ opacity: show === true ? "100%" : "0%" }}
        >
          {(userName = "NM")}
        </span>
      </div>
      <div className="flex flex-row items-baseLine gap-[10px]">
        <h4 className="font-medium text-[12px] leading-[18px] text text-right	text-[#0E0E0E] ">
        {(taskTitle = "این یک تیتر برای این تسک است.")}
      </h4>
      <span class="material-symbols-rounded text-[#BDC0C6] w-[12px] h-[12px]"style={{fontSize:"15px"}}>format_align_right</span>
      </div>
      <div className="flex flex-row items-baseLine justify-start gap-[27px]">
        <div className="flex flex-row items-center gap-[1px]">
          <span className="material-symbols-rounded w-[16px] h-[16px] text-[#FB0606] pb-[32px]">
            flag
          </span>
          <span className="font-medium text-[10px] leading-[15px] text-right text-[#343434] pb-[5px]">
            {(date = "5 مهر")} - {(dayCount = "فردا")}
          </span>
        </div>

        <div className="flex flex-row items-center gap-[5px]">
          <span className="material-symbols-rounded font-[200] text-[#BDC0C6] w-[12px] h-[12px] pb-[32px]">
            check_box
          </span>
          <span className="font-medium text-[10px] leading-[15px] text-right text-[#BDC0C6] pb-[5px]">
            2/12
          </span>
        </div>
      </div>

      <div
        className="flex flex-row items-center gap-[5px] transition duration-1100"
        style={{
          marginBottom: show === true ? "0" : "-30px",
          transitionProperty: "margin",
        }}
      >
        <Tag tagName={"پروژه"} tagColor={"#EEDFF6"} />
      </div>

      <span
        className="border-b border-solid border-[#EFF0F0] transition duration-900"
        style={{
          opacity: show === true ? "100%" : "0",
          transitionProperty: "opacity",
        }}
      ></span>
      <div
        className="flex justify-between duration-700"
        style={{
          height: show === true ? "30px" : "0",
        }}
      >
        <span
          className="material-symbols-rounded text-[#323232] duration-100 "
          style={{ opacity: show === true ? "100%" : "0" }}
        >
          task_alt
        </span>
        <span
          className="material-symbols-rounded text-[#323232] duration-100 "
          style={{ opacity: show === true ? "100%" : "0" }}
        >
          more_horiz
        </span>
      </div>
    </div>
  );
};

export default ColTask;
