import Button from './Button'
import './CategoryCard.css'

const CategoryCard = (props) => {
    return (
        <div className='category-card' style={{'display':`${props.visible ? '' : 'none'}`, 'transform':`translateX(calc(${-props.currentPage*4}00% + ${-props.currentPage*4}em))`}}>
            <h2 className='category-card-title'>{props.title}</h2>
            <Button type={'button2'} text="DISCOVER" />
        </div>
    )
}

export default CategoryCard