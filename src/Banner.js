import './Banner.css'
import Button from './Button'

const Banner = (props) => {
    return (
        <div 
        className='banner' 
        style={{height:props.height,
        backgroundImage:`url(${props.background})`,
        color: props.textColor}}>
            <div className='banner-description'>
                {props.title ? <h1>{props.title}</h1> : ""}
                {props.description ? <p>{props.description}</p> : ""}
                {props.button ? <Button text={props.button} /> : ""}
                
            </div>
        </div>
    )
}

export default Banner