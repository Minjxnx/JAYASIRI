import React from 'react'
import './AdminStocksUpdatePopup.css'

function AdminStocksUpdatePopup(props) {
    return (props.trigger) ? (
        <div className='AdminStocksUpdatePupop'>
            <div className='AdminStocksUpdatePupop-inner'>
                <button onClick={() => props.setTrigger(false)} className='AdminStocksUpdatePupop-closebtn'>Close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default AdminStocksUpdatePopup
