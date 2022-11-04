import './Banner.css'
import Button from './Button'

const Banner = (props) => {
    return (
        <div 
        className='banner' 
        style={{height:props.height,
        backgroundImage:`url(${props.banner.background})`,
        color: props.textColor}}>
            <div className='banner-description'>
                {props.banner.title ? <h1>{props.banner.title}</h1> : ""}
                {props.banner.description ? <p>{props.banner.description}</p> : ""}
                {props.banner.cta ? <Button text={props.banner.cta} 
                type={props.button == 'black' ? 'button1 black' : 'button1'} /> : ""}
            </div>
            {props.banner.video ?
            <div className='banner-video'>
                <video src={props.banner.video} preload="auto" muted autoPlay={true} loop={true} playsInLine="" webkit-playsinline="" x5-playsinline=""></video>
            </div>
            :
            ''}
        </div>
    )
}

export default Banner