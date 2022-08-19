import React from 'react'
import Navbar from '../AdminNavbar';
import Orders from '../AdminCustomerOrders';

function AdminCustomerOrders({ adminAuth }) {
  return (
    <>
      {adminAuth ? (<>
        <Navbar />
        <Orders />
      </>) : (<>
        {window.location.pathname = '/adminlogin'}
      </>)}
    </>
  )
}

export default AdminCustomerOrders
