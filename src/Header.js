import './Header.css'
import HeaderIcons from './HeaderIcons'
import MainMenu from './MainMenu'

const Header = (props) => {
    const renderTopRow = (items) => {
        return items.map((item,index) => {
            return <li key={index}><a href='#'>{item}</a></li>
        })
    }

    return (
        <header className='header-container'>
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
        </header>
    )
}

export default Header