import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar.jsx';
import Footer from '../components/footer/Footer.jsx';

export default function AdminPage() {
    const [orders, setOrders] = useState([]);

    // Fetch all orders from the backend
    const fetchOrders = async () => {
        const response = await fetch("https://handicart.onrender.com/api/adminOrders", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json();
        setOrders(result.orders);
    };

    // Update order status
    const updateOrderStatus = async (email, orderIndex, newStatus) => {
        const response = await fetch(`https://handicart.onrender.com/api/updateOrderStatus`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, orderIndex, status: newStatus })
        });

        if (response.status === 200) {
            alert('Order status updated successfully!');
            fetchOrders(); // Refresh the orders list
        } else {
            alert('Failed to update order status');
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <h2 className="text-center">Admin: Manage All Orders</h2>
                {orders.length === 0 ? (
                    <p>No orders found</p>
                ) : (
                    orders.map((order) => (
                        <div key={order._id} className="card my-3">
                            <div className="card-header">
                                <h5>Customer: {order.email}</h5>
                            </div>
                            <div className="card-body">
                                {order.order_data.map((orderItem, index) => (
                                    <div key={index}>
                                        <h6>Order Date: {orderItem[0].Order_date}</h6>
                                        <ul>
                                            {orderItem.slice(1).map((item, i) => (
                                                <li key={i}>
                                                    {item.name} - ₹{item.price}
                                                </li>
                                            ))}
                                        </ul>
                                        <select
                                            className="form-select mt-2"
                                            value={orderItem.status || 'Order Placed'}
                                            onChange={(e) => updateOrderStatus(order.email, index, e.target.value)}
                                        >
                                            <option value="Order Placed">Order Placed</option>
                                            <option value="Start Order">Start Order</option>
                                            <option value="Finish Order">Finish Order</option>
                                            <option value="Out for Delivery">Out for Delivery</option>
                                            <option value="Delivered">Delivered</option>
                                        </select>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
            <Footer />
        </div>
    );
}
