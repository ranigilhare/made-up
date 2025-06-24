import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/images/icons/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AccountMenuModal from '../modals/AccountMenuModal';


const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  return (
    <header className='shadow'>
        <div className="container px-5">
            <Navbar expand="lg" className="">
                <Navbar.Brand href="/">
                    <img src={Logo} alt="" width={100}/>
                </Navbar.Brand>

                {/* Icons: show in small screens */}
                <div className="nav-icons-mobile d-flex d-lg-none align-items-center ms-auto me-2 gap-3">
                    <Link to="" className="me-2">
                    <FontAwesomeIcon icon="search" />
                    </Link>
                    <Link to="" className="me-2">
                    <FontAwesomeIcon icon="shopping-cart" />
                    </Link>

                    <button
                        className="btn p-0 border-0 bg-transparent d-lg-none"
                        onClick={() => {
                            console.log("Clicked menu icon");
                             setIsModalOpen(true);
                        }}
                        >
                        <FontAwesomeIcon icon="bars" size="lg" />
                    </button>
                <AccountMenuModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

                </div>
                
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto me-lg-auto my-2 my-lg-0 d-flex gap-1 gap-lg-4"
                        
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
                            <FontAwesomeIcon icon="search"  className="ms-auto"/>
                        </Link>
                        <Link to="" className='ms-2'>
                            <FontAwesomeIcon icon="shopping-cart"  className="ms-auto"/>
                        </Link>
                        {(location.pathname === '/my-profile' || location.pathname === '/my-orders') && (
                            <Link to="" className='ms-2'>
                                <FontAwesomeIcon icon="heart"  className="ms-auto"/>
                            </Link>
                        )}
                        <Link to="" className='ms-2' onClick={() => setIsModalOpen(true)} >
                            <FontAwesomeIcon icon="user"  className="ms-auto"/>
                        </Link>
                    </div>
                    <AccountMenuModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                    
                </Navbar.Collapse>
            </Navbar>
        </div>
    </header>
  )
}

export default Header
