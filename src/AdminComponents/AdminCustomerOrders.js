import React,{useState} from 'react'
import './AdminCustomerOrders.css'
import OrderView from '../AdminComponents/AdminPopups/AdminCustomerOrdersPopup';

function AdminCustomerOrders() {

    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <div className='admincustomermyorders-main'>
                <table className='admincustomermyorders-table'>
                    <tr>
                        <th className='admincustomermyorders-th'>Order ID</th>
                        <th className='admincustomermyorders-th'>Customer Email</th>
                        <th className='admincustomermyorders-th'>Date</th>
                        <th className='admincustomermyorders-th'>Order Status</th>
                        <th className='admincustomermyorders-th'>Action</th>
                    </tr>

                    <tr>
                        <td className='admincustomermyorders-td'>12312312</td>
                        <td className='admincustomermyorders-td'>@gmail.com</td>
                        <td className='admincustomermyorders-td'>2022/5/9</td>
                        <td className='admincustomermyorders-td'>Pending</td>
                        <td className='admincustomermyorders-td'>
                            <button onClick={() => setShowPopup(true)} className='admincustomermyorders-button'>View</button>
                            <OrderView trigger={showPopup} setTrigger={setShowPopup}>
                                <h2 className='admincustomermyorders-h2'>Order Details</h2>
                                <hr></hr>
                                <label className='admincustomermyorders-label'>Order ID : </label>
                                <br></br>
                                <label className='admincustomermyorders-label'>Qty : </label>
                                <br></br>
                                <label className='admincustomermyorders-label'>Order Description : </label>
                                <br></br>
                                <label className='admincustomermyorders-label'>Order Date : </label>
                                <br></br>
                                <label className='admincustomermyorders-label'>Order Status : </label>
                                <br></br>
                                <label className='admincustomermyorders-label'>Order Price : </label>
                                <br></br>
                                <label className='admincustomermyorders-label'>Delivery Type : </label>
                                <br></br>
                                <label className='admincustomermyorders-label'>Address : </label>
                                <br></br>
                                <hr></hr>
                                <br></br>
                                
                                <br></br>
                                <h2 className='admincustomermyorders-h2'>Update Order Status</h2>
                                <hr></hr>
                                <br></br>
                                <select className='admincustomermyorders-select' >
                                    <option></option>
                                    <option value="Order Rejected">Order Confirmed</option>
                                    <option value="Order Rejected">Order Rejected</option>
                                    <option value="Order Rejected">Ready to Ship</option>
                                    <option value="Order Rejected">Shipped</option>
                                    <option value="Order Rejected">Order ready please come and pick</option>
                                    
                                </select>
                                <br></br>
                                <br></br>
                                <button className='admincustomermyorders-button' >Update</button>
                                <br></br>
                                <br></br>
                                <hr></hr>
                                <br></br>
                                
                                <br></br>
                                <h2 className='admincustomermyorders-h2'>Add Price</h2>
                                <hr></hr>
                                <br></br>
                                <input className='admincustomermyorders-input' placeholder='Price'/>
                                <br></br>
                                <br></br>
                                <button className='admincustomermyorders-button' >Add Price</button>
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

export default AdminCustomerOrders
