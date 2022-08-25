import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import './CustomerNavbar.css';

function CustomerNavbar() {

    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo-word'>
                <img src="gs://jayasiri-pharmacy.appspot.com/Logo/PharmacyLogo.png" className='navbar-logo' alt='logo1' />
                   &nbsp;JAYASIRI Pharmacy
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/customeraddorder' className='nav-links' onClick={closeMobileMenu}>
                            Order
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/customermyorders' className='nav-links' onClick={closeMobileMenu}>
                            Order History
                        </Link>
                    </li>
                </ul>

            </div>
        </nav>
    </>
  )
}

export default CustomerNavbar
