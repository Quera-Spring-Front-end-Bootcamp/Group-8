import Button from "../Common/Button/Button";
import AXIOS from "../Dashboard/Task/ColumnView/axios.configs";

const ModalProjectMenu = (props) => {
  const themeColor = localStorage.getItem("themeColor")
    ? localStorage.getItem("themeColor")
    : "#208D8E";
  console.log(props.id);
  const handleDeleteProject = () => {
    AXIOS.delete(`/projects/${props.id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    props.onClick();
    props.getAllWorkspaces();
  };
  return (
      <div className="modal w-[184px] h-[215px] text-[14px] border rounded-[8px] absolute right-[220px]">
        <ul>
          <li className=" py-1 flex items-center ">
            <span class=" px-1 material-symbols-rounded">add</span>
            ساختن تسک جدید
          </li>
          <li className=" py-1 flex items-center">
            <span class=" px-1 material-symbols-rounded">edit_square</span>
            ویرایش نام پروژه
          </li>
          <li className=" py-1 flex items-center">
            <span class=" px-1 material-symbols-rounded">palette</span>
            ویرایش رنگ
          </li>
          <li className=" py-1 flex items-center">
            <span class=" px-1 material-symbols-rounded">link</span>
            کپی لینک
          </li>
          <li
            onClick={handleDeleteProject}
            className=" py-1 flex items-center text-[#9F0000]"
          >
            <span class=" px-1 material-symbols-rounded">delete</span>
            حذف
          </li>
          <li className=" py-1 flex items-center">
            <Button className="flex w-[125px] h-[40px] text-[#FFFFFF] items-center justify-center rounded-md bg-[#208D8E] text-center p-1 mr-[10px]" color={themeColor}>
              <span class=" material-symbols-rounded">share</span>
              اشتراک گذاری
            </Button>
          </li>
        </ul>
      </div>
  );
};

export default ModalProjectMenu;
