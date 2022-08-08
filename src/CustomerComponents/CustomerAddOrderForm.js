import React, { useState } from 'react'
import './CustomerAddOrderForm.css';
import { getAuth } from 'firebase/auth';
import { db } from '../Firebase-config';
import { collection, addDoc } from 'firebase/firestore';

function CustomerAddOrderForm() {

    const [delivery, setDelivery] = useState("");
    const [orderDetails, setOrderDetails] = useState("");
    const [address, setAddress] = useState("");
    const [prescription, setPrescription] = useState([]);

    let today = new Date().toLocaleDateString();

    const auth = getAuth();
    const user = auth.currentUser;

    const customersCollectionRef = collection(db, "customerOrders");

    const order = async () => {
        await addDoc(customersCollectionRef, {orderPrice:Number() ,uId: user.uid, orderDate: Date(today), orderDetails: orderDetails, address: address, deliveryType: delivery, orderStatus:"Pending" });
        alert("Order Created Successfully!");
    }

    return (
        <>
            <div className="CustomerAddOrderForm-main">
                <div className="CustomerAddOrderForm-sub-main">
                    <div className="CustomerAddOrderForm-sub-sub-main">
                        <div className='CustomerAddOrderForm-details'>
                            <h1 className='CustomerAddOrderForm-heading'>Add Order</h1>
                            <div className='CustomerAddOrderForm-details'>
                                <input type="file" placeholder="file" className="CustomerAddOrderForm-name" />
                            </div>
                            <div className="CustomerAddOrderForm-second-input">
                                <textarea onChange={(event) => { setOrderDetails(event.target.value) }} type="text" placeholder="Order Details" className="CustomerAddOrderForm-name" />
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
                                        <textarea onChange={(event) => { setAddress(event.target.value) }} type="text" placeholder="Enter The Address" className="CustomerAddOrderForm-name" />
                                    </div>
                                </>
                            ) : (
                                <></>
                            )}
                            <div className="CustomerAddOrderForm-login-button">
                                <button onClick={order} className='CustomerAddOrderForm-button'>Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerAddOrderForm

