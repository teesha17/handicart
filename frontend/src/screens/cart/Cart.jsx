import React, { useState, useEffect } from 'react';
import { useDispatchCart } from '../../components/contextReducer/ContextReducer.jsx';
import './Cart.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import { MdOutlineDelete } from "react-icons/md";
import ConfirmationModal from './ConfirmationModal';

export default function Cart() {
  const [cartData, setCartData] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const [showModal, setShowModal] = useState(false);
  const [orderSummary, setOrderSummary] = useState('');
  const dispatch = useDispatchCart();
  const navigate = useNavigate(); // Use navigate for redirection
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartData));
  }, [cartData]);

  const handleDelete = (index) => {
    let updatedData = cartData.filter((_, i) => i !== index);
    setCartData(updatedData);
    dispatch({ type: 'REMOVE_ITEM', index });
  };

  const handleQuantityChange = (index, change) => {
    let updatedData = cartData.map((item, i) => 
      i === index ? { ...item, qty: Math.max(1, item.qty + change) } : item
    );
    setCartData(updatedData);
  };

  const handleCheckOut = () => {
    let summary = "Order Details:\n\n";
    cartData.forEach((item, index) => {
      summary += `${index + 1}. ${item.name} - Qty: ${item.qty}, Price: ${item.price}, Customization: ${item.customization}\n`;
    });
    summary += `\nTotal Price: ${totalPrice}/-`;
    setOrderSummary(summary);
    setShowModal(true); 
  };

  const handleConfirmOrder = async () => {
    let userEmail = localStorage.getItem("userEmail");
    let response = await fetch("https://handicart.onrender.com/api/orderData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: cartData,
        email: userEmail,
        order_date: new Date().toDateString(),
      })
    });

    if (response.status === 200) {
      let whatsappURL = `https://web.whatsapp.com/send?phone=919911223452&text=${encodeURIComponent(orderSummary)}`;
      window.open(whatsappURL, "_blank");
      localStorage.removeItem("cart");
      window.location.href = "/myorder";
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleViewMore = (product) => {
    const cardData = {
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      display: product.display,
      description: product.description
    };
    const encodedProductName = encodeURIComponent(product.name);
    navigate(`/viewmore/${encodedProductName}`);
    localStorage.setItem("cardData", JSON.stringify(cardData));
  };

  let totalPrice = cartData.reduce((total, item) => {
    const itemPrice = parseFloat(item.price);
    const itemQty = parseInt(item.qty, 10);
    return total + (itemPrice * itemQty);
  }, 0);

  return (
    <div>
      <Navbar />
      <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md' style={{ height: "100vh" }}>
        <table className='table'>
          <thead>
            <tr >
              <th className='thead-text' scope='col'>#</th>
              <th className='thead-text' scope='col'>Product</th>
              <th scope='col'>Name</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Amount</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((food, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                {/* Use onClick event on the image to call handleViewMore */}
                <td>
                  <img
                    src={food.img}
                    className='cart-img'
                    alt={food.name}
                    onClick={() => handleViewMore(food)} // Trigger the redirection on image click
                    style={{ cursor: 'pointer' }} // Add a pointer to show it's clickable
                  />
                </td>
                <td>{food.name}</td>
                <td >
                  <div className='cart-btns'>
                  <button className='cart-btn' onClick={() => handleQuantityChange(index, -1)}> - </button>
                  {food.qty}
                  <button className='cart-btn' onClick={() => handleQuantityChange(index, 1)}>+</button>
                  </div>
                </td>
                <td>{food.price * food.qty}</td>
                <td><button type="button" className="remove" onClick={() => handleDelete(index)}><MdOutlineDelete /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2' style={{ color: 'black' }}>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-danger mt-5' onClick={handleCheckOut}>Checkout</button>
        </div>
      </div>
      <Footer />
      <ConfirmationModal 
        show={showModal} 
        onClose={handleCloseModal} 
        onConfirm={handleConfirmOrder} 
        summary={orderSummary} 
      />
    </div>
  );
}
