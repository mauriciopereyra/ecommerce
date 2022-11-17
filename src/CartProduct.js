import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './CartProduct.css'
import { heart, heartFill, close } from './data/icons'
import { formatCurrency } from './functions/formatCurrency'
import { removeCart, updateCart } from './redux/cartActions'
import { addWishlist, removeWishlist } from './redux/wishlistActions'

const CartProduct = (props) => {

    const dispatcher = useDispatch()
    const product = props.item
    const [ onWishlist, setOnWishlist ] = useState(false)
    const wishlist = useSelector(state => state.wishlist)

    const [ onCart, setOnCart ] = useState(false)
    const cart = useSelector(state => state.cart)

    const productTotal = formatCurrency.format(parseInt(product.price.replace(",","").replace("$","").replace("฿",""))*product.quantity)

    useEffect(() => {
        if (wishlist.items.filter(item => item.id == product.id).length){
            setOnWishlist(true)
        } else {
            setOnWishlist(false)
        }
    },[wishlist])

    useEffect(() => {
        if (cart.items.filter(item => item.id == product.id).length){
            setOnCart(true)
        } else {
            setOnCart(false)
        }
    },[cart])

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

    const handleRemoveCart = (e) => {
        dispatcher(removeCart(product))
    }

    const handleUpdateQuantity = (e) => {
        dispatcher(updateCart(product,parseInt(e.target.value)+1))
        product.quantity = parseInt(e.target.value)+1
    }

    const renderSelect = () => {
        return (
            <select value={product.quantity-1} onChange={(e) => handleUpdateQuantity(e)}>
            {[...Array(9).keys()].map(item => {
                return <option value={item++}>{item++}</option>
            })}
            </select>
        )
    }


    return (
        <div className="cart-product">
            <div className="cart-product-image">
                <Link to={`/product/${product.id}`}>
                    <img src={product.image}></img>
                </Link>
            </div>
            <div className="cart-product-description-container">
                <div className="cart-product-description">
                    <div className="cpd-name-price">
                        <div className="cpd-name">{product.title}</div>
                        <div className="cpd-price">{productTotal}</div>
                    </div>
                    <div className="cpd-color">{product.colors}</div>
                    <div className="cpd-size">SIZE: EU 32</div>
                    <div className="cpd-quantity">
                        {renderSelect()}
                    </div>
                    <div className='bottom-row-mobile'>
                        <div className='cpd-price-mobile'>{productTotal}</div>
                        <div className='cpd-quantity-mobile'>
                            {renderSelect()}
                        </div>
                    </div>
                </div>
                <div className="cart-product-buttons">
                    <div 
                    onClick={() => handleRemoveCart()}
                    className='remove-cart'>
                        {close}
                    </div>
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