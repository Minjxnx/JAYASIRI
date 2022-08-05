import React from 'react'
import './AdminAddStocksForm.css';

function AdminAddStocksForm() {
    return (
        <>
            <div className="AdminAddStocksForm-main">
                <div className="AdminAddStocksForm-sub-main">
                    <div className="AdminAddStocksForm-sub-sub-main">
                        <div className='AdminAddStocksForm-details'>
                            <h1 className='AdminAddStocksForm-heading'>Add Stock</h1>
                            <div className='AdminAddStocksForm-details'>
                                <input type="text" placeholder="Drug Code" className="AdminAddStocksForm-name" />
                            </div>
                            <div className="AdminAddStocksForm-second-input">
                                <input type="text" placeholder="Drug Name" className="AdminAddStocksForm-name" />
                            </div>
                            <div className="AdminAddStocksForm-second-input">
                                <input type="text" placeholder="Price - Per Dozen" className="AdminAddStocksForm-name" />
                            </div>
                            <div className="AdminAddStocksForm-second-input">
                                <input type="text" placeholder="Qantity" className="AdminAddStocksForm-name" />
                            </div>
                            <div className="AdminAddStocksForm-login-button">
                                <button className='AdminAddStocksForm-button'>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminAddStocksForm
