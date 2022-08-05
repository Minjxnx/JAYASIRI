import React from 'react'
import './AdminSuppliers.css'

function AdminSuppliers() {
    return (
        <>

            <div className='adminsuppliers-main'>
                <table className='adminsuppliers-table'>
                    <tr>
                        <th className='adminsuppliers-th'>Supplier ID</th>
                        <th className='adminsuppliers-th'>Supplier Email</th>
                        <th className='adminsuppliers-th'>Company Name</th>
                        <th className='adminsuppliers-th'>Action</th>
                    </tr>

                    <tr>
                        <td className='adminsuppliers-td'>12312312</td>
                        <td className='adminsuppliers-td'>@gmail.com</td>
                        <td className='adminsuppliers-td'>ABCD</td>
                        <td className='adminsuppliers-td'>
                            <button className='adminsuppliers-button'>Order</button>
                            <br></br>
                            <button className='adminsuppliers-button'>View Orders</button>
                            <br></br>
                            <button className='adminsuppliers-button'>Delete Supplier</button>
                        </td>
                    </tr>
                </table>
            </div>

        </>
    )
}

export default AdminSuppliers
