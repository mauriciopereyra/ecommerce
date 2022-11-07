import Button from './Button'
import { useEffect, useState } from 'react'



const ProductDetailSide = (props) => {
    
    const product = props.product

    const [ sizeSelected, setSize ] = useState(false)

    const renderSizes = (sizes) => {
        return sizes.map(size => {
            return <div key={size} 
            className={`ps-size ${size == sizeSelected ? "selected" : ""}`}
            onClick={() => setSize(size)}
            >{size}</div>
        })
    }

    return (
        <div className="product-side">
        <div className='ps-top-row'>
            <div className='ps-tags'>{product.collection}</div>
            <div className='ps-rating'>{product.rating}</div>
        </div>
        <h1 className='ps-title'>{product.title}</h1>
        <div className='ps-price'>{product.price}</div>
        <div className='ps-colors'>{product.colors}</div>
        <div className='ps-sizes-container'>
            <h3 className='ps-sizes-title'>
                Sizes
            </h3>
            <div className='ps-sizes-items'>
                {renderSizes(product.sizes)}
            </div>
            <div className='ps-sizes-guide'>
                <span>Size guide</span>
            </div>
        </div>
        <div className='ps-buttons-group'>
                <Button type="button1 black" text="ADD TO BAG" />
                <Button type="button2 heart no-right-arrow" />
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