import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'; 
import Home from './Components/Home';
import Chooser from './Components/Chooser';
import CustomerLogin from './CustomerComponents/CustomerPages/CustomerLogin';
import CustomerSignup from './CustomerComponents/CustomerPages/CustomerSignup';
import CustomerAddOrder from './CustomerComponents/CustomerPages/CustomerAddOrder';
import CustomerMyOrders from './CustomerComponents/CustomerPages/CustomerMyOrders';
import CustomerMyOrdersDetails from './CustomerComponents/CustomerPages/CustomerMyOrderDetails';
import SupplierLogin from './SupplierComponents/SupplierPages/SupplierLogin';
import SupplierSignup from './SupplierComponents/SupplierPages/SupplierSignup';
import SupplierMyOrders from './SupplierComponents/SupplierPages/SupplierMyOrders';
import AdminLogin from './AdminComponents/AdminPages/AdminLogin';
import AdminSignup from './AdminComponents/AdminPages/AdminSignup';
import AdminCustomerOrders from './AdminComponents/AdminPages/AdminCustomerOrders';
import AdminSuppliers from './AdminComponents/AdminPages/AdminSuppliers';
import AdminSupplierOrder  from './AdminComponents/AdminPages/AdminSupplierOrder';
import AdminSupplierOrdersView from './AdminComponents/AdminPages/AdminSupplierOrdersView';
import AdminAddStocks from './AdminComponents/AdminPages/AdminAddStocks';
import AdminStocksView from './AdminComponents/AdminPages/AdminStocks';
import AdminPayments from './AdminComponents/AdminPages/AdminPayments';
import AdminAddPayment from './AdminComponents/AdminPages/AdminAddPayment';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/chooseuser' element={<Chooser/>}/>
        <Route path='/customerlogin' element={<CustomerLogin/>}/>
        <Route path='/customersignup' element={<CustomerSignup/>}/>
        <Route path='/customeraddorder' element={<CustomerAddOrder/>}/>
        <Route path='/customermyorders' element={<CustomerMyOrders/>}/>
        <Route path='/customermyorderdetails' element={<CustomerMyOrdersDetails/>}/>
        <Route path='/supplierlogin' element={<SupplierLogin/>}/>
        <Route path='/suppliersignup' element={<SupplierSignup/>}/>
        <Route path='/suppliermyorders' element={<SupplierMyOrders/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/adminsignup' element={<AdminSignup/>}/>
        <Route path='/admincustomerorders' element={<AdminCustomerOrders/>}/>
        <Route path='/adminsuppliers' element={<AdminSuppliers/>}/>
        <Route path='/adminsupplierorder' element={<AdminSupplierOrder/>}/>
        <Route path='/adminsupplierordersview' element={<AdminSupplierOrdersView/>}/>
        <Route path='/adminaddstocks' element={<AdminAddStocks/>}/>
        <Route path='/adminstocksview' element={<AdminStocksView/>}/>
        <Route path='/adminpayments' element={<AdminPayments/>}/>
        <Route path='/adminaddpayments' element={<AdminAddPayment/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
