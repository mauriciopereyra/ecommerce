
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Button from './Button'
import productsList, { scrappedProducts } from './data/productsList'
import './ProductDetail.css'
import ProductDetailSide from './ProductDetailSide'
import { addCart } from './redux/cartActions'
import Row from './Row'
import scrappedItems from './data/scrappedItems.json';
import { addStillInterested } from './redux/stillInterestedActions'


const ProductDetail = () => {

    const { productId } = useParams()
    const product = scrappedItems.find(product => product.id === parseInt(productId));
    const [ isExpanded, setExpanded ] = useState(false)

    const dispatcher = useDispatch()

    const renderImages = (images) => {
        return images.map(image => {
            return (
                <div className='pd-image'>
                    <img src={image}></img>
                </div>
            )
        })
    }

    useEffect(() => {
        dispatcher(addStillInterested(product))
    },[product])

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