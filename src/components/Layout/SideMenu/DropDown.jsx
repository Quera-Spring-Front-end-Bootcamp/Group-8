const DropDown = (props) => {
  return (
    <div>
      <select className={props.className} onChange={props.onChange}>
        <option className="flex justify-between" value="">
          {props.label} <span class="material-symbols-outlined">search</span>
        </option>
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
