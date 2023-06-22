import { useState, useEffect } from "react";
import ColorPallete from "./ColorPallete";

const Settings = () => {
  const [themeColor, setThemeColor] = useState(
    localStorage.getItem("themeColor")
      ? localStorage.getItem("themeColor")
      : "#208D8E"
  );
  const [nightMode, setNightMode] = useState(false);
  const [selectedColor, setSelectedColor] = useState(
    themeColor ? themeColor : "#208D8E"
  );

  const colors = [
    "#208D8E",
    "#78C6B0",
    "#76BC86",
    "#80DC69",
    "#E46161",
    "#E17E80",
    "#EC8182",
    "#F3C567",
    "#E57A57",
    "#F1A25C",
  ];

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };
  useEffect(() => {
    setThemeColor(localStorage.getItem("themeColor"));
  }, [themeColor]);
  const handleSubmit = (e) => {
    localStorage.setItem("themeColor", selectedColor);
    console.log(selectedColor);
    console.log(nightMode);
  };

  return (
    <div className="w-[1440px] bg-[#FAFBFC]">
      <div className="flex flex-col mt-[170px] mr-[58px] gap-[35px] w-[354px]">
        <h2 className="font-bold text-[31px] leading-[49px] text-right text-[#1E1E1E]">
          تنظیمات
        </h2>
        <form className="flex flex-col gap-[10px]" onSubmit={handleSubmit}>
          <span className="font-normal text-[14px] leading-[21px] text-right text-[#000000]">
            انتخاب تم
          </span>
          <div className="flex flex-row gap-[13px] items-center">
            {colors.map((color) => (
              <ColorPallete
                key={color}
                color={color}
                onClick={() => handleColorClick(color)}
                select={color === selectedColor}
              />
            ))}
          </div>
          <div className="flex flex-row items-center gap-[10px] mt-[48px]">
            <div
              className="w-[50px] h-[24px] border border-[#000000] rounded-[20px] relative cursor-pointer"
              onClick={() => setNightMode(!nightMode)}
            >
              <span
                className="w-[21px] h-[21px] rounded-[20px] bottom-[0.5px] absolute transition duration-500"
                style={{
                  backgroundColor: nightMode ? themeColor : "#8A8989",
                  right: nightMode ? "1px" : "26px",
                  transitionProperty: "right",
                }}
              ></span>
            </div>
            <span className="font-normal text-[14px] leading-[21px] text-[#000000]">
              حالت شب
            </span>
          </div>
          <button
            type="submit"
            className={`flex items-center justify-center w-[354px] h-[38px] pr-[12px] pl-[12px] pb-[8px] pt-[8px] bg-[#208D8E] rounded-[6px] mt-[25px] font-bold text-[14px] leading-[22px] text-right text-[#FFFFFF] `}
            style={{ backgroundColor: themeColor }}
          >
            ثبت تغییرات
          </button>
        </form>
      </div>
    </div>
  );
};
export default Settings;
