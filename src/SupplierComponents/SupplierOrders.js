import React,{useState} from 'react'
import './SupplierOrders.css'
import OrderView from '../SupplierComponents/SupplierPopups/SupplierOrderViewPopup';

function SupplierOrders() {

    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <div className='suppliermyorders-main'>
                <table className='suppliermyorders-table'>
                    <tr>
                        <th className='suppliermyorders-th'>Order ID</th>
                        <th className='suppliermyorders-th'>Date</th>
                        <th className='suppliermyorders-th'>Order Status</th>
                        <th className='suppliermyorders-th'>Action</th>
                    </tr>

                    <tr>
                        <td className='suppliermyorders-td'>12312312</td>
                        <td className='suppliermyorders-td'>2022/5/9</td>
                        <td className='suppliermyorders-td'>Pending</td>
                        <td className='suppliermyorders-td'>
                            <button onClick={() => setShowPopup(true)} className='suppliermyorders-button'>View</button>
                            <OrderView trigger={showPopup} setTrigger={setShowPopup}>
                                <h2 className='suppliermyorders-h2'>Order Details</h2>
                                <hr></hr>
                                <label className='suppliermyorders-label'>Order ID : </label>
                                <br></br>
                                <label className='suppliermyorders-label'>Qty : </label>
                                <br></br>
                                <label className='suppliermyorders-label'>Order Description : </label>
                                <br></br>
                                <label className='suppliermyorders-label'>Order Date : </label>
                                <br></br>
                                <hr></hr>
                                <br></br>
                                <h2 className='suppliermyorders-h2'>Add Price</h2>
                                <hr></hr>
                                <br></br>
                                <input className='suppliermyorders-input' type='number' placeholder='Price'></input>
                                <br></br>
                                <br></br>
                                <button className='suppliermyorders-button' >Add</button>
                                <br></br>
                                <br></br>
                                <hr></hr>
                                <br></br>
                                <h2 className='suppliermyorders-h2'>Order Status</h2>
                                <hr></hr>
                                <br></br>
                                <select className='suppliermyorders-select' >
                                    <option>Pending</option>
                                    <option value="Order Confirmed">Order Confirmed</option>
                                    <option value="Order Rejected">Order Rejected</option>
                                    <option value="Shipped">Shipped</option>
                                    <option value="Shipped">Ready to Ship</option>
                                </select>
                                <br></br>
                                <br></br>
                                <button className='suppliermyorders-button' >Update</button>
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

export default SupplierOrders
