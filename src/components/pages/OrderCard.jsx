import React from 'react';
import '../../assets/css/orders.scss';
import shirt from '../../assets/images/shop-items/hero-one.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const OrderCard = ({ order }) => (
  <div className="order-section">
    
  <div className="order-card-mobile d-grid order-content align-items-start">
    <div className="order-card">
      <img src={shirt} alt="shirt" />
      <div className="order-info">
        <p className="order-id">Order {order.id}</p>
        <p className="title">{order.title}</p>
        <p className="delivery">{order.delivery}</p>
      </div>
      <div className="order-payment">
        <p className="payment">{order.payment}</p>
        <p className="price">{order.price}</p>
        <FontAwesomeIcon icon="chevron-down"  className="ms-auto chevron-desktop"/>
        <FontAwesomeIcon icon="chevron-right"  className="ms-auto chevron-mobile"/>
      </div>
    </div>
    <div className={`status ms-auto ${order.status.toLowerCase()}`}>{order.status}</div>
    </div>
  </div>
);

export default OrderCard;
