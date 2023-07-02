import { useState, useContext } from "react";
import Tag from "../ColTask/Tag";
import MakeTaskModal from "../../../../Modal/MakeTaskModal"
import AXIOS from "../axios.configs";
import { useEffect } from "react";
import TagStructure from "../../../../Modal/NewTaskModalComponents/TagStructure";

const ColTask = ({
  taskId,
  boardId,
  imgSrc,
  projectName,
  userName,
  taskTitle,
  dayCount,
  date,
  tags,
  onIncrement,
  handleTaskEdit,
  selectedTask,
  onEditTask,
  update,
}) => {
  const [show, setShow] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked1, setIsClicked1] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [tags1, setTags1] = useState([]);
const [newTags,setNewTags] = useState([])
  useEffect(() => {
    console.log(taskId)
    AXIOS.get(`/board/${boardId}/tasks`)
      .then(res => {
        console.log(res.data.data)
        const boards=res.data.data
        const desiredBoard=boards.find((board)=>board._id === taskId)
        console.log(desiredBoard.taskTags)
        setTags1(desiredBoard.taskTags)
      })
    console.log('taghayee ke az MakeTaskModal mian')
    console.log(tags)
    setNewTags((tags)=>tags.filter((tag)=>tags.includes(tag._id)))
    setTags1(tags)
  }, [])

  // useEffect(()=>{
  //   AXIOS.get(`/tags/task/${taskId}`)
  //   .then(res=>{
  //     console.log(res.data.data)
  //   const existedTags= res.data.data.tags
  //   console.log(existedTags)
  //   // const newTags =tags1.map((tag)=> existedTags.includes(!tag._id))
  //   // (tag, index) => ({ ...tag, name: tag.tagName, index }));

  //   // console.log(newTags)
  //   // console.log('man ino mikham')
  //   // console.log(newTags)
  //   // {console.log(newTags)}
  //   newTags?.map((tag)=>{
  //     AXIOS.post('/tags',{
  //       name: tag.name,
  //       taskId: tag.taskId,
  //       color: tag.color
  //     }).then(res=>{
  //       // console.log(res)
  //       setTags1((prevTags)=>[...prevTags, res.data.data])
  //     })
  //     .catch(err=>console.log(err))
  //   })
  //   })
  //   .catch(err=>console.log(err))
  //   // console.log('tag hayii ke az createTag mian')
  //   // console.log(tags1)
  
  //  },[tags1])
  

  const updateTaskTags= (newTags)=>{
    setTags1(newTags)
    update(newTags)
  }

  const taskDone = () => {
    setIsClicked(true);
    setIsClicked1(false);

  }

  const handleClickTask = () => {
    setShowModal(true)
    handleTaskEdit(taskId)
  }



  return (
    <>
      <div
        className="flex flex-col gap-[18px] w-[250px] mt-[12px] p-[10px] bg-[#FFFFFF] border border-solid border-[#EFF0F0] rounded-[4px] cursor-pointer "
        style={{
          boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.14)",
        }}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={handleClickTask}
      >
        <img
          className="w-[230px] h-[134px] rounded-[3px] order-0 self-stretch grow-0"
          src={(imgSrc = "./")}
          style={{ display: imgSrc ? "block" : "none" }}
          alt="task"
        />
        <div className="flex flex-row items-center justify-between">
          <span className="font-medium text-[10px] leading-[15px] text-right text-[#534D60]  self-start">

            {(projectName = "پروژه اول")}
          </span>
          <span
            className="w-[23px] h-[23px] bg-[#EAF562] flex justify-center items-center rounded-full order-0 grow-0 text-[#000000] text-[8px] leading-[12px] teaxt-right transition duration-500 ease-in-out"
            style={{ opacity: show === true ? "100%" : "0%" }}
          >
            {(userName = "NM")}
          </span>
        </div>
        <h4
          // onClick={handleEditTask} 
          className="flex flex-row items-baseLine gap-[10px]">
          <div className="font-medium text-[12px] leading-[18px] text text-right	text-[#0E0E0E] w-full cursor-pointer ">{taskTitle} </div>

          <span onClick={taskDone} className="material-symbols-rounded text-[#BDC0C6] w-[12px] h-[12px]" style={{ fontSize: "15px" }}>Done</span>
        </h4>
        <div className="flex flex-row items-baseLine justify-start gap-[27px]">
          <div className="flex flex-row items-center gap-[1px]">
            <span className="material-symbols-rounded w-[16px] h-[16px] text-[#FB0606] pb-[32px]">
              flag
            </span>
            <span className="font-medium text-[10px] leading-[15px] text-right text-[#343434] pb-[5px]">
              {(date = "5 مهر")} - {(dayCount = "فردا")}
            </span>
          </div>

          <div className="flex flex-row items-center gap-[5px]">
            <span className="material-symbols-rounded font-[200] text-[#BDC0C6] w-[12px] h-[12px] pb-[32px]">
              check_box
            </span>
            <span className="font-medium text-[10px] leading-[15px] text-right text-[#BDC0C6] pb-[5px]">
              2/12
            </span>
          </div>
        </div>
        {tags1?.map((tag) => ( 
          <div  key={tag._id} className="flex gap-1">
          <TagStructure 
          key={tag._id}
          id={tag._id}
          tagName={tag.name}
          color={tag.color}
          // handleDelete={handleDelete}
          // handleColorChange={handleColorChange}
          // showSettings={true}
          // handleCompleteDelete={handleCompleteDelete}
          // handleEdit={handleEdit}
          />

        </div>
        ))}
          <div
            className="flex flex-row items-center gap-[5px] transition duration-1100"
            style={{
              marginBottom: show === true ? "0" : "-30px",
              transitionProperty: "margin",
            }}
          >
          </div>

       

        <span
          className="border-b border-solid border-[#EFF0F0] transition duration-900"
          style={{
            opacity: show === true ? "100%" : "0",
            transitionProperty: "opacity",
          }}
        ></span>
        <div
          className="flex justify-between duration-700"
          style={{
            height: show === true ? "30px" : "0",
          }}
        >
          <span
            className="material-symbols-rounded text-[#323232] duration-100 "
            style={{ opacity: show === true ? "100%" : "0" }}
          >
            task_alt
          </span>
          <span
            className="material-symbols-rounded text-[#323232] duration-100 "
            style={{ opacity: show === true ? "100%" : "0" }}
          >
            more_horiz
          </span>
        </div>

      </div>
      {showModal && <MakeTaskModal
        onClick={() => setShowModal(false)}
        onIncrement={onIncrement}
        taskId={taskId}
        selectedTask={selectedTask}
        onEditTask={onEditTask}
        setShowModal={setShowModal}
        tags={tags1}
        boardId={boardId}
        updateTaskTags={updateTaskTags}
      />}
    </>


  );
};

export default ColTask;