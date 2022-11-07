import './Button.css'
import { down, heart, up } from './data/icons'

const Button = (props) => {
    return (
        <button className={props.type}>
            {props.type.includes('heart') ? <span className='button-heart'>{heart}</span> : ""}
            {props.text ? <span className='button-text'>{props.text}</span> : ""}
            {props.type.includes('no-right-arrow') ? "" : <span className='right-arrow'>-></span>}
            {props.type.includes('up-arrow') ? <span>{up}</span> : ""}
            {props.type.includes('down-arrow') ? <span>{down}</span> : ""}
        </button>
    )
}

export default Button