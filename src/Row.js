import ProductListing from "./ProductListing"
import './Row.css'
import SliderButtons from './SliderButtons'
import { useEffect, useState } from 'react'
import CategoryCard from "./CategoryCard"

const Row = (props) => {

    const [ currentPage, setPage ] = useState(0)
    const [ activeTab, setActiveTab ] = useState(0)
    const prevPage = () => setPage(currentPage - 1)
    const nextPage = () => setPage(currentPage + 1)

    const renderListings = (items) => {
        return items.map((item) => item.type == 'category' ? <CategoryCard currentPage={currentPage} title={item.title} /> : <ProductListing currentPage={currentPage} title={item.title}  type={props.type} collection={item.collection} price={item.price} image={item.image}/>)
      }

    const renderTitles = (titles) => {
        return titles.map((title,index) => <h1 onClick={() => setActiveTab(index)} className={`tab-title ${index==activeTab ? "active" : ""}`}>{title}</h1>)
    }

      return (
        <div className={"row " + props.style}>
            {/* <h1>Page {currentPage}</h1>
            <h2>Items: {props.items.length}</h2> */}
            <div className="row-title">
                {Array.isArray(props.title) ?
                 <div className="tab-list">
                 {renderTitles(props.title)}
                 </div> :
                 <h1>{props.title}</h1>}
                <SliderButtons prevPage={prevPage} nextPage={nextPage} />
            </div>  
            <div className="row-items">
                {renderListings(props.items)}
            </div>
        </div>
      )

}

export default Row