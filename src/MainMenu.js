import './MainMenu.css'

const MainMenu = (props) => {

    const renderMainMenu = (items) => {
        return items.map((item,index) => {
            return <div key={index} className={`main-menu-item ${item.style ? item.style : ""}`}>
                <a href='#'>{item.title}</a></div>
        })
    }

    return (
        <div className='main-menu'>
            {renderMainMenu(props.mainMenu)}
        </div>
    )
}

export default MainMenu