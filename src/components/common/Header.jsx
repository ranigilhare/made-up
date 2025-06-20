import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/images/icons/logo.png';
import UserAccount from '../../assets/images/icons/user-account.svg';
import Cart from '../../assets/images/icons/shopping-cart.svg';
import SearchIcon from '../../assets/images/icons/search.svg';

const Header = () => {
  return (
    <header className='shadow'>
        <div className="container px-5">
            <Navbar expand="lg" className="">
                <Navbar.Brand href="/">
                    <img src={Logo} alt="" width={100}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-auto me-lg-auto my-2 my-lg-0 d-flex gap-1 gap-lg-4"
                    navbarScroll
                >
                    <Nav.Link href="#action1">For Me</Nav.Link>
                    <Nav.Link href="#action2">Jeans</Nav.Link>
                    <Nav.Link href="#action2">Shirts</Nav.Link>
                    <Nav.Link href="#action2">T-Shirts</Nav.Link>
                    <Nav.Link href="#action2">Trousers</Nav.Link>
                    <Nav.Link href="#action2">Joggers</Nav.Link>
                    <Nav.Link href="#action2">Shorts</Nav.Link>
                </Nav>
                <div className="nav-right d-flex gap-2 justify-content-center">
                    <Link to="" className='ms-3'>
                        <img src={SearchIcon} alt="" width={25} height={25} />
                    </Link>
                    <Link to="" className='ms-2'>
                        <img src={Cart} alt="" width={23} height={23} />
                    </Link>
                    <Link to="/my-profile" className='ms-3'>
                        <img src={UserAccount} alt="" width={18} height={18} />
                    </Link>
                </div>
                
                </Navbar.Collapse>
            </Navbar>
        </div>
    </header>
  )
}

export default Header
