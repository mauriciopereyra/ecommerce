import './Button.css'
import { down, heart, heartFill, up } from './data/icons'

const Button = ({type,text, ...buttonProps}) => {
    return (
        <button className={type} {...buttonProps}>
            {type.includes('heart') ? <span className='button-heart'>
                {type.includes('heart-fill') ? heartFill : heart}
                </span> : ""}
            {text ? <span className='button-text'>{text}</span> : ""}
            {type.includes('no-right-arrow') ? "" : <span className='right-arrow'>-></span>}
            {type.includes('up-arrow') ? <span>{up}</span> : ""}
            {type.includes('down-arrow') ? <span>{down}</span> : ""}
        </button>
    )
}

export default Button