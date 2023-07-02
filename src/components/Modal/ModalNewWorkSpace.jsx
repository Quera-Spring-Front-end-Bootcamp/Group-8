import AXIOS from "../Dashboard/Task/ColumnView/axios.configs";
import { useEffect, useState } from "react";

const ModalNewWorkSpace = (props) => {
  const [workspaceName,setWorkspaceName] = useState("");
  const [workspaceId,setWorkspaceId] = useState("");
useEffect(()=>{
  AXIOS.get('/workspace/get-all').then(res=>{
    
  })
},[])
  const handleCreateWorkspace=()=>{
    AXIOS.post('/workspace/create',{
      name:workspaceName
    }).then(res=>{
      console.log(res.data.data)
      const newWorkspace= res.data.data
    // localStorage.setItem(newWorkspace.name, newWorkspace._id)
    setWorkspaceId(newWorkspace._id)
    // props.getProjectsByWorkspaceId(newWorkspace._id)
    // props.getAllWorkspaces()
    
    })
    .catch(err=>console.log(err))
  }

 

  return (
    <div>
      <div className=" fixed items-center justify-center left-[30%] top-[30%] w-[501px] h-[300px] rounded-[12px] border shadow-md bg-white">
        <header className="flex p-5 justify-between w-[100%]">
          <span class="material-symbols-rounded text-slate-500 hover:text-black cursor-pointer" onClick={props.onClick}>
            close
          </span>
          <h2 className=" justify-center text-[24px] font-medium items-center text-center ">
            مرور اطلاعات
          </h2>
          <span class="material-symbols-rounded text-slate-500 hover:text-black cursor-pointer">
            arrow_back
          </span>
        </header>

        <div className=" pt-5 mx-5 items-center justify-center rounded-[8px]">
          <div className="px-3 py-2">
            <label htmlFor="input" className="text-[16px] font-normal py-2">نام ورک اسپیس</label>
            <input 
            type="text" 
            placeholder="" 
            className="w-[435px] h-[40px] border rounded-[6px] my-2" 
            onChange={(e)=>setWorkspaceName(e.target.value)} />
          </div>
        </div>

        <footer className="flex w-[100%] items-center justify-center mt-10">
          <button 
          className="flex absolute p-3 bottom-4 w-[90%] h-[40px] text-[18px] text-[#FFFFFF] items-center justify-center rounded-md bg-[#208D8E] text-center cursor-pointer" 
          onClick={handleCreateWorkspace}>
            ساختن ورک اسپیس
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ModalNewWorkSpace;
