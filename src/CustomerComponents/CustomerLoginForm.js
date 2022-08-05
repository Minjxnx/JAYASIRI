import React from 'react';
import './CustomerLoginForm.css';

function CustomerLoginForm() {
    return (
        <>
            <div className="customer-login-form-main">
                <div className="customer-login-form-sub-main">
                    <div className="customer-login-form-sub-sub-main">
                        <div className="customer-login-form-imgs">
                            <div className="customer-login-form-container-image">
                                <img src={process.env.PUBLIC_URL + "Logos/Login.png"} alt="profile" className="customer-login-form-profile" />
                            </div>
                        </div>
                        <div className='customer-login-form-details'>
                            <h1 className='customer-login-form-heading'>Customer Login</h1>
                            <div className='customer-login-form-details'>
                                <input type="text" placeholder="Email" className="customer-login-form-name" />
                            </div>
                            <div className="customer-login-form-second-input">
                                <input type="password" placeholder="Password" className="customer-login-form-name" />
                            </div>
                            <div className="customer-login-form-login-button">
                                <button className='customer-login-form-button'>Login</button>
                            </div>
                            <div className='customer-login-logos'>
                                <div className='customer-login-single-logos'>
                                    <img alt='' src={process.env.PUBLIC_URL + "Logos/GoogleLogo.png"}></img>
                                </div>
                                <div className='customer-login-single-logos'>
                                    <img alt='' src={process.env.PUBLIC_URL + "Logos/FacebookLogo.png"}></img>
                                </div>
                                <div className='customer-login-single-logos4'>
                                    <img alt='' src={process.env.PUBLIC_URL + "Logos/TwitterLogo.png"}></img>
                                </div>
                            </div>
                            <p className="customer-login-form-link">
                                <a className='customer-login-form-a' href='/'>Forgot password ?</a> Or <a className='customer-login-form-a' href='/customersignup'>Sign Up ?</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerLoginForm
