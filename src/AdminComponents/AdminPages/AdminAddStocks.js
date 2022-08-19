import React from 'react'
import Navbar from '../AdminNavbar';
import Form from '../AdminAddStocksForm';

function AdminAddStocks({adminAuth}) {
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

export default AdminAddStocks
