import Button from './Button'
import './CallToAction.css'

const CallToAction = (props) => {
    return (
        <div className='cta-container'>
            <div className='cta-wrapper'>
                <h2 className='cta-text'>
                    {props.text}
                </h2>
                <div className='cta-button-wrapper'>
                    <Button text="SIGN UP FOR FREE" type='button1 black' />
                </div>
            </div>
        </div>
    )
}

export default CallToAction