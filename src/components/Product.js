import React from 'react'
import '../stylesheets/Product.css'
// import product from '../images/product.jpg'

function Product(props) {
    return (
        <div className='product'>
            <div className='product-info'>
                <p>{props.title}</p>
                <small>$</small><strong>{props.price}</strong>
                <div className='product-rating'>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </div>
            <img src={props.image} alt='product' />
            <button className='product-button'>Add to cart</button>

        </div>
    )
}

export default Product
