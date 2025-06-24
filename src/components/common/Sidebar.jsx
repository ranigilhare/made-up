import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import '../../assets/css/sidebar.scss';
import profile from '../../assets/images/shop-items/hero-one.jfif';
import OrderCard from '../pages/OrderCard';
import MyOrders from '../pages/MyOrders.jsx';
import useIsMobile from '../../hooks/useIsMobile.js';
import MyProfile from '../pages/MyProfile.jsx';

const Sidebar = () => {
  const location = useLocation();
  const [showOrders, setShowOrders] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
//   const isMobile = window.innerWidth <= 768;
  const isMobile = useIsMobile();
  console.log("isMobile", isMobile);

  const orders = [
    {
        id: '#12345678',
        title: 'Madeup White Cotton Blend Checkered Slim Fit Shirt',
        delivery: 'Express Delivery by Sat, Aug 30',
        status: 'Pending',
        price: 'Rs 1,899',
        payment: 'Credit Card Payment',
    },
    {
        id: '#12345678',
        title: 'Madeup White Cotton Blend Checkered Slim Fit Shirt',
        delivery: 'Express Delivery by Sun, Aug 31',
        status: 'Pending',
        price: 'Rs 1,899',
        payment: 'Credit Card Payment',
    },
    {
        id: '#12345678',
        title: 'Madeup White Cotton Blend Checkered Slim Fit Shirt',
        delivery: 'Express Delivery by Sun, Aug 16',
        status: 'Delivered',
        price: 'Rs 1,899',
        payment: 'Credit Card Payment',
    },
    {
        id: '#12345678',
        title: 'Madeup White Cotton Blend Checkered Slim Fit Shirt',
        delivery: 'Express Delivery by Sat, Aug 15',
        status: 'Delivered',
        price: 'Rs 1,899',
        payment: 'Credit Card Payment',
    },
];

  return (
    <div className="dashboard">
        <aside className="sidebar">
        <div className="profile d-flex">
            <img src={profile} alt="User" />
            <div className="text-left ms-3 mt-3">
            <h5>Grishk</h5>
            <p>griiskaim@gmail.com</p>
            </div>
        </div>
        {/* Show navbar on Mobile  */}
        {isMobile && (
            <nav >
                <ul>
                {/* My Profile Section */}
                <li className={location.pathname === "/my-profile" ? "active" : ""}>
                    <div className="clickable d-flex" onClick={() => setShowProfile(!showProfile)}>
                    <span>My Profile</span>
                    <FontAwesomeIcon icon={showProfile ? "chevron-up" : "chevron-down"} className="ms-auto" />
                    </div>
                    <small>Notifications, password</small>

                    {/* Show Profile Form on Mobile */}
                    {showProfile && isMobile && (
                        <MyProfile/>
                    // <div className="mobile-profile-form p-3">
                    //     <form className="profile-form">
                    //     <div className="form-row d-flex gap-3 mb-3">
                    //         <input type="text" placeholder="First name" className="form-control" />
                    //         <input type="text" placeholder="Last name" className="form-control" />
                    //     </div>
                    //     <div className="mb-3">
                    //         <input type="email" placeholder="Email" className="form-control" />
                    //     </div>
                    //     <div className="mb-3">
                    //         <input type="tel" placeholder="Phone number" className="form-control" />
                    //     </div>
                    //     <div className="mb-3">
                    //         <input type="password" placeholder="Password" className="form-control" />
                    //     </div>
                    //     <div className="mb-3">
                    //         <input type="password" placeholder="Confirm Password" className="form-control" />
                    //     </div>
                    //     <div className="text-end mt-3">
                    //         <button type="button" className="btn btn-dark px-3 py-2">
                    //         ADD NEW ADDRESS
                    //         </button>
                    //     </div>
                    //     </form>
                    // </div>
                    )}
                </li>

                {/* My Orders Section */}
                <li className={location.pathname === "/my-orders" ? "active" : ""}>
                    <div className="clickable d-flex" onClick={() => setShowOrders(!showOrders)}>
                    <span>My Ordersff</span>
                    <FontAwesomeIcon icon={showOrders ? "chevron-up" : "chevron-down"} className="ms-auto" />
                    </div>
                    <small>Already have 12 orders</small>
                    
                    {showOrders && isMobile && (
                    <div className="mobile-orders">
                        {orders.map((order, idx) => (
                        <MyOrders key={idx} order={order} />
                        ))}
                    </div>
                    )}
                </li>

                <li>
                    <div className="d-flex">
                    <span>Shipping addresses</span>
                    <FontAwesomeIcon icon="chevron-right" className="ms-auto" />
                    </div>
                    <small>3 addresses</small>
                </li>
                </ul>
            </nav>
        )}       

        {/* Show navbar on Mobile  */}
        {!isMobile && (
            <nav>
                <ul>
                <li className={location.pathname === "/my-profile" ? "active" : ""}>
                    <Link to="/my-profile">
                        <div className="d-flex">
                        <span>My Profile</span>
                        <FontAwesomeIcon icon="chevron-right"  className="ms-auto"/>
                        </div>
                        <small>Notifications, password</small>
                    </Link>
                </li>
                <li className={location.pathname === "/my-orders" ? "active" : ""}>
                    <Link to="/my-orders"><div className="d-flex">
                        <span>My Orders</span>
                        <FontAwesomeIcon icon="chevron-right"  className="ms-auto"/>
                        </div>
                        <small>Already have 12 orders</small>
                    </Link>
                </li>
                <li>
                    <div className="d-flex">
                    <span>Shipping addresses</span>
                    <FontAwesomeIcon icon="chevron-right"  className="ms-auto"/>
                    </div>
                    <small>3 addresses</small>
                </li>
                </ul>
            </nav>
            // 
        )}
        </aside>
        {!isMobile && location.pathname === "/my-orders" && (
        <div className="mobile-orders">
            {orders.map((order, idx) => (
            <MyOrders key={idx} order={order} />
            ))}
        </div>
        )}
        {!isMobile && location.pathname === "/my-profile" && (
            <MyProfile/>
        )}
    </div>
  );
};

