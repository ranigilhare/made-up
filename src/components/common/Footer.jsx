import React from 'react'
// import Logo from '../../assets/images/logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { faTruck,faCreditCard,faMoneyBill} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className='py-5'>
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-3 pb-4 text-white">
                    {/* <img src={Logo} width={70} alt="" /> */}
                    <div className='pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>
                <div className="col-md-3 pb-4">
                    <h2 className='mb-3'>Categories</h2>
                    <ul>
                        <li>
                            <a href="">Kids</a>
                        </li>
                        <li>
                            <a href="">Men</a>
                        </li>
                        <li>
                            <a href="">Women</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 pb-4">
                    <h2 className='mb-3'>Quick Links</h2>
                    <ul>
                        <li>
                            <a href="">Login</a>
                        </li>
                        <li>
                            <a href="">Register</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 pb-4">
                    <h2 className='mb-3'>Get In Touch</h2>
                    <ul>
                        <li>
                            <a href="">+91-91XXXXXXX</a>
                        </li>
                        <li>
                            <a href="">info@example.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row spotlite py-5">
                <div className="col-md-4">
                    <div className="d-flex justify-content-center py-2">
                        {/* <FontAwesomeIcon icon={faTruck} className='text-white px-2 my-1' /> */}
                        <h3>Free Delivery</h3>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex justify-content-center py-2">
                        {/* <FontAwesomeIcon icon={faCreditCard } className='text-white px-2 my-1' /> */}
                        <h3>Money Back Guarantee</h3>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex justify-content-center py-2">
                        {/* <FontAwesomeIcon icon={faMoneyBill} className='text-white px-2 my-1' /> */}
                        <h3>Secure Payments</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <p className='text-white text-center p-5'>&copy; 2025 All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
