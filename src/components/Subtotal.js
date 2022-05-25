import React from 'react'
import '../stylesheets/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../components/StateProvider'


function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    // const basketValue = (basket) => {
    //     var price = 0;
    //     for (item in basket) {
    //         price += i.item.price;
    //     }
    //     return price;
    // }
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{basket.length}</strong>
                            <p>
                                <small>$</small>{ }
                            </p>
                        </p>
                        <small className='subtotal-gift'>
                            <input type='checkbox' />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button>Proceed to checkout </button>
        </div>
    )
}

export default Subtotal
