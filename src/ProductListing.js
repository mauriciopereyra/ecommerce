import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { heart, heartFill } from './data/icons'
import './ProductListing.css'
import { addWishlist, removeWishlist } from './redux/wishlistActions'

const ProductListing = (props) => {
    const item = props.item
    const dispatcher = useDispatch()
    const [ onWishlist, setOnWishlist ] = useState(false)
    const wishlist = useSelector(state => state.wishlist)

    useEffect(() => {
        if (wishlist.items.filter(this_item => this_item.id == item.id).length){
            setOnWishlist(true)
        } else {
            setOnWishlist(false)
        }
    },[wishlist,item])

    const handleHeartClick = (e) => {
        e.preventDefault()
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        if (onWishlist){
            dispatcher(removeWishlist(item))
        } else {
            dispatcher(addWishlist(item))
        }
        setOnWishlist(state => !state)
    }

    return (
        <Link to={item.link ? item.link : `/product/${item.id}`}>
            <div className={`${props.visible ? 'product-listing' : 'product-listing-hidden'}
                ${props.type=='category' ? 'category' : ''}
                `} 
                style={{...props.style}}
            >
                <div className="product-listing-image">
                    <img src={item.image}></img>
                    {props.type == 'product' ? 
                        <div onClick={(e) => handleHeartClick(e)}
                        className="product-listing-heart">
                            {onWishlist ? heartFill : heart}
                        </div> 
                    : ""}
                    {item.price ? <div className='product-listing-price'>{item.price}</div> : ""}
                </div>
                <div className="product-listing-text">
                    <div className="product-listing-title">{item.title}</div>
                    <div className="product-listing-collection">{item.collection}</div>
                </div>
            </div>
        </Link>
    )
}

export default ProductListing