import React from 'react'
import Navbar from '../CustomerNavbar';
import Details from '../CustomerOrdersDetails';

function CustomerMyOrderDetails({ isAuth }) {
  return (
    <>
      {isAuth ? (
        <>
          <Navbar />
          <Details />
        </>
      ) : (<>
        {window.location.pathname = '/customerlogin'}
      </>)}
    </>
  )
}

export default CustomerMyOrderDetails
