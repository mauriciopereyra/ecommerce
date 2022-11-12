import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { account, cart, heart, heartFill, search } from './data/icons'
import './HeaderIcons.css'

const HeaderIcons = () => {
    const wishlist = useSelector(state => state.wishlist)

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
            <div className='header-icon wishlist'>
                <Link to='/wishlist'>
                    {wishlist.items.length ? heartFill : heart}
                </Link>
                {wishlist.items.length ? 
                <Link to="/wishlist"><span className='wishlist-number'>{wishlist.items.length}</span></Link> : ""}
            </div>
            <div className='header-icon'>
                <Link to='/cart'>
                    {cart}
                </Link>
            </div>
        </div>
    )
}

export default HeaderIcons