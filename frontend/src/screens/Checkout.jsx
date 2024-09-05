import { useState } from 'react';
import axios from 'axios';

function Checkout() {
    const handlePayment = async (e) => {
        e.preventDefault();
    
        try {
            const items = JSON.parse(localStorage.getItem('cart'));
    
            // Send items to the server
            const response = await fetch('http://localhost:8000/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ items }),
            });
    
            if (!response.ok) {
                const errorText = await response.text();
                console.error('Error:', errorText);
                return;
            }
    
            const data = await response.json();
    
            // Redirect user to PayPal for payment
            window.location.href = data.links[1].href;
    
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

  return (
    <div>
      <button onClick={handlePayment}>Proceed to Payment</button>
    </div>
  );
}

export default Checkout;
