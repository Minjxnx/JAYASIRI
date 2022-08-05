import React from 'react'
import './SupplierOrderViewPopup.css'

function SupplierOrderViewPopup(props) {
    return (props.trigger) ? (
        <div className='SupplierOrderViewPopup'>
            <div className='SupplierOrderViewPopup-inner'>
                <button onClick={() => props.setTrigger(false)} className='SupplierOrderViewPopup-closebtn'>Close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default SupplierOrderViewPopup
