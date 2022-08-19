import React from 'react'
import Navbar from '../AdminNavbar';
import Addpayment from '../AdminAddPayment';

function AdminAddPayment({adminAuth}) {
  return (
    <>
      {adminAuth ? (<>
        <Navbar />
        <Addpayment />
      </>) : (<>
        {window.location.pathname = '/adminlogin'}
      </>)}
    </>
  )
}

export default AdminAddPayment
