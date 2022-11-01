import './LinksGroup.css'

const LinksGroup = (props) => {
    console.log(props.items)

    const renderItems = (items) => {
        return items.map(item => {
            return <h2 className='links-group-item'>{item.title}</h2>
        })
    }

    return (
        <div className='links-group indented wrapped'>
            <h1>{props.title}</h1>
            <div className='links-group-items'>
                {renderItems(props.items)}
            </div>
        </div>
        )
}

export default LinksGroup