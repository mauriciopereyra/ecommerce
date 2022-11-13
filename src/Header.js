import toggleHeader from './functions/toggleHeader'
import './Header.css'
import HeaderIcons from './HeaderIcons'
import MainMenu from './MainMenu'
import BlackRow from './BlackRow'
import { headerPromo } from './data/promos'
import { menu } from './data/icons'
import ResponsiveMenu from './ResponsiveMenu'
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header = (props) => {
    const [ isMenuOpen, setMenuOpen ] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    toggleHeader(window)

    const renderTopRow = (items) => {
        return items.map((item,index) => {
            return <li key={index}><a href='#'>{item}</a></li>
        })
    }

    return (
        <>
        <ResponsiveMenu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        <header className={`header${props.fixed ? '-fixed' : ''}`} 
        id={`header${props.fixed ? '-fixed' : ''}`}
        >
            <BlackRow promo={headerPromo} transition={true} style="header-black-row" />
            <div className='header-container'>
                <div className='header indented wrapped'>
                    <div className='top-row'>
                        <ul className='top-row-items'>
                            {renderTopRow(props.topRow)}
                        </ul>
                    </div>
                    <div className='bottom-row'>
                        <div onClick={() => setMenuOpen(true)} className='header-icon menu-icon'>{menu}</div>
                        <Link to='/' className='logo' style={{backgroundImage:`url(${props.logo})`}}>
                        </Link>
                        <MainMenu mainMenu={props.mainMenu} />
                        <HeaderIcons />              
                    </div>
                </div>
            </div>
        </header>
        { props.fixed ? <div className='header-back'></div> : ""}
        </>
    )
}
export default Header