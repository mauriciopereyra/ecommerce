import './Button.css'
import { heart } from './data/icons'

const Button = (props) => {
    return (
        <button className={props.type}>
            {props.type.includes('heart') ? 
             <span className='button-heart'>{heart}</span> : 
             <>
             <span className='button-text'>{props.text}</span>
             <span className='right-arrow'>-></span>
             </>
             }
        </button>
    )
}

export default Button