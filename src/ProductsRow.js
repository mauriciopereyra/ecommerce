import ProductListing from "./ProductListing"
import './ProductsRow.css'
import SliderButtons from './SliderButtons'
import { useState } from 'react'

const ProductsRow = (props) => {

    const [ page, setPage ] = useState(1)

    const renderListings = (items) => {
        return items.map((item) => <ProductListing title={item.title} collection={item.collection} price={item.price} image={item.image}/>)
      }

      return (
        <div className={"products-row " + props.style}>
            <h1>Page {page}</h1>
            <div className="products-row-title">
                <h1>{props.title}</h1>
                <SliderButtons setPage={setPage} />
            </div>  
            <div className="products-listing-list">
                {renderListings(props.items)}
            </div>
        </div>
      )

}

export default ProductsRow