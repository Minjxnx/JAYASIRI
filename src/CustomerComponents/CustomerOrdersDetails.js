import React from 'react'
import './CustomerOrdersDetails.css'

function CustomerOrdersDetails() {

    

    return (
        <div className='CustomerOrderViewPopup'>
            <div className='CustomerOrderViewPopup-inner'>
                <h2 className='customermyorders-h2'>Order Details</h2>
                <hr></hr>
                <label className='customermyorders-label'>Order ID : </label>
                <br></br>
                <label className='customermyorders-label'>Qty : </label>
                <br></br>
                <label className='customermyorders-label'>Order Description : </label>
                <br></br>
                <label className='customermyorders-label'>Order Date : </label>
                <br></br>
                <label className='customermyorders-label'>Order Status : </label>
                <br></br>
                <label className='customermyorders-label'>Order Price : </label>
                <br></br>
                <hr></hr>
                <br></br>

                <br></br>
                <h2 className='customermyorders-h2'>Update Order Status</h2>
                <hr></hr>
                <br></br>
                <select className='customermyorders-select' >
                    <option></option>
                    <option value="Order Rejected">Order Received</option>

                </select>
                <br></br>
                <br></br>
                <button className='customermyorders-button' >Update</button>
                <br></br>
                <br></br>
                <hr></hr>
            </div>
        </div>
    )
}

export default CustomerOrdersDetails
