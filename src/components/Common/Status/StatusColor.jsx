const StatusColor = (props) => {
    return <div className={`h-[12px] w-[12px] rounded-[3px]`} style={{backgroundColor: props.color}} />
}

export default StatusColor;