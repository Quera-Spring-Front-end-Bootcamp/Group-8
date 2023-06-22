import { useEffect, useState } from "react";
import "../../../styles/index.css";
// #208D8E  az #06846F ta #54BEE8
// #78C6B0  az #4c7e70 ta #95eed5
// #76BC86  az #4d7c58 ta #8cdc9f
// #80DC69  az #467f38 ta #84f06a
// #E46161  az #994141 ta #ff6f6f
// #E17E80  az #8f5253 ta #fd9395
// #EC8182  az #915151 ta #ff9191
// #F3C567  az #a68644 ta #ffcf6c
// #E57A57  az #a4573d ta #ff8860
// #F1A25C  az #895c35 ta #ffac64

export const AuthFooter = () => {
  const [firstColor, setFirstColor] = useState("");
  const [lastColor, setLastColor] = useState("");
  const [themeColor, setThemeColor] = useState(
    localStorage.getItem("themeColor")
      ? localStorage.getItem("themeColor")
      : "#208D8E"
  );
  useEffect(() => {
    switch (themeColor) {
      case "#208D8E": 
        setFirstColor("#06846F") ;
        setLastColor("#54BEE8");
        break;

      case "#78C6B0": 
        setFirstColor("#4c7e70") ;
        setLastColor("#95eed5");
        break;

      case "#76BC86": 
        setFirstColor("#4d7c58")  ;
        setLastColor("#8cdc9f");
        break;
      
      case "#80DC69": 
        setFirstColor("#467f38") ;
        setLastColor("#84f06a");
        break;
      
      case "#E46161": 
        setFirstColor("#994141") ;
        setLastColor("#ff6f6f");
        break;
      
      case "#E17E80": 
        setFirstColor("#8f5253")  ;
        setLastColor("#fd9395");
        break;
      
      case "#EC8182": 
        setFirstColor("#915151") ;
        setLastColor("#ff9191");
        break;
      
      case "#F3C567": 
        setFirstColor("#a68644") ;
        setLastColor("#ffcf6c");
        break;
      
      case "#E57A57": 
        setFirstColor("#a4573d") ;
        setLastColor("#f3a389");
        break;
      
      case "#F1A25C": 
        setFirstColor("#895c35")  ;
        setLastColor("#ffac64");
        break;
      
      default:
        setFirstColor("#06846F") ;
        setLastColor("#54BEE8");
        break;
    }
  }, [themeColor]);
  console.log(firstColor);
  console.log(lastColor);
  return (
    <div
      className={`absolute bottom-0 left-0 h-1/2 -z-10 w-full`}
      style={{
        backgroundImage: `linear-gradient(to left, ${firstColor} 0.35%, ${lastColor} 103.4%)`,
        clipPath:
          "polygon(100% 0%, 100% 50%, 100% 100%, 0 100%, 0 60%, 100% 0%)",
      }}
    ></div>
  );
};
