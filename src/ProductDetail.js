
import productsList from './data/productsList'
import './ProductDetail.css'
import ProductDetailSide from './ProductDetailSide'
import Row from './Row'


const ProductDetail = () => {


    return (
        <div className="product-detail">
            <div className="product-main">
                <div className='pd-images-group'>
                    <div className='pd-image'></div>
                </div>
                <Row type='product' title="YOU MAY ALSO LIKE" items={productsList.concat(productsList)} />
                <Row type='product' title="OTHERS ALSO BOUGHT" items={productsList.concat(productsList)} />
            </div>
            <ProductDetailSide />
        </div>
        )
}

export default ProductDetail