import DropDown from "../Dashboard/Layout/SideMenu/DropDown";
import Profile from "../../img/cute.png";

const TaskDetails = (props) => {
  return (
    <div>
      <div className=" fixed items-center justify-center bg-[#FFFFFF] border-[2px] left-[10%] top-[10%] w-[1166px] h-[484px] rounded-[12px] shadow-md">
        <div>
          <span class="text-slate-500 hover:text-black cursor-pointer p-3 material-symbols-rounded" onClick={props.onClick}>
            close
          </span>
        </div>
        <header className="flex border-b-[1px] p-5 justify-between w-[100%]">
          <div className="flex w-[50%] justify-around">
            <div className="flex justify-center items-center">
              <button className=" w-[111px] h-[30px] bg-[#F84747] text-white">
                Open
              </button>
            </div>
            <div className="flex justify-center items-center">
              <span class=" hover:text-black cursor-pointer text-[#BDBDBD] text-[34px] material-symbols-rounded">
                check_box
              </span>
            </div>
            <div>
              <div class=" flex justify-center items-center  mt-3">
                <img
                  className=" w-[34px] h-[34px] rounded-full"
                  src={Profile}
                  alt="Profile Picture"
                />
                <div className="inline-block text-center text-slate-500 hover:text-black cursor-pointer w-[34px] h-[34px] border-[2px] rounded-full border-dashed border-gray-400">
                  <span class="text-slate-500 hover:text-black cursor-pointer text-[24px] material-symbols-rounded">
                    person_add
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="inline-block p-1 text-center w-[34px] h-[34px] border-[2px] rounded-full border-dashed border-[#F84747]">
                <span class=" text-[24px] text-[#F84747] material-symbols-rounded">
                  flag
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <span class=" text-[#BDBDBD] material-symbols-rounded">
                share
              </span>
              <button className=" text-[16px] font-medium">اشتراک گذاری</button>
            </div>
          </div>

          <div className="flex w-[50%] justify-between">
            <div>
              <ul className="flex">
                <li className=" pr-2 pl-6 ">
                  <p className=" text-center text-[12px] pb-2 font-medium text-[#BDBDBD] ">
                    ساخته شده در
                  </p>
                  <button className=" text-[16px] font-medium">
                    اردیبهشت 1402
                  </button>
                </li>
                <li className=" flex-col pl-6">
                  <p className=" text-center text-[12px] pb-1 font-medium text-[#BDBDBD]">
                    زمان{" "}
                  </p>
                  <button className=" text-[16px] font-medium">
                    <span class=" mx-1 text-white bg-[#80C959] material-symbols-rounded rounded-full">
                      play_circle
                    </span>
                    00 : 00 : 00
                  </button>
                </li>
                <li>
                  <p className=" text-center text-[12px] pb-2 font-medium text-[#BDBDBD]">
                    ددلاین
                  </p>
                  <button className=" text-[16px] font-medium">پس فردا</button>
                </li>
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <span class=" text-[30px] text-slate-500 hover:text-black cursor-pointer material-symbols-rounded">
                visibility
              </span>
            </div>
          </div>
        </header>

        <div className=" w-[100%] h-[340px] flex pr-5 justify-center border">
          <div className="flex w-[50%] justify-between">
            <div className="block">
              <div className="flex items-center justify-center mx-5 p-2 text-center w-[34px] h-[34px] border-gray-500 border-[2px] rounded-full border-dashed">
                <span class="  text-[30px] text-gray-500 material-symbols-rounded">
                  sell
                </span>
              </div>
              <div>
                <h2 className=" mt-8 mb-2 text-[24px] font-medium">
                  عنوان تسک
                </h2>
                <p className="border-[2px] p-3 text-[16px] font-normal rounded-[10px]">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد،{" "}
                </p>
              </div>
              <div>
                <ul>
                  <li className=" flex py-2 mt-2">
                    <span class=" text-[#208D8E] px-1 material-symbols-rounded">
                      add_box
                    </span>
                    <a
                      href=""
                      className=" text-[#208D8E] no-underline text-[12px]"
                    >
                      اضافه کردن چک لیست
                    </a>
                  </li>
                  <li className="flex py-2">
                    <span class=" text-[#208D8E] px-1 material-symbols-rounded">
                      add_box
                    </span>
                    <a
                      href=""
                      className=" text-[#208D8E] no-underline text-[12px]"
                    >
                      اضافه کردن پیوست
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-[50%] h-[100%] justify-between border">
            <ul className=" mr-5">
              <li className="p-2 flex justify-between">
                <span>
                  <a
                    href="#"
                    className=" no-underline text-[#208D8E] text-[16px] font-medium"
                  >
                    شما
                  </a>
                  <span className=" text-[16px] font-medium">
                    این تسک را ساختید.
                  </span>
                </span>
                <span className="text-gray-500 text-[12px]">1 ساعت پیش</span>
              </li>
              <li className="flex items-center p-2 justify-between">
                <span className="flex items-center">
                  <a
                    href="#"
                    className=" no-underline text-[#208D8E] text-[16px] font-medium"
                  >
                    شما
                  </a>
                  <span className=" text-[16px] font-medium">
                    این تسک را از.
                  </span>
                  InProgress
                  <div className=" w-[12px] h-[12px] bg-[#EC612E]"></div>
                  <span className=" text-[16px] font-medium">به</span>
                  Done<div className=" w-[12px] h-[12px] bg-[#0EBB34] "></div>
                  <span className=" text-[16px] font-medium">منتقل کردید.</span>
                </span>
                <span>
                  <span className="text-gray-500 text-[12px]">1 ساعت پیش</span>
                </span>
              </li>
              <li className="flex items-center p-2 justify-between">
                <span className="flex items-center">
                  <a
                    href="#"
                    className=" no-underline text-[#208D8E] text-[16px] font-medium"
                  >
                    شما
                  </a>
                  <span className=" text-[16px] font-medium">
                    این تسک را از.
                  </span>
                  Done<div className=" w-[12px] h-[12px] bg-[#0EBB34]"></div>
                  <span className=" text-[16px] font-medium">به</span>
                  Pending
                  <div className=" w-[12px] h-[12px] bg-[#F7CE46] "></div>
                  <span className=" text-[16px] font-medium">منتقل کردید.</span>
                </span>
                <span>
                  <span className="text-gray-500 text-[10px]">1 ساعت پیش</span>
                </span>
              </li>
            </ul>

            <div className=" my-5 mx-2 flex ">
              <img
                className=" mx-2 w-[34px] h-[34px] rounded-full"
                src={Profile}
                alt="Profile Picture"
              />
              <span className="border-[2px] rounded-[10px]">
                <div className=" flex justify-between ">
                  <div className="m-3">
                    <a
                      href="#"
                      className=" px-1 no-underline text-[#208D8E] text-[12px] font-medium"
                    >
                      شما
                    </a>
                    <span className=" text-[12px] text-slate-400 ">
                      کامنت گذاشتید.
                    </span>
                  </div>
                  <div>
                    <p className=" m-3 text-[12px] text-slate-400 ">12 تیر</p>
                  </div>
                </div>
                <p className=" p-3 text-[12px] font-normal ">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است،
                </p>
              </span>
            </div>
            <div>
              {/* <input
                type="text"
                placeholder=""
                className="w-[100%] h-[67px] border-slate-400 left-0 bottom-0"
              /> */}
              <div class="flex h-[65px] ">
                <input
                  type="text"
                  class=" bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 "
                  placeholder="کامنت"
                />
                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                  @
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
