const ShareDropDown = (props) => {
    return (
      <div>
        <select className={props.className} onChange={props.onChange}>
          {props.Options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default ShareDropDown;