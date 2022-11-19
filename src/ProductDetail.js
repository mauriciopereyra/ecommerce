
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import productsList, { scrappedProducts } from './data/productsList'
import './ProductDetail.css'
import ProductDetailSide from './ProductDetailSide'
import { addCart } from './redux/cartActions'
import Row from './Row'
import scrappedItems from './data/scrappedItems.json';
import { addStillInterested } from './redux/stillInterestedActions'
import { filterProducts } from './functions/filterProducts'
import ProductDetailImages from './ProductDetailImages'



const ProductDetail = () => {

    const { productId } = useParams()
    const product = scrappedItems.find(product => product.id === parseInt(productId));

    const dispatcher = useDispatch()

    const renderRows = () => {
        const rowTitles = ["YOU MAY ALSO LIKE","OTHERS ALSO BOUGHT","COMPLETE THE LOOK"] 
        return product.categories.map((category,index) => {
            return <Row type='product' title={rowTitles[index]} items={filterProducts(category,8)} />
        })
    }

    useEffect(() => {
        dispatcher(addStillInterested(product))
    },[product])

    return (
        <div className="product-detail">
            <div className="product-main">
                <ProductDetailImages product={product} />
                {renderRows()}
            </div>
            <ProductDetailSide product={product} />
        </div>
        )
}

export default ProductDetail