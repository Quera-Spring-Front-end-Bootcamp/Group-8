import ReactDOM from "react-dom";

import Wrapper from "../../common/Wrapper/Wrapper";
import DropdownItem from "./DropdownItem";

import classes from "./Backdrop.module.css";

// const Backdrop = () => {
//   return <div className={classes.backdrop} />;
// };

const Dropdown = (props) => {
  return (
    <Wrapper>
      <div className={classes.backdrop} onClick={props.onClick} />
      <div className="flex flex-col items-start bg-white w-max rounded-[8px] py-2 shadow-[0_4px_16px_0px_rgba(0,0,0,0.15)] absolute z-[100]">
        <DropdownItem title="فوری" icon="flag" iconColor="#FB0606" />
        <DropdownItem title="بالا" icon="flag" iconColor="#FFE605" />
        <DropdownItem title="متوسط" icon="flag" iconColor="#09DBCE" />
        <DropdownItem title="پایین" icon="flag" iconColor="#B2ACAC" />
        <DropdownItem title="حذف اولویت" icon="close" iconColor="#E45454" />
      </div>
    </Wrapper>
  );
};

// const DropdownModal = (props) => {
//   return (
//     <Wrapper>
//       {ReactDOM.createPortal(
//         <Backdrop onClick={props.onClick} />,
//         document.getElementById("backdrop-layer")
//       )}
//       {ReactDOM.createPortal(
//         <Dropdown />,
//         document.getElementById("overlay-modal")
//       )}
//     </Wrapper>
//   );
// };

export default Dropdown;
