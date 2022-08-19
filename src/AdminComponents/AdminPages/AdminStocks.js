import React from 'react'
import Navbar from '../AdminNavbar';
import View from '../AdminStocksView';

function AdminStocks({adminAuth}) {
  return (
    <>
      {adminAuth ? (<>
        <Navbar />
        <View />
      </>) : (<>
        {window.location.pathname = '/adminlogin'}
      </>)}
    </>
  )
}

export default AdminStocks
