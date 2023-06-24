import { Link } from "react-router-dom";
import Caption from "../../Dashboard/Layout/SideMenu/SideMenuCaption/Caption";
import "../../../styles/index.css";

import classes from "./AuthHeader.module.css";

export const AuthHeader = (props) => {
  const themeColor = localStorage.getItem("themeColor")
    ? localStorage.getItem("themeColor")
    : "#208D8E";
  return (
    <div className="flex items-center justify-between mx-12 my-8">
      <Caption className="font-extrabold bg-clip-text text-[transparent] text-2xl">
        <a href="#">کوئرا تسک منیجر</a>
      </Caption>
      <div className={classes.action_bar}>
        <div>{props.text}</div>
        <div>
          <Link to={`/${props.link}`}>
            {props.buttonText && (
              <button
                className=" rounded-md py-2 px-7 text-white mr-2.5"
                style={{ backgroundColor: themeColor }}
              >
                {props.buttonText}
              </button>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};
