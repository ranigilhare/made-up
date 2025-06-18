import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Logo from '../../assets/images/logo.png';
// import UserAccount from '../../assets/images/user-account.png';
// import Cart from '../../assets/images/shopping_bag.png';

const Header = () => {
  return (
    <header className='shadow'>
        <div className="container">
            <Navbar expand="lg" className="">
                <Navbar.Brand href="/">
                    {/* <img src={Logo} alt="" width={60}/> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-auto my-2 my-lg-0"
                    navbarScroll
                >
                    <Nav.Link href="#action1">Mens</Nav.Link>
                    <Nav.Link href="#action2">Women</Nav.Link>
                    <Nav.Link href="#action2">Kids</Nav.Link>
                </Nav>
                <div className="nav-right d-flex">
                    <a href="" className='ms-3'>
                        {/* <img src={UserAccount} alt="" width={25} height={25} /> */}
                    </a>
                    <a href="" className='ms-2'>
                        {/* <img src={Cart} alt="" width={28} height={26} /> */}
                    </a>
                </div>
                
                </Navbar.Collapse>
            </Navbar>
        </div>
    </header>
  )
}

export default Header
