import React from 'react'
import HomeBanner from '../images/home-banner.jpg'
import '../stylesheets/Home.css'
import Product from './Product'
import ProductImage from '../images/product.jpg'

function Home() {
    return (
        <div className='home'>
            <div className='home-container'>
                <img src={HomeBanner} alt='home-banner' className='home-banner' />


                <div className='home-row'>
                    <Product title='Samsung Galaxy S23' price='999' image={ProductImage} id="12321341" />
                    <Product title='Samsung Galaxy S23' price='999' image={ProductImage} id="12321341" />
                </div>


                <div className='home-row'>
                    <Product title='Samsung Galaxy S23' price='999' image={ProductImage} id="12321341" />
                    <Product title='Samsung Galaxy S23' price='999' image={ProductImage} id="12321341" />
                    <Product title='Samsung Galaxy S23' price='999' image={ProductImage} id="12321341" />
                </div>

                <div className='home-row'>
                    <Product title='Samsung Galaxy S23' price='999' image={ProductImage} id="12321341" />
                </div>

            </div>
        </div>
    )
}

export default Home
