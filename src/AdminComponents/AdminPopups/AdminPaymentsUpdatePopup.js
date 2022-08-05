import React from 'react'
import './AdminPaymentsUpdatePopup.css'

function AdminPaymentsUpdatePopup(props) {
    return (props.trigger) ? (
        <div className='AdminPaymentsUpdatePopup'>
            <div className='AdminPaymentsUpdatePopup-inner'>
                <button onClick={() => props.setTrigger(false)} className='AdminPaymentsUpdatePopup-closebtn'>Close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default AdminPaymentsUpdatePopup
