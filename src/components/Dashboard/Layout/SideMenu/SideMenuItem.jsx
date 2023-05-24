const SideMenuItem = (props) => {
    return <li className={props.className} onClick={props.onClick}>
        <span className={` w-4 h-4  rounded-sm ${props.itemClassName}`}></span> {props.item}
        {props.children}
    </li>
};

export default SideMenuItem;