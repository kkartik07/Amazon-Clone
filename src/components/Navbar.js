import React from 'react'
import '../stylesheets/Navbar.css'
import Logo from '../icons/logo.png'
import Search from '../icons/search.png'
import ShoppingBasket from '../icons/shopping-basket.png'
import { Link } from 'react-router-dom';
import { useStateValue } from '../components/StateProvider'
import { auth } from '../Firebase'


function Navbar() {
    const [{ basket, user },] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    const userName = (user) => {
        var name = user.email.substring(0, user.email.lastIndexOf('@'));
        return name;
    }
    return (

        <div className='navbar' >

            <div>
                <Link to='/' className='navbar-logo'>
                    <img alt='logo' src={Logo} />
                    <span className='navbar-brandname'>SnapKart</span>
                </Link>
            </div>

            <div className='navbar-search'>
                <input className='navbar-search-input' type='text' />
                <img src={Search} className='navbar-searcher' alt='search-icon' />
            </div>

            <div className='navbar-options'>
                <Link to={!user && '/login'}>
                    <div className='navbar-option' onClick={handleAuthentication}>
                        <span className='navbar-option-line1'>Hello {user ? userName(user) : 'Guest'}!</span>
                        <span className='navbar-option-line2'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <div className='navbar-option'>
                    <span className='navbar-option-line1'>Returns</span>
                    <span className='navbar-option-line2'> & Orders</span>
                </div>

                <div className='navbar-option navbar-cart'>
                    <span className='navbar-option-line1'>Your</span>
                    <span className='navbar-option-line2'>Cart</span>
                </div>
                <Link to='/checkout'>
                    <div className='navbar-optionBasket'>
                        <img src={ShoppingBasket} alt='shopping-basket' className='shopping-basket-icon' />
                        <span className="header__optionLineTwo navbar-basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Navbar
