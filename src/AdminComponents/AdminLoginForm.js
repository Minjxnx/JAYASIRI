import React from 'react';
import './AdminLoginForm.css';

function AdminLoginForm() {
    return (
        <>
            <div className="admin-login-form-main">
                <div className="admin-login-form-sub-main">
                    <div className="admin-login-form-sub-sub-main">
                        <div className="admin-login-form-imgs">
                            <div className="admin-login-form-container-image">
                                <img src={process.env.PUBLIC_URL + "Logos/Login.png"} alt="profile" className="admin-login-form-profile" />
                            </div>
                        </div>
                        <div className='admin-login-form-details'>
                            <h1 className='admin-login-form-heading'>Admin Login</h1>
                            <div className='admin-login-form-details'>
                                <input type="text" placeholder="Email" className="admin-login-form-name" />
                            </div>
                            <div className="admin-login-form-second-input">
                                <input type="password" placeholder="Password" className="admin-login-form-name" />
                            </div>
                            <div className="admin-login-form-login-button">
                                <button className='admin-login-form-button'>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLoginForm
