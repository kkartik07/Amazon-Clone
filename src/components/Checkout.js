import React from 'react'
import '../stylesheets/Checkout.css'
import checkoutAd from '../images/checkout-ad.png'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'

function Checkout() {

    // eslint-disable-next-line
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div>
            <div className='checkout'>
                <div className='checkout-left'>
                    <img src={checkoutAd} alt='checkout-ad' className='checkout-ad' />
                    <h2>Hello, {user ? user.email.substring(0, user.email.lastIndexOf('@')) : 'Guest'} :)</h2>
                    <hr />
                    <h2 className='checkout-title'>Your Cart</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
                </div>
                <div className='checkout-right'>
                    <Subtotal />
                </div>
            </div>
        </div>
    )
}

export default Checkout
