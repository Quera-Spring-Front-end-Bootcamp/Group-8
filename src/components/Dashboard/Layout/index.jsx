import DropDown from "./SideMenu/DropDown";
import Button from "../Button/Buttom";
import Caption from "./SideMenu/SideMenuCaption/Caption";
import SideMenuItem from "./SideMenu/SideMenuItem";
import SideMenuInput from "./SideMenu/SideMenuInput";
import '../../styles/Layout.css'

const Layout = ({children}) => {

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
              className="h-9 w-[278px] items-center rounded-md bg-[#FAFBFC]  p-1 cursor-pointer"
            />
          </div>

          <div className="menu pt-6">
            {/* <input
              type="text"
              placeholder="Type here"
              className="input bg-[#F6F7F9] h-[40px] w-full max-w-xs rounded"
            /> */}
            <SideMenuInput
              Type="text"
              PlaceHolder=" جستجو کنید"
              className="input bg-[#F6F7F9] h-[40px] w-full max-w-xs rounded"
            />
          </div>

          <div className="menu pt-3">
            <Button className="h-[32px] items-center rounded-md bg-[#D3D3D3] text-center p-1">
              ساختن اسپیس جدید
            </Button>
          </div>

          <ul className=" menu pt-6">
            <SideMenuItem
              className=" menu-title hover:bg-[#E9F9FF]  text-black text-base flex items-center gap-x-4 cursor-pointer p-2"
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
        </div>

        <div className="  p-5 pt-12 text-2x1 font-semibold flex-1 h-36 top-10">
          <nav>
            {/* first line menu */}
            <ul class="flex mt-1 pb-2 border-b-2">
              <li class="mr-3">
                <a
                  class="inline-block py-1 px-3 rounded-md text-gray-700"
                  href="#"
                >
                  Active Pill
                </a>
              </li>
              <li className="">
                <hr className="inline-block liney" />
              </li>
              <li class="mr-3">
                <a
                  class="inline-block  py-1 px-3 rounded-md text-gray-700"
                  href="#"
                >
                  Active Pill
                </a>
              </li>
              <li className="">
                <hr className="inline-block liney" />
              </li>
              <li class="mr-3">
                <a
                  class="inline-block py-1 px-3 rounded-md text-gray-700"
                  href="#"
                >
                  Active Pill
                </a>
              </li>
              <li className="">
                <hr className="inline-block liney" />
              </li>
            </ul>

            {/* secound line menu */}
            <ul class="flex mt-2 pb-2 border-b-2 border-gray-200">
              <li class="mr-3">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input w-full max-w-xs border-gray-600 border-l-2"
                />
              </li>

              {/* <li class="mr-3">
              <a
                class="inline-block border-gray-600 border-l-2 py-1 px-3 text-gray-700"
                href="#"
              >
                BTN
              </a>
            </li> */}
            </ul>
          </nav>

          {/* Dashboard Content stay here! */}
          <div className="p-5 pt-12 text-2x1 font-semibold flex-1 h-36 top-10">
            <h1>Hello Home Page!</h1>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
