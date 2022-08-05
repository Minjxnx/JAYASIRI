import React,{useState} from 'react'
import './AdminAddPayments.css'
import ShowPayment from '../AdminComponents/AdminPopups/AdminPaymentsUpdatePopup';

function AdminAddPayment() {

    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <div className="AdminAddPayments-main">
                <div className="AdminAddPayments-sub-main">
                    <div className="AdminAddPayments-sub-sub-main">
                        <div className='AdminAddPayments-details'>
                            <h1 className='AdminAddPayments-heading'>Add Other Payments</h1>
                            <div className='AdminAddPayments-details'>
                                <textarea type="text" placeholder="Payment Details" className="AdminAddPayments-name" />
                            </div>
                            <div className="AdminAddPayments-second-input">
                                <input type="text" placeholder="Amount" className="AdminAddPayments-name" />
                            </div>
                            <div className="AdminAddPayments-login-button">
                                <button className='AdminAddPayments-button'>Add Payment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='AdminSupplierOrdersView-main'>
                <table className='AdminSupplierOrdersView-table'>
                    <tr>
                        <th className='AdminSupplierOrdersView-th'>Payment ID</th>
                        <th className='AdminSupplierOrdersView-th'>Payment Details</th>
                        <th className='AdminSupplierOrdersView-th'>Amount</th>
                        <th className='AdminSupplierOrdersView-th'>Action</th>
                    </tr>

                    <tr>
                        <td className='AdminSupplierOrdersView-td'>12312312</td>
                        <td className='AdminSupplierOrdersView-td'>Drug Covers</td>
                        <td className='AdminSupplierOrdersView-td'>Rs. 5000</td>
                        <td className='AdminSupplierOrdersView-td'>
                            <button onClick={() => setShowPopup(true)} className='AdminAddPayments-btn'>Update</button>
                            <ShowPayment trigger={showPopup} setTrigger={setShowPopup}>
                                <h2 className='AdminStocksView-h2'>Update Drug</h2>
                                <hr></hr>
                                <br></br>
                                <br></br>
                                <br></br>
                                <input className='adminstocksview-input' placeholder='Payment-Details'/>
                                <br></br>
                                <br></br>
                                <input className='adminstocksview-input' placeholder='Price'/>
                                <br></br>
                                <br></br>
                                <br></br>
                                <button className='AdminStocksView-button'>Update</button>
                            </ShowPayment>
                            &nbsp;&nbsp;&nbsp;
                            <button className='AdminAddPayments-btn'>Delete</button>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default AdminAddPayment
