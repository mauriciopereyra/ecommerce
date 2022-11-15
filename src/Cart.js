import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import './Cart.css'
import CartProduct from './CartProduct'
import { paymentMethods } from './data/images'
import productsList from './data/productsList'
import { formatCurrency } from './functions/formatCurrency'

const Cart = () => {

    const cart = useSelector(state => state.cart)
    console.log(cart)
    const navigate = useNavigate()

    const cartTotal = formatCurrency.format(cart.items.reduce((total,item) => {
        return total+parseInt(item.price.replace(",","").replace("$","").replace("฿",""))*item.quantity
    },0))

    const cartQuantity = cart.items.reduce((total,item) => {
        return total+item.quantity
    },0)

    const renderItems = (items) => {
        return items.map(item => {
            return <CartProduct product={item} />
        })
    }

    return (
        <div className="cart">
            <div className="cart-main">
                <div className="cart-text">
                    {cart.items.length ?
                    <>
                        <h1>YOUR BAG</h1>
                        <p>TOTAL ({cartQuantity} item{cartQuantity != 1 ? "s" : ""}) <span className="cart-price">{cartTotal}</span></p>
                        <p>Items in your bag are not reserved — check out now to make them yours.</p>
                    </> :
                    <>
                        <h1>YOUR BAG IS EMPTY</h1>
                        <p>Once you add something to your bag - it will appear here. Ready to get started?</p>
                        <Button type="button1 black" text="GET STARTED" onClick={() => navigate("/")}/>
                    </>
                }
                </div>
                <div className="cart-content">
                    {renderItems(cart.items)}
                </div>
            </div>
            <div className="cart-side">
                {cart.items.length ?
                    <div className="cart-summary">
                        <h2>ORDER SUMMARY</h2>
                        <div className="cart-summary-items">
                            <span>{cartQuantity} ITEM{cartQuantity != 1 ? "S" : ""}</span>
                            <span>{cartTotal}</span>
                        </div>
                        <div className="cart-summary-delivery">
                            <span>DELIVERY</span><span>FREE</span>
                        </div>
                        <div className="cart-summary-total">
                            <span className="cart-total">TOTAL</span><span className="cart-price">{cartTotal}</span>
                        </div>
                    </div>
                :
                ""}
                <div className="cart-payment_methods">
                    <h4>ACCEPTED PAYMENT METHODS</h4>
                    <img src={paymentMethods} alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default Cart