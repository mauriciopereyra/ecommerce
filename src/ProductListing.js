import { heart } from './data/icons'
import './ProductListing.css'


const ProductListing = (props) => {
    return (
        <div className={`product-listing 
            ${props.type=='category' ? 'category' : ''}`} 
            style={{...props.style,'display':`${props.visible ? 'initial' : 'none'}`}}
        >
            <div className="product-listing-image">
                <img src={props.image}></img>
                {props.type == 'product' ? <div className="product-listing-heart">{heart}</div> : ""}
                {props.price ? <div className='product-listing-price'>{props.price}</div> : ""}
            </div>
            <div className="product-listing-text">
                <div className="product-listing-title">{props.title}</div>
                <div className="product-listing-collection">{props.collection}</div>
            </div>
        </div>
    )
}

export default ProductListing