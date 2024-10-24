import React, { useEffect, useState } from 'react';
import Footer from '../components/footer/Footer.jsx';
import Navbar from '../components/navbar/Navbar.jsx';
import './MyOrder1.css';

export default function MyOrder() {
    const [orderData, setOrderData] = useState({});

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'));
        await fetch("https://handicart.onrender.com/api/myOrderData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json();
            await setOrderData(response);
        });
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

    return (
        <div>
            <Navbar />
            <div className='container1'>
                <div className='row1'>
                    {Object.keys(orderData).length !== 0 ? Array(orderData).map(data => {
                        return (
                            data.orderData ?
                                data.orderData.order_data.slice(0).reverse().map((item) => {
                                    return (
                                        item.map((arrayData) => {
                                            return (
                                                <div key={arrayData.id} className='col-lg-3 col-12'>
                                                    {arrayData.Order_date ? (
                                                        <div className='m-auto mt-5'>
                                                            <h2>Order Date: {arrayData.Order_date}</h2>
                                                            <hr />
                                                        </div>
                                                    ) : (
                                                        <div className='col-md-6 col-lg-3'>
                                                            <div className="card1 mt-3">
                                                                <img src={arrayData.img} className="card-img-top1" alt={arrayData.name} />
                                                                <div className="card-body1">
                                                                    <h5 className="card-title1">{arrayData.name}</h5>
                                                                    <div className='price-quantity1'>
                                                                        <span>{arrayData.Order_date}</span>
                                                                        <div className='d-inline ms-2'>
                                                                            ₹{arrayData.price}/-
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })
                                    );
                                }) :
                                <div className='no-orders1'>
                                    <h1>You do not have any orders</h1>
                                </div>
                        );
                    }) : ""}
                </div>
            </div>
            <Footer />
        </div>
    );
}
