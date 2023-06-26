import { useState, useEffect } from "react";

const ProfileOption = ({ persian, english }) => {
    
  let [engName, setEngName] = useState(english);

  useEffect(() => {
    setEngName(engName.match(/\b(\w)/g).join(''));
  }, []);

  console.log(engName);

  return (
    <li className=" menu-title hover:bg-[#E9F9FF]  text-black text-base flex items-center gap-x-4 cursor-pointer p-2">
      <span class="flex justify-center w-7 h-7 rounded-full text-[12px] bg-orange-400 pt-1">
        {/* {firstLetters} */}
        {engName}
      </span>
      {persian}
    </li>
  );
};
export default ProfileOption;
