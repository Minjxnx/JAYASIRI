import React from 'react'
import './AdminSupplierOrderForm.css';

function AdminSupplierOrderForm() {
  return (
    <>
            <div className="AdminSupplierOrderForm-main">
                <div className="AdminSupplierOrderForm-sub-main">
                    <div className="AdminSupplierOrderForm-sub-sub-main">
                        <div className='AdminSupplierOrderForm-details'>
                            <h1 className='AdminSupplierOrderForm-heading'>Add Order</h1>
                            <div className='AdminSupplierOrderForm-details'>
                                <input type="text" placeholder="Supplier ID" className="AdminSupplierOrderForm-name" />
                            </div>
                            <div className="AdminSupplierOrderForm-second-input">
                                <textarea type="text" placeholder="Order Details" className="AdminSupplierOrderForm-name" />
                            </div>
                            <br></br>
                            <div className="AdminSupplierOrderForm-login-button">
                                <button className='AdminSupplierOrderForm-button'>Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default AdminSupplierOrderForm
