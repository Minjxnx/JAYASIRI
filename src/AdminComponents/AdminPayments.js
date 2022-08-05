import React from 'react'
import './AdminPayments.css'
import { Link } from 'react-router-dom';

function AdminPayments() {
    return (
        <>
            <div className='AdminPayments-btn'>
                <Link to='/adminaddpayments'>
                    <button className='AdminPayments-button'>Add other payments</button>
                </Link>
            </div>
            <div className='AdminPayments-main'>

                <div className='AdminPayments-submain'>
                    <table className='AdminPayments-table'>
                        <tr>
                            <th className='AdminPayments-th'>Order ID</th>
                            <th className='AdminPayments-th'>Customer ID</th>
                            <th className='AdminPayments-th'>Amount</th>
                        </tr>

                        <tr>
                            <td className='AdminPayments-td'>12312312</td>
                            <td className='AdminPayments-td'>56464645</td>
                            <td className='AdminPayments-td'>Rs. 1000</td>
                        </tr>
                    </table>
                </div>
                <div className='AdminPayments-submain'>
                    <table className='AdminPayments-table'>
                        <tr>
                            <th className='AdminPayments-th'>Order ID</th>
                            <th className='AdminPayments-th'>Supplier ID</th>
                            <th className='AdminPayments-th'>Amount</th>
                        </tr>

                        <tr>
                            <td className='AdminPayments-td'>12312312</td>
                            <td className='AdminPayments-td'>56464645</td>
                            <td className='AdminPayments-td'>Rs. 1000</td>
                        </tr>
                    </table>

                </div>
            </div>
        </>
    )
}

export default AdminPayments
