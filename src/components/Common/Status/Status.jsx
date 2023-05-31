const Status = (props) => {
  return (
    <div className={`w-max px-2 py-1 rounded-[4px] text-white`} style={{backgroundColor: props.color}}>
      {props.name}
    </div>
  );
};

export default Status;
