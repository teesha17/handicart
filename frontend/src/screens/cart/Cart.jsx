import React, { useEffect } from 'react';
import { useCart, useDispatchCart } from '../../components/contextReducer/ContextReducer.jsx';
import './Cart.css';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import { Link} from 'react-router-dom';
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
      window.location.href = "https://rzp.io/l/B97WEVpMK7";
    }
   
  };
 
  let totalPrice = data.reduce((total, food) => total + parseInt(food.price), 0);

  return (
    <div >
      <Navbar/>
      <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md' style={{height:"100vh"}} >
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
        <div><h1 className='fs-2' style={{ color: 'black' }}>Total Price: {totalPrice}/-</h1></div>
        <div onClick={handleCheckOut}>
          <button className='btn bg-danger mt-5' onClick={handleCheckOut}>Checkout</button>

          {/* <div class="razorpay-embed-btn" data-url="https://pages.razorpay.com/pl_Nu88U7cP7p40bJ/view" data-text="Pay Now" data-color="#528FF0" data-size="large" >
  <script>
    {(function(){
      var d=document; var x=!d.getElementById('razorpay-embed-btn-js')
      if(x){ var s=d.createElement('script'); s.defer=!0;s.id='razorpay-embed-btn-js';
      s.src='https://cdn.razorpay.com/static/embed_btn/bundle.js';d.body.appendChild(s);} else{var rzp=window['__rzp__'];
      rzp && rzp.init && rzp.init()}})()
    }
  </script>
</div> */}
    
        </div>
      </div>
      <Footer/>
    </div>
  );
}