export default Sidebar;


// import React from 'react'
// import '../../assets/css/sidebar.scss';
// import profile from '../../assets/images/shop-items/hero-one.jfif';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Link, useLocation } from 'react-router-dom';

// const Sidebar = () => {
//   const location = useLocation();
//   return (
//     <>
//         <div className="dashboard">
//             <aside className="sidebar">
//             <div className="profile d-flex">
//                 <img src={profile} alt="User" />
//                 <div className="text-left ms-3 mt-3">
//                 <h5>Grishk</h5>
//                 <p>griiskaim@gmail.com</p>
//                 </div>
//             </div>
//             <nav>
//                 <ul>
//                 <li className={location.pathname === "/my-profile" ? "active" : ""}>
//                     <Link to="/my-profile">
//                         <div className="d-flex">
//                         <span>My Profile</span>
//                         <FontAwesomeIcon icon="chevron-right"  className="ms-auto"/>
//                         </div>
//                         <small>Notifications, password</small>
//                     </Link>
//                 </li>
//                 <li className={location.pathname === "/my-orders" ? "active" : ""}>
//                     <Link to="/my-orders"><div className="d-flex">
//                         <span>My Orders</span>
//                         <FontAwesomeIcon icon="chevron-right"  className="ms-auto"/>
//                         </div>
//                         <small>Already have 12 orders</small>
//                     </Link>
//                 </li>
//                 <li>
//                     <div className="d-flex">
//                     <span>Shipping addresses</span>
//                     <FontAwesomeIcon icon="chevron-right"  className="ms-auto"/>
//                     </div>
//                     <small>3 addresses</small>
//                 </li>
//                 </ul>
//             </nav>
//             </aside>
//         </div>
//     </>
//   )
// }

// export default Sidebar

