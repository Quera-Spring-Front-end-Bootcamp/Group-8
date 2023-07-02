import React, { useState, useRef, useEffect } from 'react';
import ColTask from "./../ColTask/ColTask"
import Counter from './../../ColumnView/Counter/Counter';
import AXIOS from '../axios.configs';
import { CirclePicker } from 'react-color';
import MakeTaskModal from '../../../../Modal/MakeTaskModal';



const Column = ({ boardId, position, borderColor, columnText, handleDelete, handleBoardEdit, color, setColumns,parentRef }) => {
  const [rowCount, setRowCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [isSettingHovered, setIsSettingHovered] = useState(true)
  const [columnEditID, setColumnEditID] = useState(null);
  const [columnId, setColumnId] = useState(null)
  const [columnEditText, setColumnEditText] = useState('')
  // const [isEditing, setIsEditing] = useState(false);
  const [selectedTask, setSelectedTask] = useState()
  const [showPicker, setShowPicker] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [tasks, setTasks] = useState([]);
  const [tags, setTags] = useState([])
  // const parentRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (parentRef.current && !parentRef.current.contains(event.target)) {
  //       setIsSettingOpen(false);
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  useEffect(() => {
    AXIOS.get(`/board/${boardId}/tasks`)
      .then((res) => {
        console.log('task haee ke az board get kardam')
        console.log(res.data.data)
        setTasks(res.data.data)
        // setTags(res.data.data.taskTags)
      })
      .catch(error => console.log(error))
  }, [])


  const update = (newTags) => {
    console.log('tag hayee ke az ColTask mian')
    console.log(newTags)
  }
  const handleEvent = () => {
    setIsSettingOpen(false);
  }

  const addRow = () => {
    setRowCount(rowCount + 1);
    // setIsSettingOpen(false);
  };


  const updateEditData = () => {
    // setIsEditing(true);
    setColumnEditID(boardId);
    setColumnEditText(columnText);
    setIsSettingOpen(false);
    setIsSettingHovered(false);
  }


  const changeEditText = (e) => {
    const newColumnEditText = e.target.value;
    setColumnEditText(newColumnEditText)
  }

  const handleClickDone = () => {

    handleBoardEdit(columnEditID, columnEditText)
    setColumnEditID(null);
    setColumnEditText("");
    setIsSettingHovered(true);
    // setIsEditing(false);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClickDone();
    }
  }

  const onChangeColor = (id) => {
    setColumnId(id)
    setIsSettingOpen(false)
    setShowPicker(true);
  };

  const handleChangeColor = (newColor) => {
    const columnColor = localStorage.getItem(columnId)
    console.log(columnId)
    console.log(columnColor)
    localStorage.setItem(columnId, newColor.hex);
    setColumns((prevColumns) =>
      prevColumns.map((column) => {
        if (column._id === columnId) {
          return { ...column, borderColor: newColor.hex };
        }
        return column;
      })
    );
    setShowPicker(false);
  }

  const onEditTask = (taskId, newTaskName, newDescription) => {

    tags?.map((tag) => {
      AXIOS.post('/tags', {
        name: tag.name,
        taskId: taskId,
        color: tag.color
      }).then(res => console.log(res))
        .catch(err => console.log(err))
    })
    // console.log("salam")
    // AXIOS.put(`/task/${taskId}`,{
    //   name: newTaskName,
    //   description: newDescription,
    //   deadline: "2023-05-16T12:52:24.483+00:00"
    // }).then((res)=>{
    //   const editedTask= res.data.data;
    //   console.log(editedTask)
    //   setTasks((prevTasks)=>{
    //    return prevTasks.map((task)=>{
    //       if(task._id === taskId){
    //         return editedTask
    //       }else{
    //         return task
    //       }
    //     })
    //   })
    // })

    // .catch(err=>console.log(err))

  }

  const handleTaskEdit = (id) => {
    const clickedTask = tasks.find((task) => task._id === id)
    setSelectedTask(clickedTask)


  }


  return (

    <div  className='relative ml-8' >
      <div

        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ borderTop: `1px solid ${borderColor}` }}
        className={`flex flex-row justify-between items-center gap-1 py-2 px-3 w-[250px] h-[41px] shadow-md bg-white text-[#1E1E1E]-500 border-t border-t-[blockPickerColor]-500 rounded`}
      >

        {columnEditID === boardId ?
          (
            <>

              <input type='text' autoFocus onKeyDown={handleKeyDown} onChange={changeEditText} value={columnEditText} className='outline-none' />
              <span onClick={handleClickDone} className="material-symbols-rounded cursor-pointer">
                done
              </span>
            </>)
          :
          (<div className="flex gap-2 items-center">
            <div >{columnText}</div>
            <Counter value={rowCount} />
          </div>)}


        {isHovered && isSettingHovered && (
          <div className="flex ">
            <span onClick={() => setIsSettingOpen(true)} className="material-symbols-rounded cursor-pointer">
              more_horiz
            </span>
            <span onClick={() => {
              setShowModal(true)
              setIsSettingOpen(false)
            }}
              className="material-symbols-rounded cursor-pointer">
              add
            </span>
          </div>
        )}
        {isSettingOpen && (
          <div className='absolute top-0 left-0 shadow-md p-4 rounded mt-2 z-10 bg-white border-t cursor-pointer'>
            <span onClick={() => setIsSettingOpen(false)} className="material-symbols-rounded">
              close
            </span>
            <div className='flex flex-col gap-4 text-gray-800 '>
              <div onClick={updateEditData} className='flex items-center gap-2 cursor-pointer'>
                <span className="material-symbols-rounded">
                  edit_square
                </span>
                <p>ویرایش نام ستون</p>
              </div>
              <div onClick={() => {
                setShowModal(true)
                setIsSettingOpen(false)
              }}
                className='flex items-center gap-2'>
                <span className="material-symbols-rounded">
                  add
                </span>
                <p>افزودن تسک</p>
              </div>
              <div className='flex items-center gap-2'>
                <span className="material-symbols-rounded">
                  move_to_inbox
                </span>
                <p>آرشیو تمام تسک‌ها</p>
              </div>
              <div onClick={() => handleDelete(boardId)} className='flex items-center gap-2'>
                <span className="material-symbols-rounded">
                  delete
                </span>
                <p>حذف ستون</p>
              </div>
              <div onClick={() => onChangeColor(boardId)} className='flex items-center gap-2'>
                <span className="material-symbols-outlined">
                  palette
                </span>
                <p>ویرایش رنگ ستون</p>
              </div>
            </div>
          </div>

        )}

      </div>
      <div className='py-3'>
        {showPicker && <CirclePicker color={color} onChange={handleChangeColor} />}
      </div>
      <div>
        {showModal && <MakeTaskModal boardId={boardId} onClick={() => setShowModal(false)} setShowModal={setShowModal} setTasks={setTasks} onIncrement={addRow} />}
      </div>


      <div className='mt-4'>
        {console.log(tasks)}
        {tasks?.map((task) => (
          <ColTask
            key={task._id}
            taskTitle={task.name}
            // tags={task.taskTags}
            taskId={task._id}
            boardId={ boardId}
            onIncrement={addRow}
            onEditTask={onEditTask}
            handleTaskEdit={handleTaskEdit}
            selectedTask={selectedTask}
            update={update}
          />
        ))}

      </div>
    </div>


  );
};

export default Column;
