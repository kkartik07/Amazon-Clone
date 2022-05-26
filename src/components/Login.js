import React from 'react'
import '../stylesheets/Login.css'
import logo from '../icons/logo-big.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { auth } from '../Firebase.js'

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
            })
            .catch(error => alert(error.message))
    }
    const register = (e) => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))

    }
    return (
        <div className='login'>
            <Link to='/' className='login-logo'>
                <img src={logo} alt='logo' className='brand-logo' />
                <Link className='brandname' to='/'>SnapKart</Link>
            </Link>
            <hr />

            <div className='login-container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input type='text' className='input' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' className='input' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login-signin-btn' onClick={signIn}>Sign In</button>

                </form>
                <p className='login-notice'>By signing in you agree to SnapKart's terms and conditions of use & sale. Please check our privacy notice, our cookies notice and our Interest-based Ads notice.</p>
                <button type='submit' className='login-register-btn' onClick={register} redirect='/'>Create an account</button>
            </div>

        </div >
    )
}

export default Login
