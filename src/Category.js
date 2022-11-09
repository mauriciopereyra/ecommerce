import './Category.css'
import productsList from './data/productsList'
import ProductListing from './ProductListing'
import Pagination from './Pagination'
import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const Category = () => {

    const [searchParams] = useSearchParams();
    const page = parseInt(searchParams.get("page"))
    const currentPage = page && parseInt(page) > 0 ? page : 1
    const { categoryName } = useParams()
    const selectedCategories = categoryName.split("-")
    const subCategoryName = selectedCategories.at(-1).toUpperCase()

    const items = productsList.filter(item => {
        var matchesCategories = true
        for (let category of selectedCategories) {
            if (!item.categories.includes(category)){
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
                <ProductListing key={index} visible={true} type="product" product={item} />
                )
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [currentPage])

    return (
        <div className='category-section wrapped indented'>
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