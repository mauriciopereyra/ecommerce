import Button from './Button'
import { useEffect, useState } from 'react'
import { addWishlist, removeWishlist } from './redux/wishlistActions'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from './redux/cartActions'
import { useNavigate } from 'react-router-dom'
import ProductDetailImages from './ProductDetailImages'



const ProductDetailSide = (props) => {
    
    const product = props.product
    const isExpanded = props.isExpanded

    const [ sizeSelected, setSize ] = useState(false)

    const renderSizes = (sizes) => {
        return sizes.map(size => {
            return <div key={size} 
            className={`ps-size ${size == sizeSelected ? "selected" : ""}`}
            onClick={() => setSize(size)}
            >{size}</div>
        })
    }

    const dispatcher = useDispatch()
    const [ onWishlist, setOnWishlist ] = useState(false)
    const wishlist = useSelector(state => state.wishlist)

    const [ onCart, setOnCart ] = useState(false)
    const cart = useSelector(state => state.cart)

    const navigate = useNavigate()

    useEffect(() => {
        if (cart.items.filter(item => item.id == product.id).length){
            setOnCart(true)
        } else {
            setOnCart(false)
        }
    },[cart])

    const handleAddCart = (e) => {
        dispatcher(addCart(product))
    }

    useEffect(() => {
        if (wishlist.items.filter(item => item.id == product.id).length){
            setOnWishlist(true)
        } else {
            setOnWishlist(false)
        }
    },[wishlist,product])
    const handleHeartClick = (e) => {
        if (onWishlist){
            dispatcher(removeWishlist(product))
        } else {
            dispatcher(addWishlist(product))
        }
        setOnWishlist(state => !state)
    }

    return (
        <div className="product-side">
        <div className='ps-top-row'>
            <div className='ps-tags'>{product.collection}</div>
            <div className='ps-rating'>{product.rating}</div>
        </div>
        <h1 className='ps-title'>{product.title}</h1>
        <div className='ps-price'>{product.price}</div>

        <ProductDetailImages product={product} isExpanded={isExpanded} />

        <div className='ps-colors'>{product.colors}</div>
            {product.sizes ?
                <>
                <h3 className='ps-sizes-title'>
                    Sizes
                </h3>
                <div className='ps-sizes-container'>
                    <div className='ps-sizes-items'>
                        {renderSizes(product.sizes)}
                    </div> 
                    <div className='ps-sizes-guide'>
                        <span>Size guide</span>
                    </div>
                </div>
                </> : 
            ""}
        <div className='ps-buttons-group'>
                {onCart ?
                <Button type="button2" text="ADDED. GO TO BAG" 
                onClick={() => {navigate('/cart')}}/> : 
                <Button type="button1 black" text="ADD TO BAG" 
                onClick={() => handleAddCart()}
                /> }
                
                <Button onClick={(e) => handleHeartClick(e)} 
                type={`button2 ${onWishlist ? 'heart-fill' : 'heart'} no-right-arrow`}>
                    
                </Button>
            </div>
        <ul className='ps-notes'>
            <li>11.11 deals: Buy more save more</li>
            <li>Not the right size or colour? Visit our returns page for details.</li>
            <li>CASH ON DELIVERY AVAILABLE, max cart value 6000THB</li>
        </ul>

    </div>
    )
}

export default ProductDetailSide