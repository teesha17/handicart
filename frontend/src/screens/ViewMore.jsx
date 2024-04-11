import React from 'react';
import Navbar from '../components/navbar/Navbar.jsx';
import { Link } from 'react-router-dom';
import { useParams,useNavigate } from 'react-router-dom';
import './ViewMore.css'
export default function ViewMore() {

    const data = JSON.parse(localStorage.getItem("cardData"));
    const { productName } = useParams();
    const navigate=useNavigate();
    const handleAddCart=()=>{
      const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        
      // Check if the product is already in the cart
      const isProductInCart = existingCartItems.some(item => item.id === data.id);
      
      if (!isProductInCart) {
          // If the product is not in the cart, add it
          const updatedCartItems = [...existingCartItems, data];
          localStorage.setItem('cart', JSON.stringify(updatedCartItems));
          navigate("/cart");
          
      } else {
          alert('Product is already in the cart!');
      }
    }
    
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
        </div>  */}

 <div class="wrapper">
    <div class="product-img">
      <img src={data.img} className='view-img'/>
    </div>
    <div class="product-info">
      <div class="product-text">
        <h1>{data.name}</h1>
        <h2>by Shefali's Creative Corner</h2>
        
      </div>
      <div class="product-price-btn">
        <p className='view-span'>Rs. {data.price}</p><br/>
        <button className="btn btn-success rounded " >
            <Link to="https://wa.me/qr/4LS4RESPI4LFI1" style={{textDecoration:"none",color:"white"}}>Order On WhatsApp</Link>
        </button>
        <button className="btn btn-success rounded my-3" onClick={handleAddCart}>
        Add to cart
        </button>
      </div>
    </div>
  </div> 
        </>
    );
}



