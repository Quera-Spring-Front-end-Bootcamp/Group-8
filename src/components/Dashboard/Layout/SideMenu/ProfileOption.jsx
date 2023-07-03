import { useState, useEffect } from "react";
import { baseUrl } from "../../../../App";
import axios from "axios";

const ProfileOption = () => {
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
      console.log(response);
      const firstName=response.data.data.firstname;
      const lastname=response.data.data.lastname;
      setCombineName(`${firstName[0]+lastname[0]}`);
      setName(`${firstName} ${lastname}`)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li className=" menu-title hover:bg-[#E9F9FF]  text-black text-base flex items-center gap-x-4 cursor-pointer p-2">
      <span class="flex justify-center w-7 h-7 rounded-full text-[13px] bg-orange-400 pt-1">
        {combineName}
      </span>
{name}
    </li>
  );
};
export default ProfileOption;
