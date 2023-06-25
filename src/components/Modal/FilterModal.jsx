import React, { useState } from "react";
import DropDown from "../Dashboard/Layout/SideMenu/DropDown";

const FilterModal = (props) => {
    // const colors = [
  //   "#FF5733",
  //   "#DAF7A6",
  //   "#900C3F",
  //   "#581845",
  // ];
  const themeColor = localStorage.getItem("themeColor")
  ? localStorage.getItem("themeColor")
  : "#208D8E";
  const options = [
    { label: "Option 1", value: "1" , color: "#FF5733"},
    { label: "Option 2", value: "2" , color: "#DAF7A6"},
    { label: "Option 3", value: "3" , color: "#900C3F"},
    { label: "Option 3", value: "3" , color: "#581845"},
  ];


  return (
    <div>
      <div className="fixed left-[20%] top-[20%] w-[800px] h-[250px] border-[2px] rounded-md bg-white shadow-md bg-[#FFFFFF] z-50">
        <header className="flex py-3 justify-between">
          <h1 className=" text-[30px] p-3"> فیلتر</h1>
          <span class=" px-3 py-3 material-symbols-rounded text-slate-500 hover:text-black cursor-pointer" onClick={props.onClick}>close</span>
        </header>
        <div className=" flex px-4 justify-between">
          <span>تسک هایی که</span>
          <span className="">
            <DropDown
              className=" w-[182px] h-[27px] border-[1px] border-[#E9EBF0] rounded-[4px]"
              label="تگ"
              Options={options}
            />
          </span>
          <span>آن ها</span>
          <DropDown
            className=" w-[146px] h-[27px] border-[1px] border-[#E9EBF0] rounded-[4px]"
            label="انتخاب کنید"
            Options={options}
          />
          <span>
            <DropDown
              className=" w-[107px] h-[27px] border-[1px] border-[#E9EBF0] rounded-[4px]"
              label="انتخاب کنید"
              Options={options}
            />
          </span>
          <span class=" px-5 material-symbols-rounded">delete</span>
        </div>
        <button className=" px-4 py-8"style={{color:themeColor}} onClick={props.onClick}>
          افزودن فیلتر جدید
        </button>
      </div>
    </div>
  );
}

export default FilterModal;
