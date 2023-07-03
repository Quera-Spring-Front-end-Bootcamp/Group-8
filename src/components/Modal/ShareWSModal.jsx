import Profile from "../../img/cute.png";
import ShareDropDown from "../Dashboard/Layout/Share/ShareDropDown";

function ShareProjectModal(props) {
  const themeColor = localStorage.getItem("themeColor")
    ? localStorage.getItem("themeColor")
    : "#208D8E";
  const options = [
    {
      label: "دسترسی کامل",
      description: "توانایی ساختن تسک در این پروژه، تنظیمات پروژه و حذف پروژه",
      value: "1",
    },
    {
      label: "دسترسی ویرایش",
      description:
        "توانایی ویرایش تسک در این پروژه و ویرایش تنظیمات پروژه. نمی تواند پروژه را حذف یا تسک جدید بسازد.",
      value: "2",
    },
    {
      label: "دسترسی کامنت",
      description:
        "توانایی کامنت گذاشتن دارد. می تواند ستون تسک ها را تغییر دهد اما توانایی ویرایش تنظیمات پروژه را ندارد.",
      value: "3",
    },
    {
      label: "فقط دسترسی مشاهده",
      description: "توانایی گذاشتن کامنت یا ویرایش تسک ها را ندارد.",
      value: "4",
    },
  ];

  const projects = [
    { label: "همه پروژه ها", value: "1" },

  ];

  return (
    <div>
      <div className=" fixed left-[30%] top-[30%] w-[550px] h-[378px] rounded-[12px] border shadow-sm">
        <header className="flex justify-between w-[100%]">
          <span className=" p-5 material-symbols-rounded" onClick={props.onClick}>close</span>
          <h2 className=" py-3 justify-center items-center text-[20px] text-center font-medium">
            اشتراک گذاری ورک اسپیس
          </h2>
          <span className=" text-[#FFFFFF] p-5 material-symbols-rounded">
            arrow_back
          </span>
        </header>

        <div className="flex w-[100%] items-center justify-center m-5">
          <div className="flex pl-10 w-[100%]">
            <input
              type="email"
              id="website-admin"
              className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="دعوت با ایمیل"
            />
            <span className="inline-flex items-center px-3 text-sm text-[#FFFFFF] border border-r-0 border-gray-300 rounded-l-md cursor-pointer"style={{backgroundColor:themeColor}}>
              ارسال
            </span>
          </div>
        </div>
        <div className="flex justify-between w-[100%]">
          <div className=" flex p-5 text-[14px]">
            <span className=" pl-2 material-symbols-rounded">link</span>
            لینک خصوصی
          </div>
          <div className=" py-3 ml-5">
            <button className=" border py-1 px-1 rounded-[6px] bg-[#FFFFFF] border-[#E9EBF0]">
              کپی لینک
            </button>
          </div>
        </div>
        <h1 className=" mr-5 text-[#7D828C] text-[16px] font-medium w-[100%]">
          اشتراک گذاشته شده با
        </h1>
        {/* Owner */}
        <div className="flex justify-between items-center w-[100%]">
          <div className=" flex items-center justify-center p-5 text-[14px]">
            <span className=" flex pl-2 ">
              <img
                className=" w-[34px] h-[34px] rounded-full"
                src={Profile}
                alt="Profile Picture"
              />
            </span>
            <h3 className=" text-[20px] px-2">من</h3>
            {/* highlight */}
            <h3 className="rounded-[6px] bg-[#A5E4F8] p-1">workspace owner</h3>
          </div>
          <div className=" py-3 ml-5">
            <button className=" border py-1 px-1 text-[#A6A7A7] rounded-[6px] bg-[#FFFFFF] border-[#E9EBF0]">
              دسترسی کامل
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center w-[100%]">
          <div className=" flex items-center justify-center p-5 text-[14px]">
            <span className=" flex pl-2 ">
              <img
                className=" w-[34px] h-[34px] rounded-full"
                src={Profile}
                alt="Profile Picture"
              />
            </span>
            <h3 className=" text-[16px] px-2">eldamavandi@gmail.com</h3>
          </div>
          <div className=" flex py-3 ml-5">
            <ShareDropDown
              Options={options}
              className="h-9 w-[120px] px-1 border items-center rounded-md bg-[#FFFFFF] border-[#E9EBF0]  cursor-pointer"
            />
            <ShareDropDown
              Options={projects}
              className="h-9 w-[120px] px-1 border items-center rounded-md bg-[#FFFFFF] border-[#E9EBF0]  cursor-pointer"
            />
          </div>
        </div>

        <footer className="flex w-[100%] items-center mt-7"></footer>
      </div>
    </div>
  );
}

export default ShareProjectModal;
