import './Category.css'
import ProductListing from './ProductListing'
import Pagination from './Pagination'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import CategoryBreadcrums from './CategoryBreadcrums';
import { getCategory } from './functions/apiCalls';

const Category = () => {

    const [searchParams] = useSearchParams();
    const page = parseInt(searchParams.get("page"))
    const currentPage = page && parseInt(page) > 0 ? page : 1
    const { categoryName } = useParams()
    const selectedCategories = categoryName.split("+").map(category => category.toLowerCase())
    const subCategoryName = selectedCategories.at(-1).toUpperCase()
    const navigate = useNavigate()
    const location = useLocation()

    const [ items, setItems ] = useState([])
    const [ loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        setItems([])
        getCategory(selectedCategories,300).then(resp => {
            console.log(resp.data)
            setItems(resp.data)
        }).then(() => setLoading(false))
    },[location])

    const itemsPerPage = 16
    const itemsInPage = items.length ? items.slice((currentPage-1)*itemsPerPage, itemsPerPage+(currentPage-1)*itemsPerPage) : 0
    
    const totalPages = Math.ceil(items.length / itemsPerPage)

    const renderListings = (items) => {
        return items.map((item,index) =>  {
            return (
                <ProductListing key={index} visible={true} type="product" item={item} />
                )
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [currentPage])

    return (
        <div className='category-section wrapped indented'>
            <CategoryBreadcrums categories={selectedCategories} />
            <h1 className='category-title'>{subCategoryName}
                <span className='category-total-items'>[{items.length}]</span>
            </h1>
            <div className='category-products'>
                {items.length ?
                renderListings(itemsInPage) :
                loading ? "LOADING..." :
                <h1>No products available in this category</h1>
            }
            </div>
            <Pagination totalPages={totalPages} currentPage={currentPage} />
        </div>
    )
}

export default Category