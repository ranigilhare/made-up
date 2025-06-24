import React from 'react';
import '../../assets/css/orders.scss';
import shirt from '../../assets/images/shop-items/hero-one.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MyAccount from './MyAccount';

const OrderCard = ({ order }) => (
  <main className="order-section">

  <div className="order-card-mobile d-flex order-content align-items-start p-2 my-2 shadow-sm rounded bg-white">
    {/* <img src={shirt} alt="shirt" height={50} width={50} className="me-2 rounded" />
    <div className="flex-grow-1">
      <p className="mb-1 text-muted small">Order {order.id} <span className="float-end">{order.price}</span></p>
      <p className="fw-bold mb-1 small">{order.title}</p>
      <p className="mb-1 text-muted small">{order.delivery}</p>
      <div className={`badge bg-${order.status === 'Pending' ? 'secondary' : 'success'}`}>
        {order.status}
      </div>
    </div>
    <FontAwesomeIcon icon="chevron-right" className="ms-2 mt-2 text-muted" /> */}

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

// const OrdersDashboard = () => {
//   return (
//     <>
//       <MyAccount>
//           <main className="order-section">
//             <h2>My Orders</h2>
//             {orders.map((order, idx) => (
//               <div key={idx} className="d-grid order-content">
//                 <div className="order-card">
//                   <img src={shirt} alt="shirt" />
//                   <div className="order-info">
//                     <p className="order-id">Order {order.id}</p>
//                     <p className="title">{order.title}</p>
//                     <p className="delivery">{order.delivery}</p>
//                   </div>
//                   <div className="order-payment">
//                     <p className="payment">{order.payment}</p>
//                     <p className="price">{order.price}</p>
//                     <FontAwesomeIcon icon="chevron-down"  className="ms-auto"/>
//                   </div>
//                 </div>
//                 <div className={`status ms-auto ${order.status.toLowerCase()}`}>{order.status}</div>

//               </div>
//             ))}
//           </main>
//       </MyAccount>
//     </>
//   );
// };

export default OrderCard;
