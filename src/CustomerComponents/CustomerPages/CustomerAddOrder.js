import React from 'react'
import Navbar from '../CustomerNavbar';
import CustomerAddOrderForm from '../CustomerAddOrderForm';

function CustomerAddOrder({isAuth}) {
  return (
    <>
    { isAuth ?(
    <>
      <Navbar/>
      <CustomerAddOrderForm/>
    </>
    ):(
      <>
       {window.location.pathname = '/customerlogin'}
      </>
    )}
    </>
  )
}

export default CustomerAddOrder
