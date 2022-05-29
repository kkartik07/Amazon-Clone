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
                    <Product title='Samsung Galaxy S23' price='999' image={ProductImage} />
                    <Product title='Samsung Galaxy S23' price='999' image={ProductImage} />
                </div>


                <div className='home-row'>
                    <Product title='Samsung Galaxy S23' price='999' image={ProductImage} />
                    <Product title='Samsung Galaxy S23' price='999' image={ProductImage} />
                    <Product title='Samsung Galaxy S23' price='999' image={ProductImage} />
                </div>

                <div className='home-row'>
                    <Product title='Samsung Galaxy S23' price='999' image={ProductImage} />
                </div>

            </div>
        </div>
    )
}

export default Home
