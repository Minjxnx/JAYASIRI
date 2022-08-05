import React, { useState } from 'react'
import './CustomerAddOrderForm.css';

function CustomerAddOrderForm() {

    const [delivery, setDelivery] = useState("");

    return (
        <>
            <div className="CustomerAddOrderForm-main">
                <div className="CustomerAddOrderForm-sub-main">
                    <div className="CustomerAddOrderForm-sub-sub-main">
                        <div className='CustomerAddOrderForm-details'>
                            <h1 className='CustomerAddOrderForm-heading'>Add Order</h1>
                            <div className='CustomerAddOrderForm-details'>
                                <input type="file" placeholder="Email" className="CustomerAddOrderForm-name" />
                            </div>
                            <div className="CustomerAddOrderForm-second-input">
                                <textarea type="text" placeholder="Order Details" className="CustomerAddOrderForm-name" />
                            </div>
                            <br></br>
                            <hr></hr>
                            Delivery Type
                            <div className="CustomerAddOrderForm-second-input">
                                Delivery<br></br>
                                <input type="radio" name='delivery' value='Delivery' className="CustomerAddOrderForm-radio" onChange={(event) => { setDelivery(event.target.value); }} />
                            </div>
                            <div className="CustomerAddOrderForm-second-input">
                                Pick-up<br>
                                </br>
                                <input type="radio" name='delivery' value='Pick-up' className="CustomerAddOrderForm-radio" onChange={(event) => { setDelivery(event.target.value); }} />
                            </div>
                            {delivery === "Delivery" ? (
                                <>
                                    <div className="CustomerAddOrderForm-second-input">
                                        <textarea type="text" placeholder="Enter The Address" className="CustomerAddOrderForm-name" />
                                    </div>
                                </>
                            ) : (
                                <></>
                            )}
                            <div className="CustomerAddOrderForm-login-button">
                                <button className='CustomerAddOrderForm-button'>Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerAddOrderForm

