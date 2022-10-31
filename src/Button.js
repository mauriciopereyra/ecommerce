import './Button.css'

const Button = (props) => {
    return (
        <button className={props.type}>
            <span className='button-text'>{props.text}</span>
            <span className='right-arrow'>-></span>
            </button>
    )
}

export default Button