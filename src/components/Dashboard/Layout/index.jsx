import DropDown from "./SideMenu/DropDown";
import Button from "../../common/Button/Button";
import Caption from "./SideMenu/SideMenuCaption/Caption";
import SideMenuItem from "./SideMenu/SideMenuItem";
import SideMenuInput from "./SideMenu/SideMenuInput";
import ProfileOption from "./SideMenu/ProfileOption";
import FilterModal from "../../Modal/FilterModal";
import ModalProjectMenu from "../../Modal/ModalProjectMenu";
import ModalTaskMenu from "../../Modal/ModalTaskMenu";
import ModalNewWorkSpace from "../../Modal/ModalNewWorkSpace";
import ModalPickColor from "../../Modal/ModalPickColor";
import ShareProjectModal from "../../Modal/ShareProjectModal";
import ShareWSModal from "../../Modal/ShareWSModal";
import InformationModal from "../../Modal/InformationModal";
import TaskDetails from "../../Modal/TaskDetails";
import { useState, useContext } from "react";
import MakeTaskModal from "../../Modal/MakeTaskModal";
import PickDateModal from "../../Modal/PickDateModal";
import { ActiveButtonsContext } from "../../../App";
import CalendarTitle from "../Task/CalendarView/CalendarTitle";
import "../../../styles/Layout.css";

