// const ModalPickColor = (props) => {
//   const colors = [
//     "#F1A25C",
//     "#E57A57",
//     "#B9995E",
//     "#F3C567",
//     "#EC8182",
//     "#E17E80",
//     "#E46161",
//     "#80DC69",
//     "#76BC86",
//     "#78C6B0",
//     "#84C6A1",
//     "#7FA1D1",
//     "#46494D",
//     "#5F6C7C",
//     "#486774",
//     "#C074D1",
//     "#9286EA",
//     "#6CB2F7",
//     "#6DAFCE",
//     "#3C45E7",
//     "#74AADD",
//     "#6897C2",
//     "#E28A60",
//   ];
//   // const colors = [
//   //   "#FF5733",
//   //   "#DAF7A6",
//   //   "#FFC300",
//   //   "#C70039",
//   //   "#900C3F",
//   //   "#581845",
//   //   "#FF5733",
//   //   "#DAF7A6",
//   //   "#FFC300",
//   //   "#C70039",
//   //   "#900C3F",
//   //   "#581845",
//   // ];

//   return (
//     <div>
//       <div className=" fixed left-[30%] top-[30%] w-[501px] h-[307px] rounded-[12px] border shadow-md">
//         <header className="flex p-5 justify-between w-[100%]">
//           <span class="material-symbols-rounded text-slate-500 hover:text-black cursor-pointer" onClick={props.onClick}>close</span>
//           <h2 className=" justify-center items-center text-center ">
//             ساختن ورک اسپیس جدید
//           </h2>
//           <span class="material-symbols-rounded text-slate-500 hover:text-black cursor-pointer">arrow_back</span>
//         </header>

//         <div className="flex pt-5 justify-around ">
//           <span className=" flex w-[70px] h-[70px] bg-[#7D828C] rounded-[8px] justify-center items-center">
//             قـ طـ
//           </span>
//           <span className="flex py-5">
//             <ul className="grid grid-cols-12 ">
//               {/* {colors.forEach((color) => {
//                 <li
//                   style={{ backgroundColor: color }}
//                   className={` w-[15px] p-1 h-[15px]`}
//                 ></li>;
//               })} */}
//               <li className="p-1 cursor-pointer">
//                 <span class="material-symbols-rounded">block</span>
//               </li>
//               {colors.map((colorbg) => (
//                 <li className="p-1 cursor-pointer">
//                   <span
//                     style={{
//                       backgroundColor: colorbg,
//                       color: colorbg,
//                       width: "15px",
//                       height: "15px",
//                       "border-radius": "2px",
//                     }}
//                   >
//                     bbb
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </span>
//         </div>

//         <footer className="flex w-[100%] items-center justify-center mt-7">
//           <button className="flex absolute p-3 bottom-4 w-[90%] h-[40px] text-[18px] text-[#FFFFFF] items-center justify-center rounded-md bg-[#208D8E] text-center cursor-pointer" onClick={props.buttonOnClick}>
//             ادامه
//           </button>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default ModalPickColor;
import WorkspaceOption from "./WorkspaceOption";
const ModalPickColor = (props) => {
  const themeColor = localStorage.getItem("themeColor")
    ? localStorage.getItem("themeColor")
    : "#208D8E";
  const colors = [
    "#F1A25C",
    "#E57A57",
    "#B9995E",
    "#F3C567",
    "#EC8182",
    "#E17E80",
    "#E46161",
    "#80DC69",
    "#76BC86",
    "#78C6B0",
    "#84C6A1",
    "#7FA1D1",
    "#46494D",
    "#5F6C7C",
    "#486774",
    "#C074D1",
    "#9286EA",
    "#6CB2F7",
    "#6DAFCE",
    "#3C45E7",
    "#74AADD",
    "#6897C2",
    "#E28A60",
  ];
  // const colors = [
  //   "#FF5733",
  //   "#DAF7A6",
  //   "#FFC300",
  //   "#C70039",
  //   "#900C3F",
  //   "#581845",
  //   "#FF5733",
  //   "#DAF7A6",
  //   "#FFC300",
  //   "#C70039",
  //   "#900C3F",
  //   "#581845",
  // ];
const handlePickColor= ()=>{
  props.onClick()
  props.buttonOnClick()
}
  return (
    <div className="modal w-[501px] h-[307px]">
      <div
      //  className=" fixed left-[30%] top-[30%] w-[501px] h-[307px] rounded-[12px] border shadow-md"
       >
        <header className="flex p-5 justify-between w-[100%]">
          <span class="material-symbols-rounded text-slate-500 hover:text-black cursor-pointer" onClick={props.onClick}>close</span>
          <h2 className=" justify-center items-center text-center ">
            انتخاب رنگ ورک اسپیس
          </h2>
          <span class="material-symbols-rounded text-slate-500 hover:text-black cursor-pointer">arrow_back</span>
        </header>

        <div 
        className="flex pt-5 justify-around "
        >
          <span
           className=" flex w-[70px] h-[70px] bg-[#7D828C] rounded-[8px] justify-center items-center"
          // className={`flex w-[70px] h-[70px] rounded-[8px] justify-center items-center`}
          style={{backgroundColor:props.color}}

           >
            <WorkspaceOption workspaceColor={props.color} workspaceName={props.workspaceName} />
          </span>
          <span className="flex py-5">
            <ul className="grid grid-cols-12 ">
              {/* {colors.forEach((color) => {
                <li
                  style={{ backgroundColor: color }}
                  className={` w-[15px] p-1 h-[15px]`}
                ></li>;
              })} */}
              <li className="p-1 cursor-pointer">
                <span onClick={()=>props.setColor("#208D8E")} class="material-symbols-rounded">block</span>
              </li>
              {colors.map((colorbg) => (
                <li className="p-1 cursor-pointer">
                  <span
                    style={{
                      backgroundColor: colorbg,
                      color: colorbg,
                      width: "15px",
                      height: "15px",
                      borderRadius: "2px",
                    }}
                    onClick={()=>props.setColor(colorbg)}
                  >
                    bbb
                  </span>
                </li>
              ))}
            </ul>
          </span>
        </div>

        <footer className="flex w-[100%] items-center justify-center mt-7">
          <button className="flex absolute p-3 bottom-4 w-[90%] h-[40px] text-[18px] text-[#FFFFFF] items-center justify-center rounded-md bg-[#208D8E] text-center cursor-pointer" 
          onClick={handlePickColor}
          style={{backgroundColor:themeColor}}>
            ادامه
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ModalPickColor;
