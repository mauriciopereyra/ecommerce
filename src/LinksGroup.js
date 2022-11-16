import { Link } from 'react-router-dom'
import './LinksGroup.css'

const LinksGroup = (props) => {
    const renderItems = (items) => {
        return items.map((item,index) => {
            return (
                
                    <h2  key={index} className='links-group-item'>
                        <Link to={item.link}>
                            {item.title}
                        </Link>
                    </h2>
                
            )
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