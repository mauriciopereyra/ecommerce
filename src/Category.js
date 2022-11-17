import './Category.css'
import productsList, { scrappedProducts } from './data/productsList'
import ProductListing from './ProductListing'
import Pagination from './Pagination'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import CategoryBreadcrums from './CategoryBreadcrums';
import scrappedItems from './data/scrappedItems.json';

const Category = () => {

    const [searchParams] = useSearchParams();
    const page = parseInt(searchParams.get("page"))
    const currentPage = page && parseInt(page) > 0 ? page : 1
    const { categoryName } = useParams()
    const selectedCategories = categoryName.split("+").map(category => category.toLowerCase())
    const subCategoryName = selectedCategories.at(-1).toUpperCase()
    const navigate = useNavigate()

    const items = scrappedItems.filter(item => {
        var matchesCategories = true
        for (let category of selectedCategories) {
            if (!item.categories.some(categories => categories.toLowerCase() === category.toLowerCase())){
                matchesCategories = false
                break
            }
        }
        return matchesCategories
    })

    const itemsPerPage = 16
    const itemsInPage = items.slice((currentPage-1)*itemsPerPage, itemsPerPage+(currentPage-1)*itemsPerPage);
    
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
                {renderListings(itemsInPage)}
            </div>
            <Pagination totalPages={totalPages} currentPage={currentPage} />
        </div>
    )
}

export default Category