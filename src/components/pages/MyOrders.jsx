import React from 'react';
import '../../assets/css/orders.scss';
import profile from '../../assets/images/shop-items/hero-one.jfif';
import shirt from '../../assets/images/shop-items/hero-one.jfif';

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

const OrdersDashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="profile">
          <img src={profile} alt="User" />
          <h5>Grishk</h5>
          <p>griiskaim@gmail.com</p>
        </div>
        <nav>
          <ul>
            <li className="active">
              <span>My Profile</span>
              <small>Notifications, password</small>
            </li>
            <li>
              <span>My orders</span>
              <small>Already have 12 orders</small>
            </li>
            <li>
              <span>Shipping addresses</span>
              <small>3 addresses</small>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="orders">
        <h2>My Orders</h2>
        {orders.map((order, idx) => (
          <div key={idx} className="order-card">
            <img src={shirt} alt="shirt" />
            <div className="order-info">
              <p className="order-id">Order {order.id}</p>
              <p className="title">{order.title}</p>
              <p className="delivery">{order.delivery}</p>
            </div>
            <div className="order-payment">
              <p className="payment">{order.payment}</p>
              <p className="price">{order.price}</p>
              <div className={`status ${order.status.toLowerCase()}`}>{order.status}</div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default OrdersDashboard;
