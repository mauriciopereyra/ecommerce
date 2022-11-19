import { useState } from 'react'
import Button from './Button'
import './ProductDetailImages.css'

const ProductDetailImages = (props) => {
    const product = props.product
    const [ isExpanded, setExpanded ] = useState(false)

    const renderImages = (images) => {
        return images.map(image => {
            return (
                <div className='pd-image'>
                    <img src={image}></img>
                </div>
            )
        })
    }

    return (
        <>
        <div className={`pd-images-group ${isExpanded ? 'expanded' : 'collapsed'}`}>
            <div className='pd-image'>
                <img src={product.image}></img>
            </div>
            {product.detailImages ?
            renderImages(product.detailImages) :
            ""
            }

        </div>
        
        {product.detailImages ?
            <div onClick={() => setExpanded(!isExpanded) } className='pd-image-button-container'>
            {isExpanded ?
            <Button type="button2 no-right-arrow up-arrow" text="SHOW LESS"/> :
            <Button type="button2 no-right-arrow down-arrow" text="SHOW MORE"/>
            }
            </div>
        : ""
        }        
        </>
        )
}

export default ProductDetailImages