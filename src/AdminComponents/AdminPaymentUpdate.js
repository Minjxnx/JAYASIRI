import React, { useState, useEffect } from 'react'
import './AdminPaymentUpdate.css'
import { useLocation } from 'react-router-dom'
import { db } from '../Firebase-config';
import { collection, query, getDocs, where, updateDoc, doc } from 'firebase/firestore';

function AdminPaymentUpdate() {

    const [payment, setPayment] = useState([]);
    const [scroll, setScroll] = useState(true);

    const [details, setDetails] = useState("");
    const [price, setPrice] = useState(0);

    const location = useLocation();
    const q1 = query(collection(db, "payments"), where("__name__", "==", location.state.aymentID));

    useEffect(() => {
        const getPayment = async () => {
            const data = await getDocs(q1);
            setPayment(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getPayment();
        if (scroll === true) {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            setScroll(false);
        }
    }, [scroll, q1])

    const editPayment = async () => {
        let confirmAction = window.confirm("Are you Sure to update the Payment ?");
        if (confirmAction) {
            const productDoc = doc(db, "payments", location.state.paymentID)
            const newFields = { details:details,price:Number(price) };
            await updateDoc(productDoc, newFields);
            alert("Payment Updated!");
        } else {
            alert("Canceled!");
        }
    }

    return (
        <div className='AdminPaymentUpdate'>
            {payment.map((pay) => {
                setDetails(pay.details)
                setPrice(pay.price)
                return (
                    <>
                        <div className='AdminPaymentUpdate-inner'>
                            <h2 className='AdminPaymentUpdate-h2'>Update Drug</h2>
                            <hr></hr>
                            <br></br>
                            <br></br>
                            <br></br>
                            <input defaultValue={pay.details} type="text" onChange={(e) => setDetails(e.target.value)} className='AdminPaymentUpdate-input' placeholder='Payment-Details' />
                            <br></br>
                            <br></br>
                            <input value={pay.price} type="number" onChange={(e) => setPrice(e.target.value)} className='AdminPaymentUpdate-input' placeholder='Price' />
                            <br></br>
                            <br></br>
                            <br></br>
                            <button onClick={editPayment} className='AdminPaymentUpdate-button'>Update</button>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default AdminPaymentUpdate
