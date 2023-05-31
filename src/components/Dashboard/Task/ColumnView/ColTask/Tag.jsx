const Tag = ({ tagName, tagColor }) => {
  return <div className=' flex items-center justify-center w-[29px] h-[19px] text-[10px] rounded-tl-[10px] rounded-bl-[10px]' style={{backgroundColor:tagColor}}>{tagName}</div>;
};

export default Tag;
