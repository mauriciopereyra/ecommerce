import './ProductListing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const ProductListing = (props) => {
    return (
        <div className="product-listing">
            <div className="product-listing-image">
                <img src={props.image}></img>
                <FontAwesomeIcon className="product-listing-heart" icon={faHeart} />
                <div className='product-listing-price'>{props.price}</div>
            </div>
            <div className="product-listing-text">
                <div className="product-listing-title">{props.title}</div>
                <div className="product-listing-collection">{props.collection}</div>
            </div>
        </div>
    )
}

export default ProductListing