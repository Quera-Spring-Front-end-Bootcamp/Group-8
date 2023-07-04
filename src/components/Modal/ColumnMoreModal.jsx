// import AXIOS from "../Dashboard/Task/ColumnView/axios.configs";
// import { useState, createContext, useContext } from "react";
// import CreateProject from "./CreateProject";
// import { useEffect } from "react";


// const ColumnMoreModal = ({ id, onDeleteWorkspace, projects }) => {
//     const [workspaceId, setWorkspaceId] = useState("")
//     const [showProject, setShowProject] = useState(false)
//     // const projects= useContext(ProjectsContext)

//     const handleDeleteWorkspace = (id) => {
//         AXIOS.delete(`/workspace/${id}`)
//             .then(res => {
//                 console.log(res.data.data)
//                 const newWorkspace = res.data.data
//                 setWorkspaceId(newWorkspace._id)
//                 onDeleteWorkspace(newWorkspace._id)
//             })
//     }


//     return (
//         <div className="flex flex-col items-start bg-white w-80 rounded-[8px] shadow-[0_4px_16px_0px_rgba(0,0,0,0.15)] absolute right-0 bottom-[50px] z-[100] cursor-pointer">
//             <ul>
//                 <li onClick={() => setShowProject(true)} className="flex justify-between align-center">
//                     <span class="material-symbols-rounded">
//                         add
//                     </span>
//                     <p>ساختن پروژه جدید</p>
//                 </li>
//                 <li className="flex justify-between align-center">
//                     <span class="material-symbols-rounded">
//                         add
//                     </span>
//                     <p>ویرایش نام ورک اسپیس</p>
//                 </li>
//                 <li className="flex justify-between align-center">
//                     <span class="material-symbols-rounded">
//                         add
//                     </span>
//                     <p>ویرایش رنگ</p>
//                 </li>
//                 <li className="flex justify-between align-center">
//                     <span class="material-symbols-rounded">
//                         add
//                     </span>
//                     <p>کپی لینک</p>
//                 </li>
//                 <li onClick={() => handleDeleteWorkspace(id)} className="flex justify-between align-center">
//                     <span class="material-symbols-rounded">
//                         add
//                     </span>
//                     <p>حذف</p>
//                 </li>

//             </ul>
//             {showProject &&
//                 <CreateProject
//                     onClick={() => setShowProject(false)}
//                     id={id}

//                 />}
//         </div>
//     );
// }

// export default ColumnMoreModal;

import AXIOS from "../Dashboard/Task/ColumnView/axios.configs";
import { useState, createContext, useContext } from "react";
import CreateProject from "./CreateProject";
import { useEffect } from "react";
import ModalPickColor from "./ModalPickColor";


const ColumnMoreModal = ({ id,getAllWorkspaces, onDeleteWorkspace, onClickSettings, showNewWS, setShowNewWS,showPickColor, setShowPickColor, setShowSettings }) => {
    const [workspaceId, setWorkspaceId] = useState("")
    const [showProject, setShowProject] = useState(false)
    const [showPalette, setShowPalette] = useState(false)
    // const projects= useContext(ProjectsContext)

    const handleDeleteWorkspace = (id) => {
        AXIOS.delete(`/workspace/${id}`)
            .then(res => {
                console.log(res.data.data)
                const newWorkspace = res.data.data
                setWorkspaceId(newWorkspace._id)
                onDeleteWorkspace(newWorkspace._id)
            })
    }


    return (
        <div className="flex flex-col items-start bg-white w-80 rounded-[8px] shadow-[0_4px_16px_0px_rgba(0,0,0,0.15)] z-[100] py-5 cursor-pointer absolute top-[53px] right-[300px]">
            <ul>
                <li
                    onClick={() => {
                        setShowProject(true)
                        // onClickSettings()
                    }}
                    className="flex items-center"
                >
                    <span class="px-5 material-symbols-rounded">
                        add
                    </span>
                    <p>ساختن پروژه جدید</p>
                </li>
                <li
                    onClick={() => {
                        setShowNewWS(true);
                        onClickSettings();
                    }}
                    className="flex py-1 items-center">
                    <span className="px-5 material-symbols-rounded">
                        edit_square
                    </span>
                    <p>ویرایش نام ورک اسپیس</p>
                </li>
                <li
                    onClick={() => {
                        setShowPickColor(true)
                        onClickSettings()
                    }}
                    className="flex py-1 items-center">
                    <span className="px-5 material-symbols-rounded">
                        palette
                    </span>
                    <p>ویرایش رنگ ورک اسپیس</p>
                </li>
                <li className="flex py-1 items-center">
                    <span className="px-5 material-symbols-rounded">
                        link
                    </span>
                    <p>کپی لینک</p>
                </li>
                <li onClick={() => handleDeleteWorkspace(id)} className="flex py-1 items-center">
                    <span className="px-5 material-symbols-rounded">
                        delete
                    </span>
                    <p>حذف ورک اسپیس</p>
                </li>

            </ul>
            {showProject &&
                <CreateProject
                    onClick={() => setShowProject(false)}
                    id={id}
                    setShowProject={setShowProject}
                    getAllWorkspaces={getAllWorkspaces}
                />}
            {/* {
                showNewWS && (
                    <ModalNewWorkSpace
                        onClick={() => setShowNewWS(false)}
                        buttonOnClick={() => setShowPickColor(true)}
                        getAllWorkspaces={getAllWorkspaces}
                        workspaceName={workspaceName}
                    ></ModalNewWorkSpace>
                )
            }
             {
        showPickColor && (
          <ModalPickColor
            onClick={() => setShowPickColor(false)}
            buttonOnClick={() => setShowInfo(true)}
            workspaceName={workspaceName}
            color={color}
            setColor={setColor}
            showPickColor={showPickColor}
            setShowPickColor={setShowPickColor}
          ></ModalPickColor>
        )
      } */}
        </div>
    );
}

export default ColumnMoreModal;