import React from 'react'
import Navbar from '../AdminNavbar';
import Orders from '../AdminSupplierOrdersView';

function AdminSupplierOrdersView({adminAuth}) {
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

export default AdminSupplierOrdersView
