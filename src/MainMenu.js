import './MainMenu.css'

const MainMenu = (props) => {

    const renderMainMenu = (items) => {
        return items.map((item,index) => {
            return (
            <div key={index} className={`main-menu-item ${item.style ? item.style : ""}`}>
                <a href='#'>{item.title}</a>
                {item.subcategories.length ?
                <>
                    <div className="main-menu-category-container">
                        <div className="main-menu-category">
                            <div className="main-menu-category-wrapper">
                                {renderSubcategories(item.subcategories,item.bottomItems)}
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
                    <a href="#">{subcategory.items.at(-1)}</a>
                </div>
            )
        })
    }

    const renderSubcategories = (categories,bottomItems) => {
        return categories.map((subcategory,index) => {
            return <ul key={index} className={`main-menu-subcategory ${subcategory.featured ? "featured-subcategory" : ""}`}>
                <li className="main-menu-subcategory-title">

                    {!Array.isArray(subcategory.title) ?
                        <a href="#">{subcategory.title}</a> :
                        <a href="#">{subcategory.title[0]}
                        <img className="main-menu-subcategory-image" src={subcategory.title[1]}></img> 
                        </a>
                    }

                </li>

                {
                    bottomItems ?
                    renderLinks(subcategory.items.slice(0,-1)) :
                    renderLinks(subcategory.items)
                }
            </ul>
        })
    }

    const renderLinks = (links) => {
        return links.map((link,index) => {
            return (link ? 
            <li className="main-menu-subcategory-item" key={index}>
                
                {!Array.isArray(link) ?
                    <a href="#">{link}</a> :
                    <a href="#">{link[0]}
                    <img className="main-menu-subcategory-image" src={link[1]}></img> 
                    </a>
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