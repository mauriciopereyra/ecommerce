import './Button.css'

const Button = (props) => {
    return (
        <button className='button1'>{props.text} <span className='right-arrow'>-></span></button>
    )
}

export default Button