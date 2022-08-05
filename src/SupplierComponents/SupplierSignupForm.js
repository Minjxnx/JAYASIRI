import React from 'react'
import './SupplierSignupForm.css';

function SupplierSignupForm() {
  return (
    <>
      <div className="supplier-signup-form-main">
                <div className="supplier-signup-form-sub-main">
                    <div className="supplier-signup-form-sub-sub-main">
                        <div className="supplier-signup-form-imgs">
                            <div className="supplier-signup-form-container-image">
                                <img src={process.env.PUBLIC_URL + "Logos/Sign-up.png"} alt="profile" className="supplier-signup-form-profile" />
                            </div>
                        </div>
                        <div className='supplier-signup-form-details'>
                            <h1 className='supplier-signup-form-heading'>Supplier Sign-up</h1>
                            <div className='supplier-signup-form-details'>
                                <input type="text" placeholder="Company Name" className="supplier-signup-form-name" />
                            </div>
                            <div className="supplier-signup-form-second-input">
                                <input type="text" placeholder="Email" className="supplier-signup-form-name" />
                            </div>
                            <div className="supplier-signup-form-second-input">
                                <input type="password" placeholder="Password" className="supplier-signup-form-name" />
                            </div>
                            <div className="supplier-signup-form-login-button">
                                <button className='supplier-signup-form-button'>Sign-up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default SupplierSignupForm
