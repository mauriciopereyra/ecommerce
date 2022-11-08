import { Link } from 'react-router-dom'
import { heart } from './data/icons'
import './ProductListing.css'


const ProductListing = (props) => {
    const product = props.product

    return (
        <Link to={`/product/${product.id}`}>
            <div className={`${props.visible ? 'product-listing' : 'product-listing-hidden'}
                ${props.type=='category' ? 'category' : ''}
                `} 
                style={{...props.style}}
            >
                <div className="product-listing-image">
                    <img src={product.image}></img>
                    {props.type == 'product' ? <div className="product-listing-heart">{heart}</div> : ""}
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