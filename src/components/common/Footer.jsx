import React from 'react'
import Logo from '../../assets/images/icons/logo.png';
import Facebook from '../../assets/images/icons/facebook.svg'
import Instagram from '../../assets/images/icons/instagram.svg'
import Youtube from '../../assets/images/icons/youtube.svg'
import Email from '../../assets/images/icons/email.png'
import Phone from '../../assets/images/icons/phone.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { faTruck,faCreditCard,faMoneyBill} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className='py-5'>
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-4 pb-4">
                    <ul> 
                        <li>
                            <a href="">About Us</a>
                        </li>
                        <li>
                            <a href="">Delivery Information</a>
                        </li>
                        <li>
                            <a href="">Returns & Exchange</a>
                        </li>
                        <li>
                            <a href="">Technical & Privacy</a>
                        </li>
                        <li>
                            <a href="">Order Status</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 pb-4 text-center">
                    <img src={Logo} width={100} alt="" />
                    <ul className='mt-5'>
                        <li>
                            <a href="">Stay in touch with us</a>
                        </li>
                        <li className='d-flex social-icons justify-content-center gap-3'>
                            <span><a href=""><img src={Facebook} alt="" /></a></span>
                            <span><a href=""><img src={Instagram} alt="" /></a></span>
                            <span><a href=""><img src={Youtube} alt="" /></a></span>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 pb-4">
                    <h4 className='mb-3'>Our Corporate Office</h4>
                    <ul className='gap-3 d-grid'>
                        <li className='d-grid'>
                            <span>No: 7,A2B road, Adyar Rajpuram,</span>
                            <span>T-Nagar, Chennai - 642002.</span>
                        </li>
                        <li className='d-grid'>
                            <div className="d-flex gap-2">
                                <img src={Email} alt="" height={15} /><span>sales@madeup.com</span>
                            </div>
                            <div className="d-flex gap-2">
                                <img src={Phone} alt="" height={15} /><span>044 9999 9999</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
