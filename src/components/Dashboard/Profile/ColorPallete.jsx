const ColorPallete = ({ color,onClick,select}) => {

  return (
    <div
      className="w-[20px] h-[20px] rounded-full flex items-center justify-center cursor-pointer"
      style={{
        backgroundColor: color,
        width: select ? "40px" : "20px",
        height: select ? "40px" : "20px",
      }}
      onClick={onClick}

    >
        {(select) && <span className="material-symbols-rounded text-[25px] text-[#FFFFFF] ">
check
</span>}
    </div>
  );
};
export default ColorPallete;
