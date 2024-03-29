import React, { useEffect } from 'react';
import { useCart, useDispatchCart } from '../../components/contextReducer/ContextReducer';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
export default function Cart() {
  let data = JSON.parse(localStorage.getItem('cart')) || [];
  let dispatch = useDispatchCart();
  const navigate = useNavigate();

  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
      </div>
    );
  }

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
      dispatch({ type: "DROP" });
    }
    navigate("/payment");
  };
 
  let totalPrice = data.reduce((total, food) => total + parseInt(food.price), 0);

  return (
    <div>
      <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md' >
        <table className='table table-hover' style={{ backgroundColor: 'lightblue' }}>
          <thead className='text-info fs-4'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Quantity</th>
              
              <th scope='col'>Amount</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
               
                <td>{food.price}</td>
                <td><button type="button" className="btn btn-dark p-0" onClick={() => { dispatch({ type: "REMOVE", index: index }) }}>Remove</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2' style={{ color: 'white' }}>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-info mt-5' onClick={handleCheckOut}>Check Out</button>
        </div>
      </div>
    </div>
  );
}
