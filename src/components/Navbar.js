import React from 'react'
import '../stylesheets/Navbar.css'
import Logo from '../icons/logo.png'
import Search from '../icons/search.png'

function Navbar() {
    return (
        <div className='navbar'>
            <img className='navbar-logo' alt='logo' src={Logo} />
            <span className='navbar-brandname'>SnapKart</span>
            <div className='navbar-search'>
                <input className='navbar-search-input' type='text' />
                <img src={Search} className='navbar-searcher' alt='search-icon' />
            </div>

            <div className='navbar-options'> 
                <div className='navbar-option'>
                    <span>Hello Kartik!</span>
                    <span>Sign In</span>
                </div>

                <div className='navbar-option'>
                    <span>Returns</span>
                    <span> & Orders</span>
                </div>

                <div className='navbar-option'>
                    <span>Your Cart</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
