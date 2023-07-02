import AXIOS from "../Dashboard/Task/ColumnView/axios.configs";
import { useState, createContext, useContext } from "react";
import CreateProject from "./CreateProject";
import { useEffect } from "react";


const ColumnMoreModal = ({ id, onDeleteWorkspace, projects }) => {
    const [workspaceId, setWorkspaceId] = useState("")
    const [showProject, setShowProject] = useState(false)
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
        <div className="flex flex-col items-start bg-white w-80 rounded-[8px] shadow-[0_4px_16px_0px_rgba(0,0,0,0.15)] absolute right-0 bottom-[50px] z-[100] cursor-pointer">
            <ul>
                <li onClick={() => setShowProject(true)} className="flex justify-between align-center">
                    <span class="material-symbols-rounded">
                        add
                    </span>
                    <p>ساختن پروژه جدید</p>
                </li>
                <li className="flex justify-between align-center">
                    <span class="material-symbols-rounded">
                        add
                    </span>
                    <p>ویرایش نام ورک اسپیس</p>
                </li>
                <li className="flex justify-between align-center">
                    <span class="material-symbols-rounded">
                        add
                    </span>
                    <p>ویرایش رنگ</p>
                </li>
                <li className="flex justify-between align-center">
                    <span class="material-symbols-rounded">
                        add
                    </span>
                    <p>کپی لینک</p>
                </li>
                <li onClick={() => handleDeleteWorkspace(id)} className="flex justify-between align-center">
                    <span class="material-symbols-rounded">
                        add
                    </span>
                    <p>حذف</p>
                </li>

            </ul>
            {showProject &&
                <CreateProject
                    onClick={() => setShowProject(false)}
                    id={id}

                />}
        </div>
    );
}

export default ColumnMoreModal;