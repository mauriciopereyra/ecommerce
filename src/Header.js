import './Header.css'

const Header = (props) => {
    const renderTopRow = (items) => {
        return items.map(item => {
            return <li><a href='#'>{item}</a></li>
        })
    }

    const renderMainMenu = (items) => {
        return items.map(item => {
            return <div className={`main-menu-item ${item.style ? item.style : ""}`}>
                <a href='#'>{item.title}</a></div>
        })
    }

    return (
        <header className='header indented wrapped'>
            <div className='top-row'>
                <ul className='top-row-items'>
                    {renderTopRow(props.topRow)}
                </ul>
            </div>
            <div className='bottom-row'>
                    <a href='#' className='logo' style={{backgroundImage:`url(${props.logo})`}}>
                    </a>
                <div className='main-menu'>
                    {renderMainMenu(props.mainMenu)}
                </div>
            </div>
        </header>
    )
}

export default Header