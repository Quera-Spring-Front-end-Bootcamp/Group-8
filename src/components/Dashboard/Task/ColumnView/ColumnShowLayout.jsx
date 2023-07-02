import React, { useEffect, useState, useRef, useContext, createContext } from 'react';
import Column from './../../../Dashboard/Task/ColumnView/ColHeader/ColumnHeader';
import { CirclePicker } from 'react-color';
import AXIOS from './axios.configs';
import { ActiveButtonsContext } from '../../../../App';
// import {createProject, createWorkspace} from './axios.configs'

function ColumnShowLayout() {
    const [isClicked, setIsClicked] = useState(false);
    const [isClicked1, setIsClicked1] = useState(true);
    const [columns, setColumns] = useState([]);
    const [column, setColumn] = useState({
        name: "",
        borderColor: "",
        tasks: [],
        position: 0,
    });
    // const [borderColor, setBorderColor] = useState('#000000');
    // const [columnText, setColumnText] = useState('');
    const [color, setColor] = useState(null);
    const [showPicker, setShowPicker] = useState(true);
    const parentRef = useRef(null);
    const [tasks, setTasks] = useState([])
    // const [projectId, setProjectId] = useState(null);
    const [columnId,setColumnId] = useState("")
    const { boards, projectId } =
    useContext(ActiveButtonsContext);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (parentRef.current && !parentRef.current.contains(event.target)) {
                setShowPicker(false);
                setIsClicked(false);
                setIsClicked1(true)
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    // useEffect( () => {
    //     const workspaceId= localStorage.getItem("workspaceId")
    //     console.log(workspaceId)
    //     AXIOS.get(`/workspace/${workspaceId}`)
    //     .then(res=>{
    //         console.log(res.data.data)
    //         AXIOS.post('/projects',{
    //             name: "Project Name3",
    //             workspaceId:res.data.data._id
    //         }).then(res=>{
    //             console.log(res.data.data)
    //             localStorage.setItem("projectId",res.data.data._id)
    //                 // fetchColumns(res.data.data._id)
    //         })
    //     })


        // AXIOS.post('/workspace/create', {
        //     name: "testWorkspace9"
        // })
        //     .then(res => {
        //         const workspaceId = res.data.data._id
        //         console.log(workspaceId)
        //         AXIOS.post('/projects', {
        //             name: 'Project Name3',
        //             workspaceId: workspaceId
        //         }).then(res => {
        //             const projectId = res.data.data._id
        //             console.log(projectId)
        //             setProjectId(projectId)
        //             fetchColumns(projectId)
        //         })
        //     })
    // }, [])
useEffect(()=>{
// const projectId= localStorage.getItem("پروژه من")
// setProjectId(projectId)
// console.log(projectId)
// AXIOS.get(`/board/${projectId}`)
//             .then((res) => {    
//                 const fetchedColumns = res.data.data.map((column) => (
//                     {
//                         ...column,
//                         borderColor: localStorage.getItem(column._id)
//                     }
//                 ));
//                 console.log('borad haye get shode')
//                 console.log(fetchedColumns)
//                 setColumns(fetchedColumns)
//             })
//             .catch(error => console.log(error))
setColumns(boards)
},[boards])

    // const fetchColumns = (projectId) => {
    //     AXIOS.get(`/board/${projectId}`)
    //         .then((res) => {
    //             // setTasks(res.data.data.tasks)
    //             const fetchedColumns = res.data.data.map((column) => (
    //                 {
    //                     ...column,
    //                     borderColor: localStorage.getItem(column._id)
    //                 }
    //             ));
    //             console.log(fetchedColumns)
    //             setColumns(fetchedColumns)
    //         })
    //         .catch(error => console.log(error))
    // }

    const handleChangeColor = (newColor) => {
        setColor(newColor.hex);
        setShowPicker(false)
    };


    const handleColumnTextChange = (event) => {
        setColumn({ ...column, name: event.target.value });
    };

    const changeStatus = () => {
        setShowPicker(true)
        setIsClicked(true)
        setIsClicked1(false)
        setColor("");
    }

    const addColumn = () => {
        if (column.name) {
            AXIOS.post('/board', {
                name: column.name,
                projectId: projectId
            }).then(res => {
                const retrievedColumn = res.data.data
                setColumnId(res.data.data._id)
                console.log(retrievedColumn)
                const newColumn = { ...retrievedColumn, borderColor: color }
                console.log(newColumn)
                localStorage.setItem(newColumn._id, color);
                setColumns((prevColumns) => [...prevColumns, newColumn])

            }).catch(error => console.log(error))

            setShowPicker(false)
            setIsClicked(false)
            setIsClicked1(true)

        }

    };

    const handleDelete = (id) => {
        AXIOS.delete(`/board/${id}`)
        // const newColumns = columns.filter((column) => column.id !== id);
        setColumns((prevColumns) => prevColumns.filter((column) => column._id !== id))
    }

   
    // const handleTaskEdit=(editedtaskId)=>{
    //     const clickedTask= tasks.find((task)=>task._id === editedtaskId)
    //     setSelectedTask(clickedTask)
    //     }
     
         function handleBoardEdit(id, newcolumnText) {
     
             AXIOS.put(`/board/${id}`,
                 {
                     name: newcolumnText
                 }
     
             ).then((res) => {
                 const response = res.data.data
                 const editedColumn = { ...response, borderColor: localStorage.getItem(response._id) }
                 console.log(editedColumn)
                 setColumns((prevColumns) => {
                     return prevColumns.map((column) => {
                         if (column._id === id) {
                             return editedColumn
                         }
                         return column;
     
                     })
                 })
             })
                 .catch(error => console.log(error));
     
         }

    return (
        
            <div ref={parentRef} className='flex flex-row '>

                <div className="flex">

                    {columns.map(({ _id, borderColor, name, position }) => (
                        <Column
                            boardId={_id}
                            key={_id}
                            borderColor={borderColor}
                            position={position}
                            columnText={name}
                            handleDelete={handleDelete}
                            handleBoardEdit={handleBoardEdit}
                            setColor={setColor}
                            color={color}
                            setColumns={setColumns}
                            tasks={tasks}
                            
                        />
                    ))}
                </div>

                {isClicked1 &&
                    (
                        <div onClick={changeStatus} className={`flex gap-8 shadow-md flex-row justify-between items-center py-2 px-3 mb-4 w-[250px] h-[41px] bg-white text-[#1E1E1E]-500 border-t rounded cursor-pointer relative z-1`}>

                            <div>
                                ساختن ستون جدید

                            </div>
                            <span className="material-symbols-rounded">
                                add
                            </span>
                        </div>
                    )
                }
                {isClicked &&
                    (<>
                        <div className='flex relative shadow-md flex-row justify-between items-center gap-1 py-2 px-2 mb-4 w-[250px] h-[41px] bg-white  border-t rounded cursor-pointer'>

                            <div className='absolute top-[45px] z-10 bg-white'>

                                {showPicker && (<CirclePicker color={color} onChange={handleChangeColor} />)}
                                <div className='mt-2' style={{ color }}> رنگ مورد نظر خود را انتخاب کنید </div>
                            </div>

                            <input
                                type="text"
                                placeholder='یک نام وارد کنید'
                                onChange={handleColumnTextChange}
                                className='outline-none'
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        addColumn();
                                    }
                                }} />
                            <span onClick={addColumn} className="material-symbols-rounded">
                                add
                            </span>
                        </div>
                    </>)
                }
            </div>
        
    );
};

export default ColumnShowLayout
