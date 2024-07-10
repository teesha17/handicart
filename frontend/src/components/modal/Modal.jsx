import React from 'react';
import { Link } from 'react-router-dom';
import './Modal.css';

const Modal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <img src={product.img} alt={product.name} className="modal-img"/>
        <p>{product.name} is added to your shopping cart.</p>
        <div className="modal-buttons">
          <button className="btn btn-light" onClick={onClose}>Continue Shopping</button>
          <Link to="/cart" className="btn btn-success">Go To Cart</Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
