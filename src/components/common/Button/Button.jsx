
const Button = (props) => {
  return (
    <div
      className={`cursor-pointer w-max flex items-center justify-center gap-[8px] rounded-[8px] ${props.className}`}
      onClick={props.onClick}
    >
      {props.icon && (
        <span className="material-symbols-rounded">
          {props.icon}
        </span>
      )}
      {props.children}
    </div>
  );
};

export default Button;
>>>>>>> 02ffb7a45c32f4c1531fa73c8d98d1cdc57d0760
