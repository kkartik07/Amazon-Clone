import React from 'react'
import '../stylesheets/Checkout.css'
import checkoutAd from '../images/checkout-ad.png'
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div>
            <div className='checkout'>
                <div className='checkout-left'>
                    <img src={checkoutAd} alt='checkout-ad' className='checkout-ad' />
                    <hr />
                    <h2 className='checkout-title'>Your Cart</h2>
                </div>
                <div className='checkout-right'>
                    <Subtotal />
                </div>
            </div>
        </div>
    )
}

export default Checkout