const Layout = ({ children }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [showShareProject, setShowShareProject] = useState(false);
  const [showNewTask, setShowNewTask] = useState(false);
  const [showNewWS, setShowNewWS] = useState(false);
  const [showPickColor, setShowPickColor] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const { activeListViewBtn, activeColumnViewBtn, activeCalendarBtn } =
    useContext(ActiveButtonsContext);

  const showNewWSModal = () => {
    if (showNewWS) {
      setShowNewWS(false);
    } else {
      setShowNewWS(true);
    }
    console.log(showNewTask);
  };

  const showNewTaskModal = () => {
    if (showNewTask) {
      setShowNewTask(false);
    } else {
      setShowNewTask(true);
    }
    // console.log(showNewTask);
  };

  const showShareProjectModal = () => {
    if (showShareProject) {
      setShowShareProject(false);
    } else {
      setShowShareProject(true);
    }
    // console.log(showShareProject);
  };

  const showFilterModal = () => {
    if (showFilter) {
      setShowFilter(false);
    } else {
      setShowFilter(true);
    }
    // console.log(showFilter);
  };

  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  return (
    <>
      <div className="flex">
        <div className=" w-80 h-screen bg-[#FAFBFC] border border-[#AAAAAA] p-5 pt-8 relative">
          <div className="flex gap-x-4 items-center">
            <Caption className="text-3xl p-3 pt-1 font-bold origin-right duration-300">
              کوئرا تسک منیجر
            </Caption>
          </div>

          <div className="menu pt-3">
            <DropDown
              label="ورک اسپیس ها"
              Options={options}
              className=" select h-9 w-[278px] items-center rounded-md bg-[#FAFBFC]  p-1 cursor-pointer"
            />
          </div>

          <div className="menu pt-6">
            <SideMenuInput
              Type="text"
              PlaceHolder="  جستجو کنید"
              className="input bg-[#F6F7F9] h-[40px] w-full max-w-xs rounded"
            />
          </div>

          <div className="menu pt-3">
            <Button
              className=" flex h-[32px] w-[279px] items-center justify-center rounded-md bg-[#D3D3D3] text-center p-1"
              onClick={showNewWSModal}
            >
              <span className="material-symbols-rounded">add_box</span>
              ساختن اسپیس جدید
            </Button>
          </div>
          <nav className=" h-[68%] flex flex-col justify-between">
            <ul className=" menu pt-6">
              <SideMenuItem
                className=" menu-title hover:bg-[#E9F9FF] text-black text-base flex items-center gap-x-4 cursor-pointer p-2"
                itemClassName=" bg-[#71FDA9]"
                item="درس مدیریت پروژه"
              ></SideMenuItem>
              <SideMenuItem
                className="menu-title hover:bg-[#E9F9FF]  text-black text-base flex items-center gap-x-4 cursor-pointer p-2"
                itemClassName=" bg-[#DE88FD]"
                item="کارهای شخصی"
              ></SideMenuItem>
              <SideMenuItem
                className="menu-title hover:bg-[#E9F9FF]  text-black text-base flex items-center gap-x-4 cursor-pointer p-2"
                itemClassName=" bg-[#FC0733]"
                item="درس کامپایلر"
              ></SideMenuItem>
              <SideMenuItem
                className="menu-title hover:bg-[#E9F9FF]  text-black text-base flex items-center gap-x-4 cursor-pointer p-2"
                itemClassName=" bg-[#92FF07]"
                item="درس طراحی الگوریتم"
              ></SideMenuItem>
            </ul>
            <ul className="menu pt-6">
              <a href="/profile" className=" no-underline">
                <ProfileOption english="Zahra Moradi" persian="زهرا مرادی" />
              </a>
              <li className="menu-title hover:bg-[#E9F9FF]  text-black text-base flex items-center gap-x-4 cursor-pointer p-2">
                <span className="material-symbols-rounded">door_open</span>
                خروج
              </li>
            </ul>
          </nav>
        </div>

        <div className="  p-5 pt-12 text-2x1 font-semibold flex-1 h-36 top-10 ">
          <nav className=" flex justify-between border-b-2">
            {/* first line menu */}
            <ul className="flex mt-1 ">
              <li className="mr-3">
                <Button className=" text-2xl inline-block font-bold px-1 text-black">
                  پروژه اول
                </Button>
              </li>
              <li className="">
                <hr className="inline-block liney" />
              </li>
              <li className="mr-3">
                <a
                  href="/listview"
                  className={`flex hover:text-[#208D8E] pb-5 text-[16px] px-3 text-gray-700 ${
                    activeListViewBtn ? "active" : ""
                  }`}
                >
                  <span className="material-symbols-rounded">list</span>
                  نمایش لیستی
                </a>
              </li>
              <li className="">
                <hr className="inline-block liney" />
              </li>
              <li className="mr-3">
                <a
                  href="/columnview"
                  className={` flex pb-5 text-[16px] hover:text-[#208D8E] px-3  text-gray-700 ${
                    activeColumnViewBtn ? "active" : ""
                  }`}
                >
                  <span className="material-symbols-rounded">view_week</span>
                  نمایش ستونی
                </a>
              </li>
              <li className="">
                <hr className="inline-block liney" />
              </li>
              <li className="mr-3">
                <a
                  href="/calendar"
                  className={` flex hover:text-[#208D8E] text-[16px] px-3 pb-5 text-gray-700 ${
                    activeCalendarBtn ? "active" : ""
                  }`}
                >
                  <span className="material-symbols-rounded">
                    calendar_month
                  </span>
                  تقویم
                </a>
              </li>
              <li className="">
                <hr className="inline-block liney" />
              </li>
            </ul>
            <ul className="flex mt-1">
              <li className="mr-3">
                <Button
                  className=" flex text-[16px] px-3 text-gray-700"
                  onClick={showShareProjectModal}
                >
                  <span className="material-symbols-rounded">share</span>
                  اشتراک گذاری
                </Button>
              </li>
            </ul>
          </nav>

          {/* secound line menu */}
          <ul className="flex mt-2 pb-2 border-b-2 border-gray-200">
            <li className="flex mr-3">
              <span className=" px-1 text-slate-500 material-symbols-rounded">
                search
              </span>
              <input
                type="text"
                placeholder="جستجوی تسک ها"
                className="input w-full max-w-xs border-gray-600 border-l-2"
              />
            </li>

            {!activeCalendarBtn && (
              <li className="mr-3">
                <Button
                  className=" flex hover:text-[#208D8E] text-[14px] px-3 text-gray-700"
                  onClick={showFilterModal}
                >
                  <span className=" px-2 material-symbols-rounded">
                    page_info
                  </span>
                  فیلتر
                </Button>
              </li>
            )}
            {!activeCalendarBtn && (
              <li className="mr-3">
                <span className=" px-3 text-[12px] bg-[#E9F9FF] rounded-[4px]">
                  دسته بندی شده با: وضعیت
                </span>
              </li>
            )}
            {activeCalendarBtn && (
              <li>
                <CalendarTitle />
              </li>
            )}
          </ul>

          {/* Dashboard Content stays here! */}
          <div className=" h-[75vh] text-2x1 font-semibold flex-1 top-9 relative ">
            {children}

            {/* Elahe's New task button */}
            {/* <Button className=" flex w-[118px] h-[40px] left-[50px] bottom-[30px] text-[#FFFFFF] items-center justify-center rounded-md bg-[#208D8E] text-center p-1 fixed" onClick={showNewTaskModal}>
              <span class=" text-[#FFFFFF] material-symbols-rounded">
                add_box
              </span>
              تسک جدید
            </Button> */}
          </div>
        </div>
      </div>
      {false && <ShareWSModal />}
      {showShareProject && (
        <ShareProjectModal onClick={() => setShowShareProject(false)} />
      )}
      {showFilter && (
        <FilterModal onClick={() => setShowFilter(false)}></FilterModal>
      )}
      {false && <ModalProjectMenu></ModalProjectMenu>}
      {false && <ModalTaskMenu></ModalTaskMenu>}
      {showNewWS && (
        <ModalNewWorkSpace
          onClick={() => setShowNewWS(false)}
          buttonOnClick={() => setShowPickColor(true)}
        ></ModalNewWorkSpace>
      )}
      {showPickColor && (
        <ModalPickColor
          onClick={() => setShowPickColor(false)}
          buttonOnClick={() => setShowInfo(true)}
        ></ModalPickColor>
      )}
      {showInfo && (
        <InformationModal
          onClick={() => setShowInfo(false)}
          buttonOnClick={() => setShowInfo(false)}
        ></InformationModal>
      )}
      {showNewTask && (
        <MakeTaskModal onClick={() => setShowNewTask(false)}></MakeTaskModal>
      )}
      {false && <TaskDetails></TaskDetails>}
      {false && <PickDateModal></PickDateModal>}
    </>
  );
};

export default Layout;
