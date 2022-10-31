import Button from './Button'
import './CategoryCard.css'

const CategoryCard = (props) => {
    return (
        <div className='category-card' style={{...props.style,'display':`${props.visible ? '' : 'none'}`}}>
            <h2 className='category-card-title'>{props.title}</h2>
            <Button type={'button2'} text="DISCOVER" />
        </div>
    )
}

export default CategoryCard