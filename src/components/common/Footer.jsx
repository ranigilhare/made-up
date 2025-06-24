import React from 'react'
import Logo from '../../assets/images/icons/logo.png';
import Email from '../../assets/images/icons/email.png'
import Phone from '../../assets/images/icons/phone.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className='py-5'>
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-4 col-sm-12 pb-4">
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
                <div className="col-md-4 col-sm-12 pb-4 text-center">
                    <img src={Logo} width={100} alt="" />
                    <ul className='mt-5'>
                        <li>
                            <a href="">Stay in touch with us</a>
                        </li>
                        <li className='d-flex social-icons justify-content-center gap-3'>
                            <span><a href=""><FontAwesomeIcon icon={faFacebookF}  className="fs-6"/></a></span>
                            <span><a href=""><FontAwesomeIcon icon={faInstagram}  className="fs-5"/></a></span>
                            <span><a href=""><FontAwesomeIcon icon={faYoutube}  className="fs-5"/></a></span>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-12 pb-4">
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
