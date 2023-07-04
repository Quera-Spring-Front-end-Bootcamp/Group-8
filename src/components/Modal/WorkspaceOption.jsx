import { useState, useEffect } from "react";

const WorkspaceOption = ({ workspaceName, workspaceColor }) => {
    
//   let [engName, setEngName] = useState(english);
  const [persianName,setPersianName] = useState(workspaceName);

  const persianToInitialLetters = (words) => {
    const matches = words.match(/[\u0600-\u06FF\uFB8A\u067E\u0686\u06AF\u200C]+/g);
    if (matches) {
      return matches.map((match) => match.charAt(0)).join(' ');
    }
    return '';
  };
  

  useEffect(() => {
    // const updatedWorkspaceName = workspaceName ? workspaceName.match(/\b\w/g).join('') : '';
    // setEngName(updatedWorkspaceName);

    const updatedWorkspaceName = workspaceName ? persianToInitialLetters(workspaceName) : '';
    setPersianName(updatedWorkspaceName);

  }, []);



  return (
    <li 
    className=" menu-title  text-black text-base flex justify-center items-center gap-x-4 p-2"      
    style={workspaceColor ? { backgroundColor: workspaceColor } : { backgroundColor: "#7D828C" }}

    >
        {/* {english && (
    <span
      className="flex justify-center w-6 h-6 rounded-full text-[12px]"
      style={workspaceColor ? { backgroundColor: workspaceColor } : { backgroundColor: "#208D8E" }}
    >
      {engName}
    </span>
  )} */}
  
    
      {persianName}
    


      
    </li>
  //   <li className="menu-title hover:bg-[#E9F9FF] text-black text-base flex items-center gap-x-4 cursor-pointer p-2">
  //   <span className="flex justify-center w-6 h-6 rounded-full text-[12px] bg-orange-400">
  //     {english ? engName : ''}
  //   </span>
  //   {persian && <span>{persianName}</span>}
  // </li>

 

  );
};
export default WorkspaceOption;
