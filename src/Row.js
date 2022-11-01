import ProductListing from "./ProductListing"
import './Row.css'
import SliderButtons from './SliderButtons'
import { useEffect, useRef, useState } from 'react'
import CategoryCard from "./CategoryCard"
import TeaserCard from "./TeaserCard"

const Row = (props) => {
   
    const [ currentPage, setPage ] = useState(0)
    const [ activeTab, setActiveTab ] = useState(0)
    const prevPage = () => setPage(currentPage - 1)
    const nextPage = () => setPage(currentPage + 1)

    const renderListings = (items,tab=0) => {
        const style = {'transform':`translateX(calc(${-currentPage*4}00% + ${-currentPage*4}em))`}
        return items.map((item) => {
            switch (item.type) {
                case 'category':
                    return <CategoryCard visible={activeTab == tab} currentPage={currentPage} title={item.title} style={style} /> 
                default:
                    return props.type == "teaser" ? 
                           <TeaserCard currentPage={currentPage} title={item.title} description={item.description}  media={item.media} style={style} /> : 
                           <ProductListing visible={activeTab == tab} currentPage={currentPage} title={item.title}  type={props.type} collection={item.collection} price={item.price} image={item.image} style={style} />
            }
        })
    }
    const renderTitles = (titles) => {
        return titles.map((title,index) => 
            <h1 onClick={() => 
                {setActiveTab(index)
                setPage(0)}
            } 
            className={`tab-title ${index==activeTab ? "active" : ""}`}>{title}</h1>)
    }

    const renderRows = (rows) => {
        if (Array.isArray(props.title)){
            return rows.map((row, index) => renderListings(row,index))
        } else {
            return renderListings(rows)
        }
    }

      return (
        <div className={"row " + props.style}>
            {/* <h1>Page {currentPage}</h1> */}
            {/* <h2>Items: {Array.isArray(props.title) ? props.items[activeTab].length : props.items.length}</h2> */}
            <div className="row-title">
                {Array.isArray(props.title) ?
                 <div className="tab-list">
                 {renderTitles(props.title)}
                 </div> :
                 <h1>{props.title}</h1>}
                <SliderButtons prevPage={prevPage} nextPage={nextPage} />
            </div>  
            <div className="row-items">
                {renderRows(props.items)}
            </div>
        </div>
      )

}

export default Row