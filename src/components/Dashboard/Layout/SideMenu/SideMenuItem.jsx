// const SideMenuItem = (props) => {
//     return <li className={props.className} onClick={props.onClick}>
//         <span className={` w-4 h-4  rounded-sm ${props.itemClassName}`}></span> {props.item}
//         {props.children}
//     </li>
// };

// export default SideMenuItem;

const SideMenuItem = (props) => {
    return (
        <ul>
            <li className={props.className} onClick={props.onClick}>
                <span
                    className=' w-4 h-4 rounded-sm pr-2'
                    style={props.workspaceColor ? { backgroundColor: props.workspaceColor } : { backgroundColor: "#7D828C" }}
                ></span>
                {props.item}
                {props.children}
            </li>
            <div>
                {/* {props.projects && props.projects.map((project) => (
                <div onClick={()=>props.handleClickOnProject(project._id)} className="flex flex-col" key={project.id}>{project.name}</div>
            ))} */}
            </div>
            
        </ul>
    )


};

export default SideMenuItem;