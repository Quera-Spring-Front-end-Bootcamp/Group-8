

const DropDown = (props) => {
  return (
    <div>
      <select className={props.className} onChange={props.onChange}>
        <option value="">{props.label}</option>
        {props.Options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
