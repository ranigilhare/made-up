import React from 'react';
import '../../assets/css/orders.scss';
import shirt from '../../assets/images/shop-items/hero-one.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const OrderCard = ({ order }) => (
  <main className="order-section">

  <div className="order-card-mobile d-flex order-content align-items-start p-2 my-2 shadow-sm rounded bg-white">
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
        <FontAwesomeIcon icon="chevron-down"  className="ms-auto"/>
      </div>
    </div>
    <div className={`status ms-auto ${order.status.toLowerCase()}`}>{order.status}</div>

  </div>
  </main>
);

export default OrderCard;
