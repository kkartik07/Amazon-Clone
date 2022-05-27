import React from 'react'
import '../stylesheets/Payment.css'
import { useStateValue } from './StateProvider';

function Payment() {
    // eslint-disable-next-line
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='payment'>
            <div className='payment-container'>

                <div className='payment-section'>
                    <div className='delivery-address'>
                        <h2>delivery address</h2>
                        <h2>{user?.email}</h2>
                    </div>
                </div>

                <div className='payment-section'>
                    <div className='payment-items'>
                        <h2>review items</h2>
                    </div>
                </div>

                <div className='payment-section'>
                    <div className='payment-method'>
                        <h2>payment method</h2>
                    </div>
                </div>



            </div>


        </div>
    )
}

export default Payment
