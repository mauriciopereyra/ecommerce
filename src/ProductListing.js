import './ProductListing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const ProductListing = () => {
    return (
        <div className="product-listing">
            
            <div className="product-listing-image">
                <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b1c66b53dada408ab11dae2b0050e046_9366/Ultraboost_22_Shoes_Yellow_GX6639_01_standard.jpg"></img>
                <FontAwesomeIcon className="product-listing-heart" icon={faHeart} />
                <div className='product-listing-price'>฿8,500</div>
            </div>
            <div className="product-listing-text">
                <div className="product-listing-title">Running shoes</div>
                <div className="product-listing-collection">Adidas Zero</div>
            </div>
        </div>
    )
}

export default ProductListing