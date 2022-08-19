import React from 'react'
import Navbar from '../AdminNavbar';
import Details from '../AdminCustomerOrdersDetails';

function AdminCustomerOrderDetails({adminAuth}) {
  return (
    <>
      {adminAuth ? (<>
        <Navbar />
        <Details />
      </>) : (<>
        {window.location.pathname = '/adminlogin'}
      </>)}
    </>
  )
}

export default AdminCustomerOrderDetails
