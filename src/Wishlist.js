import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from './Button'
import productsList from './data/productsList'
import ProductListing from './ProductListing'
import './Wishlist.css'

const Wishlist = () => {

    const wishlist = useSelector(state => state.wishlist)

    const renderListings = (items) => {
        return items.map((item,index) =>  {
            return (
                <ProductListing key={index} visible={true} type="product" product={item} />
                )
        })
    }

    return (
        <div className='wishlist-container'>
            <div className='wishlist-title'>
                <h1>MY WISHLIST</h1>
                <h3>{wishlist.items.length} ITEM{wishlist.items.length != 1 ? "S" : ""}</h3>
                {!wishlist.items.length ?
                    <h3>You haven't saved any items to your wishlist yet. Start shopping and add your favorite items to your wishlist.</h3> 
                    : ""}
            </div>
            {wishlist.items.length ?
                <div className='wishlist-content'>
                    <div className='wishlist-items'>
                        {renderListings(wishlist.items)}
                    </div>
                    <div className='wishlist-text'>
                        <h2>DON'T LOSE YOUR WISHLIST</h2>
                        <p>Join the adiClub today and receive a 15% discount voucher for your first order. Or log in to save the item(s) so they won't be lost.</p>
                        <Button text="REGISTER" type="button2 register-button" />
                        <p>Already an adiClub member?</p>
                        <Link className='login-button' to="#">LOGIN</Link>
                    </div>
                </div> 
        : ""}
        </div>
    )
}

export default Wishlist