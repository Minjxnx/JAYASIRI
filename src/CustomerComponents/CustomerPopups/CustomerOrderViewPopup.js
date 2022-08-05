import React from 'react'
import './CustomerOrderViewPopup.css'

function CustomerOrderViewPopup(props) {
    return (props.trigger) ? (
        <div className='CustomerOrderViewPopup'>
            <div className='CustomerOrderViewPopup-inner'>
                <button onClick={() => props.setTrigger(false)} className='CustomerOrderViewPopup-closebtn'>Close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default CustomerOrderViewPopup
