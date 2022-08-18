import React from 'react'
import Navbar from '../SupplierNavbar';
import Details from '../SupplierOrdersDetails';

function SupplierMyOrderDetails({supplierAuth}) {
  return (
    <>
    {supplierAuth?(<>
      <Navbar/>
      <Details/>
      </>):(<>
        {window.location.pathname = '/supplierlogin'}
      </>)}
    </>
  )
}

export default SupplierMyOrderDetails
