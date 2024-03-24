import React from 'react';
import { Link } from 'react-router-dom';

export default function ViewMore() {
    const data = JSON.parse(localStorage.getItem("cardData"));

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={data.img} className="img-fluid" alt={data.name} />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div>
                        <h1>{data.name}</h1>
                        <p className="m-3">Rs. {data.price}</p>
                        <button className="btn btn-success rounded m-3">
                            <Link to="https://wa.me/qr/4LS4RESPI4LFI1"  style={{ "textDecoration": "none", "color": "white" }}>Chat On WhatsApp</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
