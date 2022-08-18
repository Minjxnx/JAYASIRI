import React from 'react'
import NavBar from '../SupplierNavbar';
import SupplierOrders from '../SupplierOrders';

function SupplierMyOrders({ supplierAuth }) {
  return (
    <>
      {supplierAuth ? (<>
        <NavBar />
        <SupplierOrders />
      </>) : (<>
        {window.location.pathname = '/supplierlogin'}
      </>)}
    </>
  )
}

export default SupplierMyOrders
