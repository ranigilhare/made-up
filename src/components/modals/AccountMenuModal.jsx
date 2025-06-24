import React from 'react';
import '../../assets/css/account-menu-modal.scss';
import { Link } from 'react-router-dom';

export default function AccountMenuModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>

        <div className="section">
          <h4 className="section-title">MY PROFILE</h4>
          <ul>
            <li>
                <Link to="/my-profile" onClick={onClose}>My Profile</Link>
            </li>
            <li>My Wishlist</li>
            <li>
                <Link to="/my-orders" onClick={onClose}>My Orders</Link>
            </li>
            <li>My Addresses</li>
          </ul>
        </div>

        <hr />

        <div className="section">
          <h4 className="section-title">THE BRAND</h4>
          <ul>
            <li>The Made Up Story</li>
            <li>Franchise and Supplies</li>
            <li>Store Locator</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
