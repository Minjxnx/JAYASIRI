import React from 'react'
import AdminSignupForm from '../AdminSignupForm';
import AdminNavbar from '../AdminNavbar';

function AdminSignup({adminAuth}) {
  return (
    <>
      {adminAuth ? (<>
        <AdminNavbar />
        <AdminSignupForm />
      </>) : (<>
        {window.location.pathname = '/adminlogin'}
      </>)}
    </>
  )
}

export default AdminSignup
