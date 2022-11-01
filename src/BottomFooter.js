import './BottomFooter.css'

const BottomFooter = (props) => {
    const renderItems = (items) => {
        return items.map(item => {
            return <li><a href="#">{item}</a></li>
        })
    }
    return (
        <div className='bottom-footer'>
            <ul>
                {renderItems(props.items)}
            </ul>
        </div>
        )
}

export default BottomFooter