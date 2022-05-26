import React from 'react'
import '../stylesheets/Login.css'
import logo from '../icons/logo-big.png'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='login'>
            <Link to='/' className='login-logo'>
                <img src={logo} alt='logo' className='brand-logo' />
                <a className='brandname' to='/'>SnapKart</a>
            </Link>
            <hr />

            <div className='login-container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input type='text' className='input' />

                    <h5>Password</h5>
                    <input type='password' className='input' />

                    <button className='login-signin-btn'>Sign In</button>

                </form>
                <p className='login-notice'>By signing in you agree to SnapKart's terms and conditions of use & sale. Please check our privacy notice, our cookies notice and our Interest-based Ads notice.</p>
                <button className='login-register-btn'>Create an account</button>
            </div>

        </div>
    )
}

export default Login
