import './MainMenu.css'
import { Link } from 'react-router-dom'

const MainMenu = (props) => {

    const categoryLink = (...categories) => {
        let link = "/category/"
        for (let category of categories) link += category.replace(" ","_")+"-";
        return link.replace(/-$/, "").toLowerCase()
    }

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
                                {renderFooter(item.subcategories)}
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

    const renderFooter = (subcategories) => {
        return subcategories.map((subcategory,index) => {
            return (
                <div key={index} className={`main-menu-category-footer-item ${subcategory.featured ? "featured-footer" : ""}`}>
                    <Link to="#">{subcategory.items.at(-1)}</Link>
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
                        <Link to={categoryLink(subCategoryTitle,categoryTitle)}>{subCategoryTitle}</Link> :
                        <Link to={categoryLink(subCategoryTitle,categoryTitle)}>{subCategoryTitle}
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