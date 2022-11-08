
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from './Button'
import productsList from './data/productsList'
import './ProductDetail.css'
import ProductDetailSide from './ProductDetailSide'
import Row from './Row'


const ProductDetail = () => {


    const { productId } = useParams()
    const product = productsList.find(product => product.id === parseInt(productId));
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
        <div className="product-detail">
            <div className="product-main">
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
                <Row type='product' title="YOU MAY ALSO LIKE" items={productsList.concat(productsList)} />
                <Row type='product' title="OTHERS ALSO BOUGHT" items={productsList.concat(productsList)} />
            </div>
            <ProductDetailSide product={product} />
        </div>
        )
}

export default ProductDetail