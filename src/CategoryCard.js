import { Link } from 'react-router-dom'
import Button from './Button'
import './CategoryCard.css'

const CategoryCard = (props) => {
    const item = props.item

    return (
        <div className='category-card' style={{...props.style,'display':`${props.visible ? '' : 'none'}`}}>
            <h2 className='category-card-title'>{item.title}</h2>
            <Link to={item.link}>
                <Button type={'button2'} text="DISCOVER" />
            </Link>
        </div>
    )
}

export default CategoryCard