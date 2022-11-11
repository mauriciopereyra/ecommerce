import './MainMenu.css'
import { Link } from 'react-router-dom'
import { categoryLink } from './functions/categoryLink'

const MainMenu = (props) => {

    const renderMainMenu = (items) => {
        return items.map((item,index) => {
            return (
            <div key={index} className={`main-menu-item ${item.style ? item.style : ""}`}>
                <Link to={categoryLink(item.title)}>{item.title}</Link>
                {item.subcategories.length ?
                <>
                    <div className="main-menu-category-container">
                        <div className="main-menu-category">
                            <div className="main-menu-category-wrapper">
                                {renderSubcategories(item.subcategories,item.bottomItems,item.title)}
                            </div>
                            {item.bottomItems ?
                            <div className="main-menu-category-footer-container">
                                <div className="main-menu-category-footer">
                                {renderFooter(item.subcategories,item.title)}
                            </div>
                            </div> :
                            ""                            
                            }
                        </div> 
                    </div>
                </>
                : "" }
            </div>
            )
        })
    }

    const renderFooter = (subcategories,categoryTitle) => {
        categoryTitle = !Array.isArray(categoryTitle) ? categoryTitle : categoryTitle[0]

        return subcategories.map((subcategory,index) => {
            let subcategoryTitle = !Array.isArray(subcategory.title) ? subcategory.title : subcategory.title[0]
            return (
                <div key={index} className={`main-menu-category-footer-item ${subcategory.featured ? "featured-footer" : ""}`}>
                    <Link to={categoryLink(categoryTitle,subcategoryTitle)}>{subcategory.items.at(-1)}</Link>
                </div>
            )
        })
    }

    const renderSubcategories = (categories,bottomItems,categoryTitle) => {

        return categories.map((subcategory,index) => {
            const subCategoryTitle = !Array.isArray(subcategory.title) ? subcategory.title : subcategory.title[0]
            return <ul key={index} className={`main-menu-subcategory ${subcategory.featured ? "featured-subcategory" : ""}`}>
                <li className="main-menu-subcategory-title">

                    {!Array.isArray(subcategory.title) ?
                        <Link to={categoryLink(categoryTitle,subCategoryTitle)}>{subCategoryTitle}</Link> :
                        <Link to={categoryLink(categoryTitle,subCategoryTitle)}>{subCategoryTitle}
                        <img className="main-menu-subcategory-image" src={subcategory.title[1]}></img> 
                        </Link>
                    }

                </li>

                {
                    bottomItems ?
                    renderLinks(subcategory.items.slice(0,-1),categoryTitle,subCategoryTitle) :
                    renderLinks(subcategory.items,categoryTitle,subCategoryTitle)
                }
            </ul>
        })
    }

    const renderLinks = (links,categoryTitle,subCategoryTitle) => {
        return links.map((link,index) => {
            return (link ? 
            <li className="main-menu-subcategory-item" key={index}>
                
                {!Array.isArray(link) ?
                    <Link to={categoryLink(categoryTitle,subCategoryTitle,link)}>{link}</Link> :
                    <Link to={categoryLink(categoryTitle,subCategoryTitle,link[0])}>{link[0]}
                    <img className="main-menu-subcategory-image" src={link[1]}></img> 
                    </Link>
                }                

            </li> 
            : 
            <li key={index} className="main-menu-subcategory-item horizontal-separator">Separator</li>
            )})
    }


    return (
        <div className='main-menu'>
            {renderMainMenu(props.mainMenu)}
        </div>
    )
}

export default MainMenu