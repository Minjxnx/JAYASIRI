import React from 'react'
import Navbar from '../AdminNavbar';
import Form from '../AdminStockUpdate';

function AdminStocksUpdate({adminAuth}) {
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

export default AdminStocksUpdate
