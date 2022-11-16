import './ResponsiveMenu.css'
import { responsiveMenu } from './data/responsiveMenu'
import { logo } from './data/header'
import { Link } from 'react-router-dom'
const ResponsiveMenu = (props) => {

    const renderItems = (items) => {
        return items.map((item, index) => {
            return (
            <li key={index} className='r-menu-item'>
                <Link to={item[1]}>
                    <span>{item[0]}</span><span className='arrow'>></span>
                </Link>
            </li>)
        })
    }

    return (
        <div className="r-menu-wrapper" style={
            props.isMenuOpen ? {left:'0',opacity:1} : {left:'-100vw',opacity:0}
            }>
            <div onClick={() => props.setMenuOpen(false)} className='close-menu'>X</div>
            <div className='r-menu-top'>
            <a href='#' className='r-menu-logo' style={{backgroundImage:`url(${logo})`}}></a>
            </div>
                <ul className='r-menu-content'>
                    {renderItems(responsiveMenu)}
                </ul>
        </div>
    )
}

export default ResponsiveMenu