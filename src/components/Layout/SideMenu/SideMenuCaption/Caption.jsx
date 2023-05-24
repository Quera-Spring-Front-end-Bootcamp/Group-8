import './Caption.css'

const Caption = (props) => {
    return <h1 className={`caption-gradient ${props.className}`} onClick={props.onClick}>{props.children}</h1>
};

export default Caption;