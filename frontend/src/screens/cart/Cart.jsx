import React, { useEffect } from 'react';
import { useCart, useDispatchCart } from '../../components/contextReducer/ContextReducer.jsx';
import './Cart.css';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import { Link } from 'react-router-dom';
import { MdOutlineDelete } from "react-icons/md";

export default function Cart() {
  let data = JSON.parse(localStorage.getItem('cart')) || [];
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div>
        <Navbar/>
        <div style={{width:"100vw",textAlign:"center"}}>The Cart is Empty!</div>
      </div>
    );
  }

  const handleDelete = (index) => {
    let updatedData = data.filter((_, i) => i !== index);
    localStorage.setItem('cart', JSON.stringify(updatedData));
    dispatch({ type: 'REMOVE_ITEM', index });
    window.location.reload(); // Refresh to reflect changes
  };

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    let response = await fetch("https://handicart.onrender.com/api/orderData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });

    if (response.status === 200) {
      localStorage.removeItem('cart');

      // Construct the message with cart details
      let message = "Order Details:\n\n";
      data.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - Qty: ${item.qty}, Price: ${item.price}\n`;
      });
      message += `\nTotal Price: ${totalPrice}/-`;

      // Create WhatsApp URL
      let whatsappURL = `https://wa.me/91991223452?text=${encodeURIComponent(message)}`;

      // Open WhatsApp URL
      //window.open(whatsappURL, "_blank");

      // Redirect to the payment URL
      window.location.href = whatsappURL;
    }
  };

  let totalPrice = data.reduce((total, food) => total + parseInt(food.price), 0);

  return (
    <div>
      <Navbar/>
      <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md' style={{height:"100vh"}}>
        <table className='table'>
          <thead className='text-info fs-4'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Amount</th>
              <th scope='col'>trgrtb</th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td><img src={food.img} className='cart-img'></img></td>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.price}</td>
                <td><button type="button" className="remove" onClick={() => handleDelete(index)}><MdOutlineDelete/></button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2' style={{ color: 'black' }}>Total Price: {totalPrice}/-</h1></div>
        <div onClick={handleCheckOut}>
          <button className='btn bg-danger mt-5' onClick={handleCheckOut}>Checkout</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
