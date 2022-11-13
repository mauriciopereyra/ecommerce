import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { account, cart, cartFill, heart, heartFill, search } from './data/icons'
import './HeaderIcons.css'

const HeaderIcons = () => {
    const wishlist = useSelector(state => state.wishlist)
    const cartState = useSelector(state => state.cart)

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
            <div className='header-icon cart-icon'>
                <Link to='/cart'>
                    {cartState.items.length ? cartFill : cart}
                </Link>
                {cartState.items.length ? 
                <Link to="/cart"><span className='cart-number'>{cartState.items.length}</span></Link> : ""}
            </div>
        </div>
    )
}

export default HeaderIcons