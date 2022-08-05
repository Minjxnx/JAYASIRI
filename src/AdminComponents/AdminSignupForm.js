import React from 'react'
import './AdminSignupForm.css';

function AdminSignupForm() {
  return (
    <>
      <div className="admin-signup-form-main">
                <div className="admin-signup-form-sub-main">
                    <div className="admin-signup-form-sub-sub-main">
                        <div className="admin-signup-form-imgs">
                            <div className="admin-signup-form-container-image">
                                <img src={process.env.PUBLIC_URL + "Logos/Sign-up.png"} alt="profile" className="admin-signup-form-profile" />
                            </div>
                        </div>
                        <div className='admin-signup-form-details'>
                            <h1 className='admin-signup-form-heading'>Admin Sign-up</h1>
                            <div className='admin-signup-form-details'>
                                <input type="text" placeholder="Email" className="admin-signup-form-name" />
                            </div>
                            <div className="admin-login-form-second-input">
                                <input type="password" placeholder="Password" className="admin-signup-form-name" />
                            </div>
                            <div className="admin-signup-form-login-button">
                                <button className='admin-signup-form-button'>Sign-up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default AdminSignupForm
