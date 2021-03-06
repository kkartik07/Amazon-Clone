import React, { useState, useEffect } from 'react'
import '../stylesheets/Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct'
import { Link, useNavigate } from 'react-router-dom'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from '../axios.js';
import { db } from '../firebase'


function Payment() {
    // eslint-disable-next-line
    const [{ basket, user }, dispatch] = useStateValue();

    const navigate = useNavigate();
    //using Stripe
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //generate special stripe secret which allows us to charge a customer

        const getClientSecret = async () => {
            const res = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 75}`
            });
            setClientSecret(res.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log('THE SECRET IS >>> ', clientSecret)
    console.log('USER IS :>>>>>', user)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent=payment confirmation
            console.log('basket>>>', basket)
            console.log('2>>>', paymentIntent.amount)
            console.log('3>>>', paymentIntent.created)

            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created,
                })

            setSucceeded(true);
            setError(null);
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            navigate('/orders', { replace: true })
        })
    }

    const handleChange = (e) => {
        //Listen for changes in CardElement
        //and display any errors as the customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }
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
                        <h2>Hello {user ? user.email.substring(0, user.email.lastIndexOf('@')) : 'Guest'}</h2>
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

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className='payment-price'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"Rs"}
                                />
                                <button disabled={processing || disabled || succeeded} className='buy-now'>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>



            </div>


        </div>
    )
}

export default Payment
