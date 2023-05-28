import React, { useState } from "react";
import ReactDOM from "react-dom";
import DropDown from "../Layout/SideMenu/DropDown";

const FilterModal = (props) => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  return (
    <div>
      <div className="fixed left-[20%] top-[20%] w-[800px] h-[250px] border-[2px] rounded-md bg-white shadow-md">
        <header className="flex py-3 justify-between">
          <h1 className=" text-[30px] p-3"> فیلتر</h1>
          <span class=" px-3 py-3 material-symbols-rounded">close</span>
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
        <button className=" px-4 py-8 text-[#208D8E]" onClick={props.onClick}>
          افزودن فیلتر جدید
        </button>
      </div>
    </div>
  );
};
function ModalComponent(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  // return (
  //   <div>
  //     {ReactDOM.createPortal(
  //       <ModalOverlay />,
  //       document.getElementById("backdrop--root")
  //     )}
  //   </div>
  // );

  return (
    <div>
      <div className="fixed left-[20%] top-[20%] w-[800px] h-[250px] border-[2px] rounded-md bg-white shadow-md">
        <header className="flex py-3 justify-between">
          <h1 className=" text-[30px] p-3"> فیلتر</h1>
          <span class=" px-3 py-3 material-symbols-rounded text-slate-500 hover:text-black cursor-pointer">close</span>
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
        <button className=" px-4 py-8 text-[#208D8E]" onClick={props.onClick}>
          افزودن فیلتر جدید
        </button>
      </div>
    </div>
  );
}

export default FilterModal;
