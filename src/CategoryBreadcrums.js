import { Link, useNavigate } from "react-router-dom"
import "./CategoryBreadcrums.css"
import { categoryLink } from "./functions/categoryLink"

const CategoryBreadcrums = (props) => {

    const navigate = useNavigate()

    const renderBreadcrumbs = (items) => {
        return items.map((item,index) => {
            return (<li key={index} className="breadcrumb-item"><Link to={categoryLink(...props.categories.slice(0,index+1))}>{item}</Link></li>)
    })
}

    return (
        <ul className="breadcrumbs">
            <li className="breadcrumb-item breadcrumb-back"><Link onClick={() => navigate(-1)}>Back</Link></li>
            <li className="breadcrumb-item breadcrumb-home"><Link to={"/"}>Home</Link></li>
            {renderBreadcrumbs(props.categories.slice(0,-1))}
            <li className="breadcrumb-item">{props.categories.at(-1)}</li>
        </ul>
    )
}

export default CategoryBreadcrums