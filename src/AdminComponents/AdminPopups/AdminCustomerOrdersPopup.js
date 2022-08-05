import React from 'react'
import './AdminCustomerOrdersPopup.css';

function AdminCustomerOrdersPopup(props) {
    return (props.trigger) ? (
        <div className='adminCustomerOrderViewPopup'>
            <div className='adminCustomerOrderViewPopup-inner'>
                <button onClick={() => props.setTrigger(false)} className='adminCustomerOrderViewPopup-closebtn'>Close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default AdminCustomerOrdersPopup
