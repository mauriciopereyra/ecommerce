import ProductListing from "./ProductListing"
import './Row.css'
import SliderButtons from './SliderButtons'
import { useEffect, useRef, useState } from 'react'
import CategoryCard from "./CategoryCard"
import TeaserCard from "./TeaserCard"
import { styleInfo } from "./functions/productsSlider"
import { getCategory } from "./functions/apiCalls"
import { useLocation, useParams } from "react-router-dom"

const Row = (props) => {
   
    const [ currentPage, setPage ] = useState(0)
    const [ activeTab, setActiveTab ] = useState(0)
    const prevPage = () => changePage(currentPage-1)
    const nextPage = () => changePage(currentPage+1)
    const container = useRef()
    const [offset, setOffset] = useState(0)
    const [ sliderButtonsVisible, setSliderButtonsVisible] = useState(true)
    const location = useLocation()
    const params = useParams()

    const changePage = (newPage) => {
        const [page, offset, shouldBeVisible] = styleInfo(props,window,activeTab,container,currentPage,newPage)
        setPage(page)
        setOffset(offset)
        setSliderButtonsVisible(shouldBeVisible)
    }

    useEffect(() =>  {
        changePage(0)
    },[activeTab,location,params])

    useEffect(() =>  {
        setTimeout(() => {
            changePage(0)
        }, 2000);
    },[activeTab,location,params])

    const RenderListings = (items,tab=0) => {
        const style = {'transform':`translateX(${-offset}px)`}
        const [_items, setItems] = useState([])
        const location = useLocation()

        useEffect(() => {
            const isRandom = props.random ? true : false

            if (props.type == 'product'){
                getCategory(items,null,isRandom).then(res => setItems(res.data))
            } else {
                setItems(items)
            }
        },[location])



        return _items.map((item,index) => {
            switch (item.type) {
                case 'category':
                    return <CategoryCard key={index} visible={activeTab == tab} currentPage={currentPage} item={item} style={style} /> 
                default:
                    return props.type == "teaser" ? 
                           <TeaserCard key={index} currentPage={currentPage} item={item} /> : 
                           <ProductListing key={index} visible={activeTab == tab} currentPage={currentPage} type={props.type} style={style} item={item} />
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
            return rows.map((row, index) => RenderListings(row,index))
        } else {
            return RenderListings(rows)
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
                { sliderButtonsVisible ?
                <SliderButtons prevPage={prevPage} nextPage={nextPage} />
                : ""}
            </div>  
            <div ref={container} className="row-items">
                {renderRows(props.items)}
            </div>
        </div>
      )

}

export default Row