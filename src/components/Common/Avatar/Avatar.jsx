const Avatar = (props) => {
  return (
    <div
      className={`w-[32px] h-[32px] relative pt-1 -ml-3 align-middle border-2 border-white rounded-3xl bg-gray-300 align-center text-white text-center cursor-pointer hover:transition hover:ease-in-out hover:transform hover:scale-[110%]`}
    >
      {props.name}
    </div>
  );
};

export default Avatar;
