import React from 'react'
import '../stylesheets/Product.css'
import { useStateValue } from './StateProvider'
// import product from '../images/product.jpg'

function Product(props) {
    const [{ basket, /* user */ }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: props.id,
                title: props.title,
                image: props.image,
                price: props.price,
                rating: props.rating
            }
        })
    }
    return (
        <div className='product box'>
            <div className='product-info'>
                <p>{props.title}</p>
                <small>Rs</small><strong>{props.price}</strong>
                <div className='product-rating'>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </div>
            <img src={props.image} alt='product' />
            <button /* disabled={!user} */ onClick={addToBasket} className='product-button'>Add to cart</button>

        </div>
    )
}

export default Product
