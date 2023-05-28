import DropDown from '../Layout/SideMenu/DropDown'
import Profile from "../../img/cute.png";

const TaskDetails = (props) => {
  return (
    <div>
      <div className=" fixed items-center justify-center bg-[#FFFFFF] left-[10%] top-[10%] w-[1166px] h-[500px] rounded-[12px]shadow-md">
        <header className="flex border-b-[1px] p-5 justify-between w-[100%]">
          <div className="flex items-center justify-center">
            <div className="w-[16px] h-[16px] bg-[#D9D9D9] mx-2">
                <button className=' w-[111px] h-[30px] ' ></button>
            </div>
            <h2 className=" justify-center text-[24px] font-medium items-center text-center ">
              عنوان تسک
            </h2>
          </div>
          <span class="material-symbols-rounded text-slate-500 hover:text-black cursor-pointer">
            visibility
          </span>
        </header>

        <div className=" w-[90%] pt-5 mx-5 items-center border">
          <span>در</span>
          <span>
            <input
              type="text"
              placeholder="پروژه اول"
              className="w-[158px] h-[33px] border-2 rounded-sm mx-2"
            />
          </span>
          <span>برای</span>
          <span className="mx-2">
            <span class=" w-[33px] h-[33px] border-2 border-[#C1C1C1] text-center border-dashed rounded-full text-[#C1C1C1] material-symbols-rounded ">
              person_add
            </span>
          </span>
        </div>
        <div>
          <input
            type="text"
            placeholder="توضیحاتی درمورد این تسک بنویسید."
            className="w-[90%] h-[212px] pt-5 mx-5 border-2 mt-5"
          />
        </div>

        <div className="flex w-[90%] pt-5 mx-5 items-center border">
          <span>افزودن پیوست</span>
          <span className="flex justify-center items-center mx-2">
            <button className=" flex border rounded-[10px] p-1">
              <span class="material-symbols-rounded">link</span>
              آپلود فایل
            </button>
          </span>
        </div>

        <footer className="flex w-[85%] justify-between items-center mt-10">
          <span className="flex">
            <span class=" flex items-center justify-center w-[50px] h-[50px] border-2 border-[#C1C1C1] text-center border-dashed rounded-full text-[#C1C1C1]  ">
              <span class=" text-[35px] material-symbols-rounded">flag</span>
            </span>
            <span class=" flex items-center justify-center w-[50px] h-[50px] border-2 border-[#C1C1C1] text-center border-dashed rounded-full text-[#C1C1C1]  ">
              <span class=" text-[35px] material-symbols-rounded">
                calendar_month
              </span>
            </span>
            <span class=" flex items-center justify-center w-[50px] h-[50px] border-2 border-[#C1C1C1] text-center border-dashed rounded-full text-[#C1C1C1]  ">
              <span class=" text-[35px] material-symbols-rounded">sell</span>
            </span>
            <span class=" flex items-center justify-center w-[50px] h-[50px] text-center  text-[#C1C1C1]  ">
              <span class=" text-[35px] material-symbols-rounded">
                visibility
              </span>
            </span>
          </span>
          <span>
            <button className="flex absolute p-3 w-[135px] h-[32px] text-[12px] text-[#FFFFFF] items-center justify-center rounded-md bg-[#208D8E] text-center cursor-pointer">
              ساختن تسک
            </button>
          </span>
        </footer>
      </div>
    </div>
  );
};

export default TaskDetails;
