import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './CartProduct.css'
import { heart, heartFill, close } from './data/icons'
import { addWishlist, removeWishlist } from './redux/wishlistActions'

const CartProduct = (props) => {

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

    const renderSelect = () => {
        return (
            <select value={1}>
                <option value={1}>1</option>
                <option value={2}>2</option>
            </select>
        )
    }


    return (
        <div className="cart-product">
            <div className="cart-product-image">
                <img src={product.image}></img>
            </div>
            <div className="cart-product-description-container">
                <div className="cart-product-description">
                    <div className="cpd-name-price">
                        <div className="cpd-name">{product.title}</div>
                        <div className="cpd-price">{product.price}</div>
                    </div>
                    <div className="cpd-color">{product.colors}</div>
                    <div className="cpd-size">SIZE: EU 32</div>
                    <div className="cpd-quantity">
                        {renderSelect()}
                    </div>
                    <div className='bottom-row-mobile'>
                        <div className='cpd-price-mobile'>{product.price}</div>
                        <div className='cpd-quantity-mobile'>
                            {renderSelect()}
                        </div>
                    </div>
                </div>
                <div className="cart-product-buttons">
                    {close}
                    <div onClick={(e) => handleHeartClick(e)}
                        className="product-cart-heart">
                            {onWishlist ? heartFill : heart}
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default CartProduct