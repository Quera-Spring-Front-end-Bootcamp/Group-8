import { useState,useEffect } from 'react';
import './Caption.css'

const Caption = (props) => {
    const [firstColor, setFirstColor] = useState("");
  const [lastColor, setLastColor] = useState("");
  const themeColor = localStorage.getItem("themeColor")
    ? localStorage.getItem("themeColor")
    : "#208D8E";
  useEffect(() => {
    switch (themeColor) {
      case "#208D8E":
        setFirstColor("#06846F");
        setLastColor("#54BEE8");
        break;

      case "#78C6B0":
        setFirstColor("#4c7e70");
        setLastColor("#95eed5");
        break;

      case "#76BC86":
        setFirstColor("#4d7c58");
        setLastColor("#8cdc9f");
        break;

      case "#80DC69":
        setFirstColor("#467f38");
        setLastColor("#84f06a");
        break;

      case "#E46161":
        setFirstColor("#994141");
        setLastColor("#ff6f6f");
        break;

      case "#E17E80":
        setFirstColor("#8f5253");
        setLastColor("#fd9395");
        break;

      case "#EC8182":
        setFirstColor("#915151");
        setLastColor("#ff9191");
        break;

      case "#F3C567":
        setFirstColor("#a68644");
        setLastColor("#ffcf6c");
        break;

      case "#E57A57":
        setFirstColor("#a4573d");
        setLastColor("#f3a389");
        break;

      case "#F1A25C":
        setFirstColor("#895c35");
        setLastColor("#ffac64");
        break;

      default:
        setFirstColor("#06846F");
        setLastColor("#54BEE8");
        break;
    }
  }, [themeColor]);
    return <h1 className={`caption-gradient ${props.className}`} onClick={props.onClick}style={{backgroundImage: `linear-gradient(to right, ${firstColor} 0%, ${lastColor} 120%)`,}}>{props.children}</h1>
};

export default Caption;