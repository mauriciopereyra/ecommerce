import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { heart, heartFill } from './data/icons'
import './ProductListing.css'
import { addWishlist, removeWishlist } from './redux/wishlistActions'

const ProductListing = (props) => {

    const dispatcher = useDispatch()
    const product = props.product
    const [ onWishlist, setOnWishlist ] = useState(false)
    const wishlist = useSelector(state => state.wishlist)

    useEffect(() => {
        if (wishlist.items.includes(product)){
            setOnWishlist(true)
        } else {
            setOnWishlist(false)
        }
    },[wishlist])

    const handleHeartClick = (e) => {
        e.preventDefault()
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        if (onWishlist){
            dispatcher(removeWishlist(product))
        } else {
            dispatcher(addWishlist(product))
        }
        setOnWishlist(state => !state)
    }

    return (
        <Link to={`/product/${product.id}`}>
            <div className={`${props.visible ? 'product-listing' : 'product-listing-hidden'}
                ${props.type=='category' ? 'category' : ''}
                `} 
                style={{...props.style}}
            >
                <div className="product-listing-image">
                    <img src={product.image}></img>
                    {props.type == 'product' ? 
                        <div onClick={(e) => handleHeartClick(e)}
                        className="product-listing-heart">
                            {onWishlist ? heartFill : heart}
                        </div> 
                    : ""}
                    {product.price ? <div className='product-listing-price'>{product.price}</div> : ""}
                </div>
                <div className="product-listing-text">
                    <div className="product-listing-title">{product.title}</div>
                    <div className="product-listing-collection">{product.collection}</div>
                </div>
            </div>
        </Link>
    )
}

export default ProductListing