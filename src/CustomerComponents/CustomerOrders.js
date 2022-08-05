import React,{useState} from 'react'
import './CustomerOrders.css'
import OrderView from './CustomerPopups/CustomerOrderViewPopup';

function CustomerOrders() {

    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <div className='customermyorders-main'>
                <table className='customermyorders-table'>
                    <tr>
                        <th className='customermyorders-th'>Order ID</th>
                        <th className='customermyorders-th'>Date</th>
                        <th className='customermyorders-th'>Order Status</th>
                        <th className='customermyorders-th'>Price</th>
                        <th className='customermyorders-th'>Action</th>
                    </tr>

                    <tr>
                        <td className='customermyorders-td'>12312312</td>
                        <td className='customermyorders-td'>2022/5/9</td>
                        <td className='customermyorders-td'>Pending</td>
                        <td className='customermyorders-td'>-</td>
                        <td className='customermyorders-td'>
                            <button onClick={() => setShowPopup(true)} className='customermyorders-button'>View</button>
                            <OrderView trigger={showPopup} setTrigger={setShowPopup}>
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
                            </OrderView>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default CustomerOrders
