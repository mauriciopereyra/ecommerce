import Button from './Button'
import './CallToAction.css'
import { Link } from 'react-router-dom'

const CallToAction = (props) => {
    return (
        <div className='cta-container'>
            <div className='cta-wrapper indented wrapped'>
                <h2 className='cta-text'>
                    {props.text}
                </h2>
                <div className='cta-button-wrapper'>
                    <Link to={props.link}>
                        <Button text="SIGN UP FOR FREE" type='button1 black' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CallToAction