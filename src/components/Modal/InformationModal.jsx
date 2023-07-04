// import Profile from "../../img/cute.png";

// const InformationModal = (props) => {
  
//     return (
//       <div>
//         <div className=" fixed items-center justify-center left-[30%] top-[30%] w-[501px] h-[357px] rounded-[12px] border shadow-md z-50 bg-[#FFFFFF]">
//           <header className="flex p-5 justify-between w-[100%]">
//             <span class="material-symbols-rounded text-slate-500 hover:text-black cursor-pointer" onClick={props.onClick}>close</span>
//             <h2 className=" justify-center text-[24px] font-medium items-center text-center ">
//                 مرور اطلاعات
//             </h2>
//             <span class="material-symbols-rounded text-slate-500 hover:text-black cursor-pointer">arrow_back</span>
//           </header>
  
//           <div className=" w-[90%] pt-5 mx-5 items-center  border rounded-[8px]">
//             <div className="flex justify-between w-[100%] px-3 py-3">
//                 <span className="text-[14px] font-semibold">نام ورک اسپیس</span>
//                 <span className="text-[14px] font-semibold">تیم طراحی</span>
//             </div>
//             <div className="flex justify-between w-[100%] px-3 py-3">
//                 <span className="text-[14px] font-semibold">نام ورک اسپیس</span>
//                 <span className=" w-[17px] y-[13px] bg-lime-600 rounded-sm"></span>
//             </div>
//             <div className="flex justify-between w-[100%] px-3 py-3">
//                 <span className="text-[14px] font-semibold pt-2">نام ورک اسپیس</span>
//                 <span className="flex items-center justify-center">
//                 <img
//                 className=" w-[34px] h-[34px] rounded-full"
//                 src={Profile}
//                 alt="Profile Picture"
//               />
//                 </span>
//             </div>
//           </div>
  
//           <footer className="flex w-[100%] items-center justify-center mt-10">
//             <button className="flex absolute p-3 bottom-4 w-[90%] h-[40px] text-[18px] text-[#FFFFFF] items-center justify-center rounded-md bg-[#208D8E] text-center cursor-pointer" onClick={props.buttonOnClick}>
//               ساختن ورک اسپیس
//             </button>
//           </footer>
//         </div>
//       </div>
//     );
//   };
  
//   export default InformationModal;
  
import Profile from "../../img/cute.png";
import { useState } from "react";
import AXIOS from "../Dashboard/Task/ColumnView/axios.configs";

const InformationModal = (props) => {
  const themeColor = localStorage.getItem("themeColor")
    ? localStorage.getItem("themeColor")
    : "#208D8E";
const [showError,setShowError] = useState(false);

  const handleCreateWorkspace=()=>{
    
    AXIOS.post('/workspace/create',{
      name:props.workspaceName
    }).then(res=>{
      console.log(res.data.data)
      const workspaceId=res.data.data._id;
      localStorage.setItem(workspaceId, props.workspaceColor)
      // const newWorkspace= res.data.data
      props.buttonOnClick();
      props.getAllWorkspaces();
      props.setWorkspaceName("");
      props.setColor("#208D8E")
    // localStorage.setItem(newWorkspace.name, newWorkspace._id)
    // setWorkspaceId(newWorkspace._id)
    // props.getProjectsByWorkspaceId(newWorkspace._id)
    // props.getAllWorkspaces()
    
    })
    .catch(err=>{
      console.log(err)
      setShowError(true)
    })
    
  }

  
    return (
      <div className="modal w-[501px] h-[357px]">
        <div 
        // className=" fixed items-center justify-center left-[30%] top-[30%] w-[501px] h-[357px] rounded-[12px] border shadow-md"
        >
          <header className="flex p-5 justify-between w-[100%]">
            <span class="material-symbols-rounded text-slate-500 hover:text-black cursor-pointer" onClick={props.onClick}>close</span>
            <h2 className=" justify-center text-[24px] font-medium items-center text-center ">
                مرور اطلاعات
            </h2>
            <span class="material-symbols-rounded text-slate-500 hover:text-black cursor-pointer">arrow_back</span>
          </header>
  
          <div className=" w-[90%] pt-5 mx-5 items-center  border rounded-[8px]">
            <div className="flex justify-between w-[100%] px-3 py-3">
                <span className="text-[14px] font-semibold">نام ورک اسپیس</span>
                <span className="text-[14px] font-semibold">{props.workspaceName}</span>
            </div>
            <div className="flex justify-between w-[100%] px-3 py-3">
                <span className="text-[14px] font-semibold">رنگ ورک اسپیس</span>
                <span style={{backgroundColor:props.workspaceColor}} className=" w-[17px] y-[13px]rounded-sm"></span>
            </div>
            <div className="flex justify-between w-[100%] px-3 py-3">
                <span className="text-[14px] font-semibold pt-2">اعضا</span>
                <span className="flex items-center justify-center">
                <img
                className=" w-[34px] h-[34px] rounded-full"
                src={Profile}
                alt="Profile Picture"
              />
                </span>
            </div>
          </div>
  
          <footer className="flex w-[100%] items-center justify-center mt-10">
            <button onClick={handleCreateWorkspace} className="flex absolute p-3 bottom-4 w-[90%] h-[40px] text-[18px] text-[#FFFFFF] items-center justify-center rounded-md bg-[#208D8E] text-center cursor-pointer"style={{backgroundColor:themeColor}} >
              ساختن ورک اسپیس
            </button>
          </footer>
          {showError && <p className="text-center pt-5 text-red-500">ساخت ورک اسپیس انجام نشد، دوباره امتحان کنید</p>}
        </div>
      </div>
    );
  };
  
  export default InformationModal;
  