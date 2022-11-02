import './BigFooter.css'

const BigFooter = (props) => {
    const renderLists = (lists) => {
        return (lists.map((list,index) => {
            return (
                <ul key={index} className='footer-group'>
                    <li className='footer-headline'><h5>{list.title}</h5></li>
                    {renderItems(list.items)}
                </ul>
                )
        }))
    }

    const renderItems = (items) => {
        return items.map((item,index) => {
            return (
            !item.includes('https') ? <li key={index} className='footer-item'><a href='#'>{item}</a></li> : <li key={index} className='footer-item'><a href='#'><img src={item}></img></a></li>
            )
        })
    }

    return (
        <div className='big-footer-container'>
            <div className='big-footer-wrapper'>
                {renderLists(props.items)}
            </div>
        </div>
    )
}

export default BigFooter