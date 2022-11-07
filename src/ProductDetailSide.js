import Button from './Button'
import { useEffect, useState } from 'react'

const sizes = [
    '8.5 UK',
    '9 UK',
    '10 UK',
    '10.5 UK',
    '11 UK',
    '11.5 UK',
    '12 UK',
]

const ProductDetailSide = () => {
    
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
            <div className='ps-tags'>Men • Originals</div>
            <div className='ps-rating'>★★★★☆ 112</div>
        </div>
        <h1 className='ps-title'>SAMBA ARGENTINA SHOES</h1>
        <div className='ps-price'>฿2,880</div>
        <div className='ps-colors'>Clear Blue / Cloud White / Tactile Blue</div>
        <div className='ps-sizes-container'>
            <h3 className='ps-sizes-title'>
                Sizes
            </h3>
            <div className='ps-sizes-items'>
                {renderSizes(sizes)}
            </div>
            <div className='ps-sizes-guide'>
                <span>Size guide</span>
            </div>
        </div>
        <div className='ps-buttons-group'>
                <Button type="button1 black" text="ADD TO BAG" />
                <Button type="button2 heart" />
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