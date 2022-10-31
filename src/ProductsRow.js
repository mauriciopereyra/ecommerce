import ProductListing from "./ProductListing"
import './ProductsRow.css'
import SliderButtons from './SliderButtons'
import { useEffect, useState } from 'react'

const ProductsRow = (props) => {

    const [ currentPage, setPage ] = useState(0)
    const prevPage = () => setPage(currentPage - 1)
    const nextPage = () => setPage(currentPage + 1)

    const renderListings = (items) => {
        return items.map((item) => <ProductListing currentPage={currentPage} title={item.title} collection={item.collection} price={item.price} image={item.image}/>)
      }

      return (
        <div className={"products-row " + props.style}>
            <h1>Page {currentPage}</h1>
            <h2>Items: {props.items.length}</h2>
            <div className="products-row-title">
                <h1>{props.title}</h1>
                <SliderButtons prevPage={prevPage} nextPage={nextPage} />
            </div>  
            <div className="products-listing-list">
                {renderListings(props.items)}
            </div>
        </div>
      )

}

export default ProductsRow