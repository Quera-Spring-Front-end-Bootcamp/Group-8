// // import AXIOS from "../Dashboard/Task/ColumnView/axios.configs";
// // import { useEffect, useState } from "react";

// // const ModalNewWorkSpace = (props) => {
// //   const themeColor = localStorage.getItem("themeColor")
// //   ? localStorage.getItem("themeColor")
// //   : "#208D8E";
// //   const [workspaceName,setWorkspaceName] = useState("");
// //   const [workspaceId,setWorkspaceId] = useState("");
// // useEffect(()=>{
// //   AXIOS.get('/workspace/get-all').then(res=>{
    
// //   })
// // },[])
// //   const handleCreateWorkspace=()=>{
// //     AXIOS.post('/workspace/create',{
// //       name:workspaceName
// //     }).then(res=>{
// //       console.log(res.data.data)
// //       const newWorkspace= res.data.data
// //     // localStorage.setItem(newWorkspace.name, newWorkspace._id)
// //     setWorkspaceId(newWorkspace._id)
// //     // props.getProjectsByWorkspaceId(newWorkspace._id)
// //     // props.getAllWorkspaces()
    
// //     })
// //     .catch(err=>console.log(err))
// //   }

 

// //   return (
// //     <div>
// //       <div className=" fixed items-center justify-center left-[30%] top-[30%] w-[501px] h-[300px] rounded-[12px] border shadow-md bg-white bg-[#FFFFFF] z-50"style={{ boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)" }}>
// //         <header className="flex p-5 justify-between w-[100%]">
// //           <span class="material-symbols-rounded text-slate-500 hover:text-black cursor-pointer" onClick={props.onClick}>
// //             close
// //           </span>
// //           <h2 className=" justify-center text-[24px] font-medium items-center text-center ">
// //             مرور اطلاعات
// //           </h2>
// //           <span class="material-symbols-rounded text-slate-500 hover:text-black cursor-pointer">
// //             arrow_back
// //           </span>
// //         </header>

// //         <div className=" pt-5 mx-5 items-center justify-center rounded-[8px]">
// //           <div className="px-3 py-2">
// //             <label htmlFor="input" className="text-[16px] font-normal py-2">نام ورک اسپیس</label>
// //             <input 
// //             type="text" 
// //             placeholder="" 
// //             className="w-[435px] h-[40px] border rounded-[6px] my-2" 
// //             onChange={(e)=>setWorkspaceName(e.target.value)} />
// //           </div>
// //         </div>

// //         <footer className="flex w-[100%] items-center justify-center mt-10">
// //           <button 
// //           className="flex absolute p-3 bottom-4 w-[90%] h-[40px] text-[18px] text-[#FFFFFF] items-center justify-center rounded-md text-center cursor-pointer"style={{backgroundColor:themeColor}} 
// //           onClick={handleCreateWorkspace}>
// //             ساختن ورک اسپیس
// //           </button>
// //         </footer>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ModalNewWorkSpace;

// import AXIOS from "../Dashboard/Task/ColumnView/axios.configs";
// import { useEffect, useState } from "react";
// import Button from "../Common/Button/Button";
// import ModalPickColor from "./ModalPickColor";


// const ModalNewWorkSpace = (props) => {
  
//   // const [workspaceId,setWorkspaceId] = useState("");
//   const [showError,setShowError] = useState(false)
// useEffect(()=>{
//   AXIOS.get('/workspace/get-all').then(res=>{
    
//   })
// },[])
//   // const handleCreateWorkspace=()=>{
//   //   AXIOS.post('/workspace/create',{
//   //     name:props.workspaceName
//   //   }).then(res=>{
//   //     console.log(res.data.data)
//   //     const newWorkspace= res.data.data
//   //   // localStorage.setItem(newWorkspace.name, newWorkspace._id)
//   //   setWorkspaceId(newWorkspace._id)
//   //   // props.getProjectsByWorkspaceId(newWorkspace._id)
//   //   // props.getAllWorkspaces()
    
//   //   })
//   //   .catch(err=>console.log(err))
//   // }

//  const handleShowColorPicker= ()=>{
//   if(props.workspaceName){
//     props.buttonOnClick()
//     props.onClick()
//   }else{
//     setShowError(true)
//   }
//  }

//   return (
//     <div className="modal p-8">
//       <div 
//       // className=" fixed items-center justify-center left-[30%] top-[30%] w-[501px] h-[300px] rounded-[12px] border shadow-md bg-white"
//       >
//         <header className="flex p-5 justify-between w-[100%]">
//           <span class="material-symbols-rounded text-slate-500 hover:text-black cursor-pointer" onClick={props.onClick}>
//             close
//           </span>
//           <h2 className=" justify-center text-[24px] font-medium items-center text-center ">
//             ساختن ورک اسپیس جدید
//           </h2>
//           {/* <span class="material-symbols-rounded text-slate-500 hover:text-black cursor-pointer">
//             arrow_back
//           </span> */}
//         </header>

