import { useState, useEffect } from "react";
import { baseUrl } from "../../../../App";
import axios from "axios";

const ProfileOption = ({workspaceColor, color}) => {
  const userId=localStorage.getItem("userId");
  const [combineName,setCombineName]=useState("");
  const [name,setName]=useState("");
  useEffect(()=>{
getUser(userId);
  },[])
  const getUser = async (userId) => {
    try {
      const response = await axios.get(
        `${baseUrl}/users/${userId}`
      );
      const firstName=response.data.data.firstname;
      const lastname=response.data.data.lastname;
      setCombineName(`${firstName[0].toUpperCase()+lastname[0].toUpperCase()}`);
      setName(`${firstName} ${lastname}`)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li className=" menu-title hover:bg-[#E9F9FF]  text-black text-base flex items-center gap-x-4 cursor-pointer p-2">
      <span style={workspaceColor ? { backgroundColor: workspaceColor } : { backgroundColor: "#208D8E"}} class="flex justify-center items-center w-7 h-7 rounded-full text-[13px] pt-1">
        {combineName}
      </span>
{name}
    </li>
  );
};
export default ProfileOption;
