import React from 'react'
import '../stylesheets/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../components/StateProvider'
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom'

function Subtotal() {
    // eslint-disable-next-line
    const [{ basket, user }, dispatch] = useStateValue();

    const navigate = useNavigate();

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):  <strong>{value}</strong>
                        </p>
                        <small className='subtotal-gift'>
                            <input type='checkbox' />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={'Rs '}
            />
            <button className='proceed-btn' disabled={!user} onClick={e => navigate('/payment')} >Proceed to checkout </button>
        </div>
    )
}

export default Subtotal
