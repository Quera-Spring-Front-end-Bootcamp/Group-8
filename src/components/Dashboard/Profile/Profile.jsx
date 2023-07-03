import { useState} from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import AccountInfoForm from "./AccoountInfoForm";
import Settings from "./Settings";
import Caption from "../Layout/SideMenu/SideMenuCaption/Caption";
import { Link } from "react-router-dom";

const Profile = () => {
  const [state, setState] = useState({
    personalInfo: true,
    accountInfo: false,
    settings: false,
  });
 
  const [profilePage, setProfilePage] = useState("personalInfo");
  const themeColor = localStorage.getItem("themeColor")
    ? localStorage.getItem("themeColor")
    : "#208D8E";
  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-[340px] h-[100vh] bg-[#FAFBFC] pr-[50px] pt-[40px] border-l-[0.5px] border-[#AAAAAA] pl-[24px]">
        <Caption className="font-extrabold  bg-clip-text text-[transparent] text-[32px] leading-[51px] text-right">
          <a href="/listView">کوئرا تسک منیجر</a>
        </Caption>
        <Link to="/listView">
          <button
            className="flex flex-row items-center gap-[8px] w-[110px] h-[39px] pt-[4px]  pr-[7.5px] text-[20px] text-[#FFFFFF] rounded-[8px] mt-[79px]"
            style={{ backgroundColor: themeColor }}
          >
            <span className="material-symbols-rounded w-[24px] h-[24px]">
              arrow_forward
            </span>
            بازگشت
          </button>
        </Link>
        <div className="flex flex-col items-start gap-[36px] mt-[40px] text-[20px]">
          <div
            className="flex flex-row items-baseLine gap-[11px] w-[266px] h-[39px] rounded-[4px] pr-[7.5px] pt-[5px] cursor-pointer font-medium"
            onClick={() => {
              setState({ personalInfo: true });
              setProfilePage("personalInfo");
            }}
            style={{
              backgroundColor: state.personalInfo ? "#C5FFFF" : "transparent",
              fontWeight: state.personalInfo ? "600" : "500",
            }}
          >
            <span className="material-symbols-rounded text-[#323232] w-[24px] h-[24px]">
              person
            </span>
            اطلاعات فردی
          </div>

          <div
            className="flex flex-row items-baseLine gap-[11px] w-[266px] h-[39px]  pr-[7.5px] rounded-[4px] pt-[5px] cursor-pointer font-medium transition duration-5000"
            onClick={() => {
              setState({ accountInfo: true });
              setProfilePage("accountInfo");
            }}
            style={{
              backgroundColor: state.accountInfo ? "#C5FFFF" : "transparent",
              fontWeight: state.accountInfo ? "600" : "500",
              transition: "background-color",
            }}
          >
            <span className="material-symbols-rounded text-[#323232] w-[24px] h-[24px]">
              manage_accounts
            </span>
            اطلاعات حساب
          </div>

          <div
            className="flex flex-row items-baseLine gap-[11px] w-[266px] h-[39px] pr-[7.5px] rounded-[4px] pt-[5px] cursor-pointer font-medium"
            onClick={() => {
              setState({ settings: true });
              setProfilePage("settings");
            }}
            style={{
              backgroundColor: state.settings ? "#C5FFFF" : "transparent",
              fontWeight: state.settings ? "600" : "500",
            }}
          >
            <span className="material-symbols-rounded text-[#323232] w-[24px] h-[24px]">
              settings
            </span>
            تنظیمات
          </div>
        </div>
      </div>
      {profilePage === "personalInfo" && <PersonalInfoForm />}
      {profilePage === "accountInfo" && <AccountInfoForm />}
      {profilePage === "settings" && <Settings />}
    </div>
  );
};

export default Profile;
