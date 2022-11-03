import toggleHeader from './functions/toggleHeader'
import './Header.css'
import HeaderIcons from './HeaderIcons'
import MainMenu from './MainMenu'
import BlackRow from './BlackRow'
import { headerPromo } from './data/promos'

const Header = (props) => {

    toggleHeader(window)

    const renderTopRow = (items) => {
        return items.map((item,index) => {
            return <li key={index}><a href='#'>{item}</a></li>
        })
    }

    return (
        <>
        <header className='header-fixed' id="header-fixed">
            <BlackRow promo={headerPromo} transition={true} style="header-black-row" />
            <div className='header-container'>
                <div className='header indented wrapped'>
                    <div className='top-row'>
                        <ul className='top-row-items'>
                            {renderTopRow(props.topRow)}
                        </ul>
                    </div>
                    <div className='bottom-row'>
                        <a href='#' className='logo' style={{backgroundImage:`url(${props.logo})`}}>
                        </a>
                        <MainMenu mainMenu={props.mainMenu} />
                        <HeaderIcons />              
                    </div>
                </div>
            </div>
        </header>
        <div className='header-back'></div>
        </>
    )
}

export default Header