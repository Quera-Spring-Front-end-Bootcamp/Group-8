const FilterDropDown = (props) => {

  // const colors = [
  //   "#FF5733",
  //   "#DAF7A6",
  //   "#900C3F",
  //   "#581845",
  // ];

    return (
      <div>
        <select className={props.className} onChange={props.onChange}>
          {props.Options.map((option) => (
            <option 
            className={`p-1 bg-[${option.color}]`}                    
            key={option.value} 
            value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default FilterDropDown;