import React from 'react'
import Navbar from '../AdminNavbar';
import Form from '../AdminSupplierOrderForm';

function AdminSupplierOrder({adminAuth}) {
  return (
    <>
      {adminAuth ? (<>
        <Navbar />
        <Form />
      </>) : (<>
        {window.location.pathname = '/adminlogin'}
      </>)}
    </>
  )
}

export default AdminSupplierOrder
