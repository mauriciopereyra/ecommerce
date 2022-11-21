
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import './ProductDetail.css'
import ProductDetailSide from './ProductDetailSide'
import { addCart } from './redux/cartActions'
import Row from './Row'
import { addStillInterested } from './redux/stillInterestedActions'
import ProductDetailImages from './ProductDetailImages'
import { getItem } from './functions/apiCalls'

const ProductDetail = () => {

    const { productId } = useParams()
    const [product, setProduct] = useState(null)
    
    useEffect(() => {
        getItem(productId).then(resp => {
            setProduct(resp.data)
            dispatcher(addStillInterested(resp.data))
        })
    },[productId])

    const dispatcher = useDispatch()

    // const renderRows = () => {
    //     const rowTitles = ["YOU MAY ALSO LIKE","OTHERS ALSO BOUGHT","COMPLETE THE LOOK"] 
    //     return product.categories.map((category,index) => {
    //         return <Row type='product' title={rowTitles[index]} items={filterProducts(category,8)} />
    //     })
    // }


    return (
        product ?
            <div className="product-detail">
                <div className="product-main">
                    <ProductDetailImages product={product} />
                    {/* {renderRows()} */}
                </div>
                <ProductDetailSide product={product} />
            </div>
        : ""
        )
}

export default ProductDetail