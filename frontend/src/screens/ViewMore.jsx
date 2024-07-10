import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar.jsx';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Modal from '../components/modal/Modal.jsx';
import './ViewMore.css';

export default function ViewMore() {
  const data = JSON.parse(localStorage.getItem("cardData"));
  const { productName } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCart = () => {
    const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    const isProductInCart = existingCartItems.some(item => item.id === data.id);

    if (!isProductInCart) {
      // If the product is not in the cart, add it
      const updatedCartItems = [...existingCartItems, data];
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
      setIsModalOpen(true); // Open the modal
    } else {
      alert('Product is already in the cart!');
    }
  }

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="product-img">
          <img src={data.img} className='view-img' alt={data.name} />
        </div>
        <div className="product-info">
          <div className="product-text">
            <h1>{data.name}</h1>
            <h2>by Shefali's Creative Corner</h2>
          </div>
          <div className="product-price-btn">
            <p className='view-span'>Rs. {data.price}</p><br />
            <button className="btn btn-success rounded">
              <Link to="https://wa.me/qr/4LS4RESPI4LFI1" style={{ textDecoration: "none", color: "white" }}>Order On WhatsApp</Link>
            </button>
            <button className="btn btn-success rounded my-3" onClick={handleAddCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} product={data} />
    </>
  );
}