//         <div className=" pt-5 mx-5 items-center justify-center rounded-[8px]">
//           <div className="px-3 py-2">
//             <label htmlFor="input" className="text-[16px] font-normal py-2">نام ورک اسپیس</label>
//             <input 
//             type="text" 
//             placeholder="" 
//             className="w-[435px] h-[40px] border rounded-[6px] my-2 outline-none p-2" 
//             onChange={(e)=>props.setWorkspaceName(e.target.value)} />
//           </div>
//         </div>

//         <footer className="flex w-[100%] items-center justify-center mt-10">
//           {/* <button 
//           className="flex absolute p-3 bottom-4 w-[90%] h-[40px] text-[18px] text-[#FFFFFF] items-center justify-center rounded-md bg-[#208D8E] text-center cursor-pointer" 
//           onClick={handleCreateWorkspace}>
//             ادامه
//           </button> */}
//           <Button
//           onClick={handleShowColorPicker} 
//           className={'bg-[#208D8E] text-center w-[90%] h-[40px] text-[#FFFFFF]'} >ادامه</Button>
           
//         </footer>
//        {showError && <p className="text-center pt-5 text-red-500">یک نام برای ورک اسپیس انتخاب کنید</p>}
//       </div>
     
//     </div>
//   );
// };

// export default ModalNewWorkSpace;

import AXIOS from "../Dashboard/Task/ColumnView/axios.configs";
import { useEffect, useState } from "react";
import Button from "../Common/Button/Button";


const ModalNewWorkSpace = (props) => {

  const themeColor = localStorage.getItem("themeColor")
    ? localStorage.getItem("themeColor")
    : "#208D8E";
  
  // const [updateWorkspaceName,setUpdateWorkspaceName] = useState(props.workspaceName);
  const [showError,setShowError] = useState(false)
useEffect(()=>{
  AXIOS.get('/workspace/get-all').then(res=>{
    
  })
},[])
  // const handleCreateWorkspace=()=>{
  //   AXIOS.post('/workspace/create',{
  //     name:props.workspaceName
  //   }).then(res=>{
  //     console.log(res.data.data)
  //     const newWorkspace= res.data.data
  //   // localStorage.setItem(newWorkspace.name, newWorkspace._id)
  //   setWorkspaceId(newWorkspace._id)
  //   // props.getProjectsByWorkspaceId(newWorkspace._id)
  //   // props.getAllWorkspaces()
    
  //   })
  //   .catch(err=>console.log(err))
  // }

 const handleShowColorPicker= ()=>{
 
    props.buttonOnClick()
    props.onClick()
  
 }

  return (
    <div className="modal p-8">
      <div 
      // className=" fixed items-center justify-center left-[30%] top-[30%] w-[501px] h-[300px] rounded-[12px] border shadow-md bg-white"
      >
        <header className="flex p-5 justify-start w-[100%]">
          <span class="material-symbols-rounded text-slate-500 hover:text-black cursor-pointer ml-32" onClick={props.onClick}>
            close
          </span>
          <h2 className=" justify-center text-[24px] font-medium items-center text-center ">
            ساختن ورک اسپیس جدید
          </h2>
          {/* <span class="material-symbols-rounded text-slate-500 hover:text-black cursor-pointer">
            arrow_back
          </span> */}
        </header>

        <div className=" pt-5 mx-5 items-center justify-center rounded-[8px]">
          <div className="px-3 py-2">
            <label htmlFor="input" className="text-[16px] font-normal py-2">نام ورک اسپیس</label>
            <input 
            type="text" 
            className="w-[435px] h-[40px] border rounded-[6px] my-2 outline-none p-2" 
            onChange={(e)=>props.setWorkspaceName(e.target.value)} />
          </div>
        </div>

        <footer className="flex w-[100%] items-center justify-center mt-10">
          {/* <button 
          className="flex absolute p-3 bottom-4 w-[90%] h-[40px] text-[18px] text-[#FFFFFF] items-center justify-center rounded-md bg-[#208D8E] text-center cursor-pointer" 
          onClick={handleCreateWorkspace}>
            ادامه
          </button> */}
          <Button
          onClick={handleShowColorPicker} 
          className={'text-center w-[90%] h-[40px] text-[#FFFFFF] rounded-[5px]'} color={themeColor}>ادامه</Button>
           
        </footer>
       {showError && <p className="text-center pt-5 text-red-500">یک نام برای ورک اسپیس انتخاب کنید</p>}
      </div>
     
    </div>
  );
};

export default ModalNewWorkSpace;
