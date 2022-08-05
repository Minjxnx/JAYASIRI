import React from 'react';
import './CustomerSignupForm.css';

function CustomerSignupForm() {
  return (
    <>
        <div className="customer-signup-form-main">
                <div className="customer-signup-form-sub-main">
                    <div className="customer-signup-form-sub-sub-main">
                        <div className="customer-signup-form-imgs">
                            <div className="customer-signup-form-container-image">
                                <img src={process.env.PUBLIC_URL + "Logos/Sign-up.png"} alt="profile" className="customer-signup-form-profile" />
                            </div>
                        </div>
                        <div className='customer-signup-form-details'>
                            <h1 className='customer-signup-form-heading'>Customer Sign-up</h1>
                            <div className='customer-signup-form-details'>
                                <input type="text" placeholder="Email" className="customer-signup-form-name" />
                            </div>
                            <div className="customer-signup-form-second-input">
                                <input type="password" placeholder="Password" className="customer-signup-form-name" />
                            </div>
                            <div className="customer-signup-form-login-button">
                                <button className='customer-signup-form-button'>Sign-up</button>
                            </div>
                            <div className='customer-signup-logos'>
                                <div className='customer-signup-single-logos'>
                                    <img alt='' src={process.env.PUBLIC_URL + "Logos/GoogleLogo.png"}></img>
                                </div>
                                <div className='customer-signup-single-logos'>
                                    <img alt='' src={process.env.PUBLIC_URL + "Logos/FacebookLogo.png"}></img>
                                </div>
                                <div className='customer-signup-single-logos4'>
                                    <img alt='' src={process.env.PUBLIC_URL + "Logos/TwitterLogo.png"}></img>
                                </div>
                            </div>
                            <p className="customer-signup-form-link">
                                <a className='customer-signup-form-a' href='/customerlogin'>Login ?</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default CustomerSignupForm
