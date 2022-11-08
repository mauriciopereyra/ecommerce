import ProductListing from "./ProductListing"
import './Row.css'
import SliderButtons from './SliderButtons'
import { useEffect, useRef, useState } from 'react'
import CategoryCard from "./CategoryCard"
import TeaserCard from "./TeaserCard"
import { styleInfo } from "./functions/productsSlider"

const Row = (props) => {
   
    const [ currentPage, setPage ] = useState(0)
    const [ activeTab, setActiveTab ] = useState(0)
    const prevPage = () => changePage(currentPage-1)
    const nextPage = () => changePage(currentPage+1)
    const container = useRef()
    const [offset, setOffset] = useState(0)

    const changePage = (newPage) => {
        const [page, offset] = styleInfo(props,window,activeTab,container,currentPage,newPage)
        setPage(page)
        setOffset(offset)
    }

    const renderListings = (items,tab=0) => {
        const style = {'transform':`translateX(${-offset}px)`}
        
        return items.map((item,index) => {
            switch (item.type) {
                case 'category':
                    return <CategoryCard key={index} visible={activeTab == tab} currentPage={currentPage} title={item.title} style={style} /> 
                default:
                    return props.type == "teaser" ? 
                           <TeaserCard key={index} currentPage={currentPage} title={item.title} description={item.description}  media={item.media} style={style} /> : 
                           <ProductListing key={index} visible={activeTab == tab} currentPage={currentPage} type={props.type} style={style} product={item} />
            }
        })
    }
    const renderTitles = (titles) => {
        return titles.map((title,index) => 
            <h1 key={index} onClick={(event) => 
                {setActiveTab(index)
                setPage(0)
                setOffset(0)
                container.current.scrollLeft = 0 
            }
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
            <div className="row-title">
                {Array.isArray(props.title) ?
                 <div className="tab-list">
                 {renderTitles(props.title)}
                 </div> :
                 <h1 className="indented wrapped">{props.title}</h1>}
                <SliderButtons prevPage={prevPage} nextPage={nextPage} />
            </div>  
            <div ref={container} className="row-items">
                {renderRows(props.items)}
            </div>
        </div>
      )

}

export default Row