
import { useState, useEffect } from "react";
import Profile from "../../img/cute.png";
import Priority from "./NewTaskModalComponents/Priority";
import CreateTag from "../Modal/NewTaskModalComponents/CreateTag";
import Button from "../Common/Button/Button"
import AXIOS from "../Dashboard/Task/ColumnView/axios.configs";
import "../../styles/modal.css"
import Tag from '../Dashboard/Task/ColumnView/ColTask/Tag'
import TagStructure from "./NewTaskModalComponents/TagStructure";

const MakeTaskModal = (props) => {
  const [isFlagOpen, setIsFlagOpen] = useState(false);
  const [isTagOpen, setIsTagOpen] = useState(false);
  const [flagColor, setFlagColor] = useState("");
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [updatedTaskName, setUpdatedTaskName] = useState(props.selectedTask ? props.selectedTask.name : '')
  const [updatedDescription, setUpdatedDescription] = useState(props.selectedTask ? props.selectedTask.description : '')
const [postTags,setPostTags] = useState([])
  const [taskTags, setTaskTags] = useState([])
 useEffect(()=>{
 AXIOS.get(`tags/task/${props.taskId}`).then(res=>{
  console.log(res.data.data.tags)
  const getTags= res.data.data.tags
  const newGetTags = getTags.map(tag => ({ ...tag, name: tag.tagName }));
  setTaskTags(newGetTags)
})
 .catch(err=>console.log(err))
 },[])
 
const updateTags = (newTags) => {
  console.log(newTags)
  setPostTags(newTags)
  console.log(taskTags)
  // const editedTags = taskTags.map(tag => {
    
  const correspondingTag = taskTags.find(tag => {
    console.log('tag._id:', tag._id);
    console.log('newTags:', newTags);
    return newTags.some(newTag => newTag._id === tag._id);
  });
  
  console.log('correspondingTag:', correspondingTag);
  
    //   // return correspondingTag ? { ...newTag, ...correspondingTag } : newTag;
  // });
  
//  console.log(editedTags)
//  if(editedTags){
//   setTaskTags(editedTags)
//   return
//  }
    setTaskTags((preTaskTags)=>[...preTaskTags, ...newTags]);
  };

  // const { tagsState, setTagsState } = useContext(TagsContext)

//   useEffect(()=>{
// // console.log(props.taskId)
// //       console.log(taskTags)
// //       if(taskTags){
// //         AXIOS.get(`/tags/task/${props.taskId}`)
// //     .then(res=>{
// //       console.log(res.data.data.tags)
// //       setTaskTags(res.data.data.tags)
// //     })
// //       }

// setTags(props.tags)
//   },[])



  const handleChoosePriority = (color) => {
    setFlagColor(color)
  };

  const handleFlagClick = () => {
    setIsFlagOpen((prev) => !prev);

  }

  const handleTagClick = () => {
    setIsTagOpen(true)
  }

  const handleChangeTaskName = (e) => {
    if (props.selectedTask?.name) {
      setUpdatedTaskName(e.target.value)
    } else {
      setTaskName(e.target.value)
    }
  }

  const handleChangeTaskDescription = (e) => {
    if (props.selectedTask?.description) {
      setUpdatedDescription(e.target.value)
    } else {
      setDescription(e.target.value)
    }
  }

  const onAddTask = () => {
    if (taskName) {
      AXIOS.post('/task', {
        name: taskName,
        description: description,
        boardId: props.boardId
      }).then(res => {
        console.log(res.data.data)
        const newTask = res.data.data;
        const newTaskId = res.data.data._id;
        
        // setTaskId(newTask._id)
        // handlePostTags(tags, newTask._id)
        props.setTasks((prevTasks) => [...prevTasks, newTask])
        props.onIncrement();
      })
        .catch(err => console.log(err))
      console.log(taskName)
      props.setShowModal(false)
    }
  }

  //  const handlePostTags=(tags, taskId)=>{
  //   console.log(tags)
  //   console.log(taskId)
  //   if(taskId){
  //     tags?.map((tag)=>{
  //     AXIOS.post('/tags',{
  //       name: tag.name,
  //       taskId: taskId,
  //       color:tag.color
  //   }).then(res=>console.log(res))

  //     .catch(err=>console.log(err))
  //   })
  //   }

  //  }

  const handleEditTask = () => {
    console.log("tooye edit task hastam daram put mikonam")
    AXIOS.put(`task/${props.taskId}`,{
      name: updatedTaskName ,
      description: updatedDescription ,
      deadline: "2023-05-16T12:52:24.483+00:00"
    }).then(res=>{
      console.log(res.data.data)
      postTags.map((tag) => {
        AXIOS.post('/tags', {
          name:tag.name,
          taskId:props.taskId,
          color: tag.color
        }).then(res=>console.log(res))
        .catch(err=>console.log(err))
      })
    })
    .catch(err=>console.log(err))
    AXIOS.get(`tags/task/${props.taskId}`).then((res)=>{
      console.log(res.data.data)
      setTaskTags(res.data.data)})
    console.log(taskTags)
    // AXIOS.get(`tags/task/${props.taskId}`)
    // .then((res)=>{
    //   console.log(res.data.data.tags)
    //   const existedTags= res.data.data.tags;
    //   const newTaskTags = taskTags.filter(tag => existedTags.includes(!tag._id));
    //   console.log(newTaskTags)
    //   newTaskTags?.map((tag) => {
    //     AXIOS.post('/tags',{
    //       name:tag.name,
    //       taskId: props.taskId,
    //       color: tag.color
    //     }).then(res=>{
    //       console.log(res)
    //       setTaskTags((prevTags)=>[...prevTags, res.data.data])
          
    //     })
    //     .catch(err=>console.log(err))
    //   })

    // })

    
    props.onEditTask(props.selectedTask._id, updatedTaskName, updatedDescription)
    props.setShowModal(false)
    props.updateTaskTags(taskTags)
  }


  return (

    <div className="modal">
      <div
      //  className=" fixed items-center justify-center bg-[#FFFFFF] left-[10%] top-[10%] w-[1166px] h-[576px] rounded-[12px] border shadow-md"
      >
        <header className="flex p-5 justify-between w-[100%]">
          <div className="flex items-center justify-center">
            <div className="w-[16px] h-[16px] bg-[#D9D9D9] mx-2"></div>
            <div className=" justify-center text-[24px] font-medium items-center text-center ">
              <input
                type="text"
                placeholder="عنوان تسک را وارد کنید"
                value={props.selectedTask ? updatedTaskName : taskName}
                onChange={handleChangeTaskName}
                className="outline-none"
                autoFocus
              />
            </div>
          </div>
          <span class="material-symbols-rounded text-slate-500 hover:text-black cursor-pointer" onClick={props.onClick}>
            close
          </span>
        </header>

        <div className=" w-[90%] pt-5 mx-5 items-center ">
          <span>در</span>
          <span>
            <input
              type="text"
              placeholder="پروژه اول"
              className="w-[158px] h-[33px] border-2 rounded-sm mx-2"
            />
          </span>
          <span>برای</span>
          <span className="mx-2">
            <span class=" w-[33px] h-[33px] border-2 border-[#C1C1C1] text-center border-dashed rounded-full text-[#C1C1C1] material-symbols-rounded ">
              person_add
            </span>
          </span>
        </div>
        <div>
          <input
            type="text"
            placeholder="توضیحاتی درمورد این تسک بنویسید."
            className="w-[90%] h-[212px] pt-5 mx-5 border-2 mt-5"
            value={props.selectedTask ? updatedDescription : description}
            onChange={handleChangeTaskDescription}
          />
        </div>

        <div className="flex w-[90%] pt-5 mx-5 items-center ">
          <span>افزودن پیوست</span>
          <span className="flex justify-center items-center mx-2">
            <button className=" flex border rounded-[10px] p-1">
              <span class="material-symbols-rounded">link</span>
              آپلود فایل
            </button>
          </span>
        </div>

        <footer className="  flex w-[85%] justify-between items-center mt-10">
          <div className="flex gap-3 m-5">
            <div onClick={handleFlagClick} class="relative flex items-center justify-center w-[50px] h-[50px] border-2 border-[#C1C1C1] text-center border-dashed rounded-full text-[#C1C1C1]  ">
              <span style={{ color: flagColor }} class=" text-[35px] material-symbols-rounded cursor-pointer">flag</span>
              {isFlagOpen && (<Priority handleChoosePriority={handleChoosePriority} />)}
            </div>

            <span class=" flex items-center justify-center w-[50px] h-[50px] border-2 border-[#C1C1C1] text-center border-dashed rounded-full text-[#C1C1C1]  ">
              <span class=" text-[35px] material-symbols-rounded">
                calendar_month
              </span>
            </span>
            <div onClick={handleTagClick} class="relative flex flex-col items-center justify-center w-[50px] h-[50px] border-2 border-[#C1C1C1] text-center border-dashed rounded-full text-[#C1C1C1]  ">
              <span class=" text-[35px] material-symbols-rounded cursor-pointer">sell</span>
              {isTagOpen && (<CreateTag taskId={props.taskId} setIsTagOpen={setIsTagOpen} updateTags={updateTags} tags1={taskTags} />)}
            </div>
            {console.log(taskTags)}
            {taskTags?.map((tag) => (
            <div key={tag._id} className="flex items-center gap-2">
              
                <Tag tagName={tag.name} tagColor={tag.color}  />
              
            </div>
            ))}
            <span class=" flex items-center justify-center w-[50px] h-[50px] text-center  text-[#C1C1C1]  ">
              <span class=" text-[35px] material-symbols-rounded">visibility</span>
            </span>
          </div>
          <span>
            {/* <button className="flex absolute p-3 w-[135px] h-[32px] text-[12px] text-[#FFFFFF] items-center justify-center rounded-md bg-[#208D8E] text-center cursor-pointer">
              ساختن تسک
            </button> */}
            <Button children={"ساختن تسک"} onClick={props.selectedTask ? handleEditTask : onAddTask} className={"absolute p-3 w-[135px] h-[32px] text-[14px] text-[#FFFFFF] bg-[#208D8E]"} />
          </span>
        </footer>
      </div>
    </div>

  );
};

export default MakeTaskModal;
