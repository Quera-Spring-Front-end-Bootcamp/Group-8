const NewSpaceButtom = (props) => {
    return <div className={`cursor-pointer ${props.className}`} onClick={props.onClick}>{props.children}</div>
};

export default NewSpaceButtom;