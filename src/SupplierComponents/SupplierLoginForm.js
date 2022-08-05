import React from 'react'
import './SupplierLoginForm.css'

function SupplierLoginForm() {
  return (
    <>
        <div className="supplier-login-form-main">
                <div className="supplier-login-form-sub-main">
                    <div className="supplier-login-form-sub-sub-main">
                        <div className="supplier-login-form-imgs">
                            <div className="supplier-login-form-container-image">
                                <img src={process.env.PUBLIC_URL + "Logos/Login.png"} alt="profile" className="supplier-login-form-profile" />
                            </div>
                        </div>
                        <div className='supplier-login-form-details'>
                            <h1 className='supplier-login-form-heading'>Supplier Login</h1>
                            <div className='supplier-login-form-details'>
                                <input type="text" placeholder="Email" className="supplier-login-form-name" />
                            </div>
                            <div className="supplier-login-form-second-input">
                                <input type="password" placeholder="Password" className="supplier-login-form-name" />
                            </div>
                            <div className="supplier-login-form-login-button">
                                <button className='customer-login-form-button'>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default SupplierLoginForm
