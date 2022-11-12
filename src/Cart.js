import './Cart.css'
import { paymentMethods } from './data/images'

const Cart = () => {
    return (
        <div className="cart">
            <div className="cart-main">
                <div className="cart-text">
                    <h1>YOUR BAG</h1>
                    <p>TOTAL (3 items) <span className="cart-price">฿7,800</span></p>
                    <p>Items in your bag are not reserved — check out now to make them yours.</p>
                </div>
                <div className="cart-content"></div>
            </div>
            <div className="cart-side">
                <div className="cart-summary">
                    <h2>ORDER SUMMARY</h2>
                    <div className="cart-summary-items">
                        <span>3 ITEMS</span><span>฿7,800.00</span>
                    </div>
                    <div className="cart-summary-delivery">
                        <span>DELIVERY</span><span>FREE</span>
                    </div>
                    <div className="cart-summary-total">
                        <span className="cart-total">TOTAL</span><span className="cart-price"> ฿7,800.00</span>
                    </div>
                </div>
                <div className="cart-payment_methods">
                    <h4>ACCEPTED PAYMENT METHODS</h4>
                    <img src={paymentMethods} alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default Cart