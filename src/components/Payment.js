import React from 'react'
import '../stylesheets/Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom'

function Payment() {
    // eslint-disable-next-line
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='payment'>
            <div className='payment-container'>
                <h1>
                    Checkout {<Link to='/checkout'>({basket?.length} items)</Link>}
                </h1>
                <div className='payment-section'>
                    <div className='payment-title'>
                        <h2>delivery address</h2>
                    </div>
                    <div className='payment-address'>
                        <h2>Hello {user ? user.email : 'Guest'}</h2>
                        <p>1-105/65 Plot No.5, Road No.5</p>
                        <p>Nagaram, hyderabad</p>
                    </div>
                </div>

                <div className='payment-section'>
                    <div className='payment-title'>
                        <h2>review items</h2>
                    </div>
                    <div className='payment-items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                            />
                        ))}
                    </div>
                </div>

                <div className='payment-section'>
                    <div className='payment-title'>
                        <h2>Payment method</h2>
                    </div>
                    <div className='payment-details'>
                        {/* *******stripe comes here****** */}
                    </div>
                </div>



            </div>


        </div>
    )
}

export default Payment
