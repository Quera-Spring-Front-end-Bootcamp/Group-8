


const SideMenuInput = (props) => {
  return (
    <>
   
    <input
      type={props.Type}
      placeholder={` ${props.PlaceHolder}`}
      className={`input bg-[#F6F7F9] h-[40px] w-full max-w-xs rounded ${props.className}`} />
      </>
  );
};

export default SideMenuInput;
