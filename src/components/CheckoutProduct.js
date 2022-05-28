import React from 'react'
import '../stylesheets/CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct(props) {
    //eslint-disable-next-line
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = (basket) => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
        })
    }
    return (
        <div className='checkout-product'>
            <img src={props.image} alt='product' className='checkout-product-image' />
            <div className='checkout-product-info'>
                <p className='checkout-product-title'>{props.title}</p>
                <p className='checkout-product-price'><small>$</small>{props.price}</p>
                <button onClick={removeFromBasket}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
