// import { useState } from "react";
// import AXIOS from "../Dashboard/Task/ColumnView/axios.configs";

// const CreateProject = (props) => {
//     const [projectName,setProjectName] = useState("")
//   const [projectsId,setProjectsId] = useState()
//     const handleCreateProject= (id)=>{
//         AXIOS.post('/projects',{
//             name:projectName,
//             workspaceId:id
//         })
//         .then(res=>{
//             console.log(res.data.data)
//             const newProject= res.data.data
//             setProjectsId(res.data.data._id)
//             localStorage.setItem(newProject.name,newProject._id)
//             // props.getProjectsByWorkspaceId(props.id)
//         })
//         .catch(err=>console.log(err))
//     }

//     return ( 
       
//             <div>
//               <div className=" fixed items-center justify-center left-[30%] top-[30%] w-[501px] h-[300px] rounded-[12px] border shadow-md bg-white">
//                 <header className="flex p-5 justify-between w-[100%]">
//                   <span class="material-symbols-rounded text-slate-500 hover:text-black cursor-pointer" onClick={props.onClick}>
//                     close
//                   </span>
//                   <h2 className=" justify-center text-[24px] font-medium items-center text-center ">
//                    ساختن پروژه
//                   </h2>
//                   <span class="material-symbols-rounded text-slate-500 hover:text-black cursor-pointer">
//                     arrow_back
//                   </span>
//                 </header>
        
//                 <div className=" pt-5 mx-5 items-center justify-center rounded-[8px]">
//                   <div className="px-3 py-2">
//                     <label htmlFor="input" className="text-[16px] font-normal py-2">نام ورک اسپیس</label>
//                     <input 
//                     type="text" 
//                     placeholder="" 
//                     className="w-[435px] h-[40px] border rounded-[6px] my-2" 
//                     onChange={(e)=>setProjectName(e.target.value)} />
//                   </div>
//                 </div>
        
//                 <footer className="flex w-[100%] items-center justify-center mt-10">
//                   <button 
//                   className="flex absolute p-3 bottom-4 w-[90%] h-[40px] text-[18px] text-[#FFFFFF] items-center justify-center rounded-md bg-[#208D8E] text-center cursor-pointer" 
//                   onClick={()=>handleCreateProject(props.id)}>
//                     ساختن پروژه
//                   </button>
//                 </footer>
//               </div>
//             </div>
//           );
//         };
        
        
      
// export default CreateProject;

import { useState } from "react";
import AXIOS from "../Dashboard/Task/ColumnView/axios.configs";
import Button from "../Common/Button/Button";

const CreateProject = (props) => {
    const [projectName,setProjectName] = useState("")
  const [projectsId,setProjectsId] = useState('')
  const themeColor = localStorage.getItem("themeColor")
    ? localStorage.getItem("themeColor")
    : "#208D8E";

    const handleCreateProject= (id)=>{
      console.log(id)
      props.setShowProject(false)
        AXIOS.post('/projects',{
            name:projectName,
            workspaceId:id
        })
        .then(res=>{
            console.log(res.data.data)
            const newProject= res.data.data
            setProjectsId(res.data.data._id)
            localStorage.setItem(newProject.name,newProject._id)
            // props.getProjectsByWorkspaceId(props.id)
            props.getAllWorkspaces();
        })
        .catch(err=>console.log(err))
    }

    return ( 
       
           
              <div className="modal w-[501px] h-[300px]"
              // className=" fixed items-center justify-center left-[30%] top-[30%] w-[501px] h-[300px] rounded-[12px] border shadow-md bg-white"
              >
                <header className="flex p-5 justify-start items-center w-[100%]">
                  <span class="material-symbols-rounded text-slate-500 hover:text-black cursor-pointer ml-32" onClick={props.onClick}>
                    close
                  </span>
                  <h2 className=" justify-center text-[24px] font-medium items-center text-center ">
                   ساختن پروژه
                  </h2>
                  {/* <span class="material-symbols-rounded text-slate-500 hover:text-black cursor-pointer">
                    arrow_back
                  </span> */}
                </header>
        
                <div className=" pt-5 mx-5 items-center justify-center rounded-[8px]">
                  <div className="px-3 py-2">
                    <label htmlFor="input" className="text-[16px] font-normal py-2">نام پروژه</label>
                    <input 
                    type="text" 
                    // value={updatedProjectName}
                    className="w-[435px] h-[40px] border rounded-[6px] my-2 outline-none p-2" 
                    onChange={(e)=>setProjectName(e.target.value)} />
                  </div>
                </div>
        
                <footer className="flex w-[100%] items-center justify-center mt-10">
                  <Button 
                  className=" w-[90%] h-[40px] text-[18px] text-[#FFFFFF] rounded-md text-center cursor-pointer"color={themeColor} 
                  onClick={()=>handleCreateProject(props.id)}>
                    ساختن پروژه
                  </Button>
                </footer>
              </div>
           
          );
        };
        
        
      
export default CreateProject;