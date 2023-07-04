import Button from "../Common/Button/Button";

const ModalTaskMenu = (props) => {
  return (
    <div className=" fixed w-[186px] h-[180px] text-[14px] border rounded-[8px]">
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
          <span class=" px-1 material-symbols-rounded">link</span>
          کپی لینک
        </li>
        <li className=" py-1 flex items-center text-[#9F0000]">
          <span class=" px-1 material-symbols-rounded">delete</span>
          حذف
        </li>
        <li className=" py-1 flex items-center">
          <Button className="flex w-[130px] h-[40px] text-[#FFFFFF] items-center justify-center rounded-md bg-[#208D8E] text-center p-1">
            <span class=" material-symbols-rounded">share</span>
            اشتراک گذاری
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default ModalTaskMenu;
