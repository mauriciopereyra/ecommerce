import './Banner.css'
import Button from './Button'

const Banner = (props) => {

    return (
        <div className={`banner-container`} 
        style={{color: props.textColor}}
        >

            <div 
            className={`banner indented wrapped ${props.style ? props.style : ""}`}
            >
                <div className='banner-description'>
                    {props.banner.title ? <h1>{props.banner.title}</h1> : ""}
                    {props.banner.description ? <p>{props.banner.description}</p> : ""}
                    {props.banner.cta ? <Button text={props.banner.cta} 
                    type={props.button == 'black' ? 'button1 black' : 'button1'} /> : ""}
                </div>
            </div>


            <div className='banner-media'>
                {props.banner.video ?
                    <div className='banner-video'>
                        <video className="lg-screen" src={props.banner.video[0]} preload="auto" muted autoPlay={true} loop={true} playsInLine="" webkit-playsinline="" x5-playsinline=""></video>
                        <video className="sm-screen" src={props.banner.video[1]} preload="auto" muted autoPlay={true} loop={true} playsInLine="" webkit-playsinline="" x5-playsinline=""></video>
                    </div>
                    :
                    <picture className='banner-image'>
                        <source media="(max-width: 1000px)" srcSet={props.banner.background[1]} />
                        <source srcSet={props.banner.background[0]} />
                        <img src={props.banner.background[0]} />
                    </picture>
                }
            </div>

            

        </div>
    )
}

export default Banner