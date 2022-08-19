import React from 'react'
import Navbar from '../AdminNavbar';
import Form from '../AdminPaymentUpdate';

function AdminPaymentsUpdate({adminAuth}) {
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

export default AdminPaymentsUpdate
