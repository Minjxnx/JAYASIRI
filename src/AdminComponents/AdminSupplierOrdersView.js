import React from 'react'
import './AdminSupplierOrdersView.css';

function AdminSupplierOrdersView() {
    return (
        <>

            <div className='AdminSupplierOrdersView-main'>
                <table className='AdminSupplierOrdersView-table'>
                    <tr>
                        <th className='AdminSupplierOrdersView-th'>Order ID</th>
                        <th className='AdminSupplierOrdersView-th'>Supplier ID</th>
                        <th className='AdminSupplierOrdersView-th'>Order Date</th>
                        <th className='AdminSupplierOrdersView-th'>Order Details</th>
                        <th className='AdminSupplierOrdersView-th'>Order Status</th>
                        <th className='AdminSupplierOrdersView-th'>Total Amount</th>
                    </tr>

                    <tr>
                        <td className='AdminSupplierOrdersView-td'>12312312</td>
                        <td className='AdminSupplierOrdersView-td'>12334657</td>
                        <td className='AdminSupplierOrdersView-td'>2022-05-22</td>
                        <td className='AdminSupplierOrdersView-td'>ABCDqwqweqweqdsvdsvvs</td>
                        <td className='AdminSupplierOrdersView-td'>Pending</td>
                        <td className='AdminSupplierOrdersView-td'>Rs. 5000</td>
                    </tr>
                </table>
            </div>

        </>
    )
}

export default AdminSupplierOrdersView
