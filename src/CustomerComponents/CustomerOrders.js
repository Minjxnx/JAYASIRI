import React,{useState} from 'react'
import './CustomerOrders.css'

function CustomerOrders() {


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
                            <button className='customermyorders-button'>View</button>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default CustomerOrders
