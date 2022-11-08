import { account, cart, heart, search } from './data/icons'
import './HeaderIcons.css'

const HeaderIcons = () => {
    return (
        <div className='right-side-menu'>
            {/* <div className='header-search-container'>
                <div className='header-search'>
                    <form>
                        <input placeholder='Search' type='text'></input>
                    </form>
                </div>
            </div>
            <div className='header-icon search-icon'>
                <a href='#'>
                    {search}
                </a>
            </div> */}
            <div className='header-icon account-icon'>
                <a href='#'>
                    {account}
                </a>
            </div>
            <div className='header-icon'>
                <a href='#'>
                    {heart}
                </a>
            </div>
            <div className='header-icon'>
                <a href='#'>
                    {cart}
                </a>
            </div>
        </div>
    )
}

export default HeaderIcons