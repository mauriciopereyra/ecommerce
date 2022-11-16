import './TeaserCard.css'
import { Link } from 'react-router-dom'
const TeaserCard = (props) => {

    const item = props.item

    return (
        <div className='teaser-card' style={{...props.style}}>
            <Link to={item.link}>
                <div className='teaser-media'>
                    {item.media.type == 'image' ?
                    <img src={item.media.source}></img> :
                    <video loop={true} autoPlay muted playsInline src={item.media.source}></video>
                }
                </div>
            </Link>
            <div className='teaser-text'>
                <div className='teaser-title'>{item.title}</div>
                <div className='teaser-description'>{item.description}</div>
                <div className='teaser-cta'><Link to={item.link}><p>SHOP NOW</p></Link></div>
            </div>
        </div>
    )
}

export default TeaserCard