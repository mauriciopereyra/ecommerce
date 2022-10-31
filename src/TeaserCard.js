import './TeaserCard.css'

const TeaserCard = (props) => {
    return (
        <div className='teaser-card' style={{...props.style}}>
            <div className='teaser-media'>
                {props.media.type == 'image' ?
                <img src={props.media.source}></img> :
                <video loop={true} autoPlay muted playsinline={true} src={props.media.source}></video>
            }
            </div>
            <div className='teaser-text'>
                <div className='teaser-title'>{props.title}</div>
                <div className='teaser-description'>{props.description}</div>
                <div className='teaser-cta'><p>SHOP NOW</p></div>
            </div>
        </div>
    )
}

export default TeaserCard