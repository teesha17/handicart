import React from 'react';
import Navbar from '../components/navbar/Navbar.jsx';
import './ViewMore.css'
export default function ViewMore() {
    const data = JSON.parse(localStorage.getItem("cardData"));

    return (
        <>
        <Navbar/>
        {/* <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <img src={data.img} className="img-fluid" alt={data.name} />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div>
                        <h1>{data.name}</h1>
                        <p className="m-3">Rs. {data.price}</p>
                        <button className="btn btn-success rounded m-3">
                            <Link to="https://wa.me/qr/4LS4RESPI4LFI1">Chat On WhatsApp</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div> */}

{/* <div class="wrapper">
    <div class="product-img">
      <img src={data.img} className='view-img'/>
    </div>
    <div class="product-info">
      <div class="product-text">
        <h1>{data.name}</h1>
        <h2>by Shefali's Creative Corner</h2>
        <p>Harvest Vases are a reinterpretation
        <br/> of peeled fruits and vegetables as<br/> functional objects. The surfaces<br/> appear to be sliced and pulled aside,<br/> allowing room for growth. </p>
      </div>
      <div class="product-price-btn">
        <p className='view-span'>Rs. {data.price}</p><br/>
        <button type="button"></button>
      </div>
    </div>
  </div> */}
        </>
    );
}



