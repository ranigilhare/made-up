import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import '../../assets/css/sidebar.scss';
import profile from '../../assets/images/shop-items/hero-one.jfif';
import OrderCard from '../pages/OrderCard';
import useIsMobile from '../../hooks/useIsMobile.js';
import MyProfile from '../pages/MyProfile.jsx';

const Sidebar = () => {
  const location = useLocation();
  const [showOrders, setShowOrders] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const isMobile = useIsMobile();

  const orders = [
    {
        id: '#12345678',
        title: 'Madeup White Cotton Blend Checkered Slim Fit Shirt',
        delivery: 'Express Delivery by Sat, Aug 30',
        status: 'Pending',
        price: 'Rs 1,899',
        payment: isMobile ? 'Cash on delivery' : 'Credit Card Payment',
    },
    {
        id: '#12345678',
        title: 'Madeup White Cotton Blend Checkered Slim Fit Shirt',
        delivery: 'Express Delivery by Sun, Aug 31',
        status: 'Pending',
        price: 'Rs 1,899',
        payment: isMobile ? 'Cash on delivery' : 'Credit Card Payment',
    },
    {
        id: '#12345678',
        title: 'Madeup White Cotton Blend Checkered Slim Fit Shirt',
        delivery: 'Express Delivery by Sun, Aug 16',
        status: 'Delivered',
        price: 'Rs 1,899',
        payment: isMobile ? 'Cash on delivery' : 'Credit Card Payment',
    },
    {
        id: '#12345678',
        title: 'Madeup White Cotton Blend Checkered Slim Fit Shirt',
        delivery: 'Express Delivery by Sat, Aug 15',
        status: 'Delivered',
        price: 'Rs 1,899',
        payment: isMobile ? 'Cash on delivery' : 'Credit Card Payment',
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
                <li className={(location.pathname === "/my-profile" || activeSection === 'profile') ? "active" : ""}>
                    <div className="clickable d-flex" onClick={() => setActiveSection(activeSection === 'profile' ? null : 'profile')}>
                    <span>My Profile</span>
                    <FontAwesomeIcon icon={activeSection === 'profile' ? "chevron-up" : "chevron-down"} className="ms-auto" />
                    </div>
                    <small>Notifications, password</small>

                    {/* Show Profile Form on Mobile */}
                    {activeSection === 'profile' && isMobile && (
                        <MyProfile/>
                    )}
                </li>

                {/* My Orders Section */}
                <li className={(location.pathname === "/my-orders" || activeSection === 'orders') ? "active" : ""}>
                    <div className="clickable d-flex" onClick={() => setActiveSection(activeSection === 'orders' ? null : 'orders')}>
                    <span>My Orders</span>
                    <FontAwesomeIcon icon={activeSection === 'orders' ? "chevron-up" : "chevron-down"} className="ms-auto" />
                    </div>
                    <small>Already have 12 orders</small>
                    
                    {activeSection === 'orders' && isMobile && (
                    <main className="mobile-orders">
                        <h4>Pending Orders</h4>
                        {orders.map((order, idx) => (
                        <OrderCard key={idx} order={order} />
                        ))}
                    </main>
                    )}
                </li>

                <li>
                    <div className="d-flex">
                    <span>Shipping addresses</span>
                    <FontAwesomeIcon icon="chevron-down" className="ms-auto" />
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
                <li className={(location.pathname === "/my-profile" || showProfile) ? "active" : ""}>
                    <Link to="/my-profile">
                        <div className="d-flex">
                        <span>My Profile</span>
                        <FontAwesomeIcon icon="chevron-right"  className="ms-auto"/>
                        </div>
                        <small>Notifications, password</small>
                    </Link>
                </li>
                <li className={(location.pathname === "/my-orders" || showOrders) ? "active" : ""}>
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
        <div className="tab-content mb-5">
            <h3 className="p-2 mb-0">My Orders</h3>
            {orders.map((order, idx) => (
            <OrderCard key={idx} order={order} />
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


