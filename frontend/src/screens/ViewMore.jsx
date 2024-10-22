// import React, { useState } from 'react';
// import Navbar from '../components/navbar/Navbar.jsx';
// import { Link, useParams, useNavigate } from 'react-router-dom';
// import Modal from '../components/modal/Modal.jsx';
// import './ViewMore.css';

// export default function ViewMore() {
//   const data = JSON.parse(localStorage.getItem("cardData")) || {}; // Ensure `data` is an object even if undefined
//   const { productName } = useParams();
//   const navigate = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);
  
//   // Check if data.images exists and has at least one image, else fallback to an empty array or a default image
//   const images = data.display && data.display.length > 0 ? data.display : [data.img || "defaultImage.jpg"];
//   const [displayedImage, setDisplayedImage] = useState(images[0]);

//   const handleAddCart = async () => {
//     const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];

//     // Check if the product is already in the cart
//     const isProductInCart = existingCartItems.some(item => item.id === data.id);

//     if (!isProductInCart) {
//       // If the product is not in the cart, add it
//       const updatedCartItems = [...existingCartItems, data];
//       localStorage.setItem('cart', JSON.stringify(updatedCartItems));
//       setIsModalOpen(true); // Open the modal
//     } else {
//       alert('Product is already in the cart!');
//     }
//   };

//   const handleImageClick = (img) => {
//     setDisplayedImage(img);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="wrapper">
//         <div className="product-img">
//         <div className="thumbnails">
//             {images.map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 className='thumbnail-img'
//                 alt={`Thumbnail ${index + 1}`}
//                 onClick={() => handleImageClick(img)}
//               />
//             ))}
//           </div>
//           <img src={displayedImage} className='view-img' alt={data.name || "Product Image"} />
//         </div>
//         <div className="product-info">
//           <div className="product-text">
//             <h1>{data.name}</h1>
//             <h2>by Shefali's Creative Corner</h2>
//           </div>
//           <div className="product-price-btn">
//             <p className='view-span'>Rs. {data.price}</p><br />
//           </div>
//           <div className="product-btns">
//             <button className="btn btn-success rounded">
//               <Link to="https://wa.me/919911223452" style={{ textDecoration: "none", color: "white" }}>Order On WhatsApp</Link>
//             </button>
//             <button className="btn btn-success rounded mx-3" onClick={handleAddCart}>
//               Add to cart
//             </button>
//           </div>
//         </div>
//       </div>
//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} product={data} />
//     </>
//   );
// }





import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar.jsx';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Modal from '../components/modal/Modal.jsx';
import './ViewMore.css';

export default function ViewMore() {
  const data = JSON.parse(localStorage.getItem("cardData")) || {}; // Ensure `data` is an object even if undefined
  const { productName } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for quantity and customization input
  const [quantity, setQuantity] = useState(1);
  const [customization, setCustomization] = useState("");

  // Check if data.images exists and has at least one image, else fallback to an empty array or a default image
  const images = data.display && data.display.length > 0 ? data.display : [data.img || "defaultImage.jpg"];
  const [displayedImage, setDisplayedImage] = useState(images[0]);

  const handleAddCart = async () => {
    const existingCartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product is already in the cart
    const isProductInCart = existingCartItems.some(item => item.id === data.id);

    if (!isProductInCart) {
      // If the product is not in the cart, add it with quantity and customization
      const updatedCartItems = [...existingCartItems, { ...data, qty: quantity, customization }];
      localStorage.setItem('cart', JSON.stringify(updatedCartItems));
      setIsModalOpen(true); // Open the modal
    } else {
      alert('Product is already in the cart!');
    }
  };

  const handleImageClick = (img) => {
    setDisplayedImage(img);
  };

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="product-img">
          <div className="thumbnails">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                className='thumbnail-img'
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleImageClick(img)}
              />
            ))}
          </div>
          <img src={displayedImage} className='view-img' alt={data.name || "Product Image"} />
        </div>
        <div className="product-info">
          <div className="product-text">
            <h1>{data.name}</h1>
            <h2>by Shefali's Creative Corner</h2>
            <p>{data.description}</p>
          </div>
          <div className="product-price-btn">
            <p className='view-span'>Rs. {data.price}</p><br />
          </div>
          
          {/* Quantity Selector */}
          <div className="quantity-selector">
  <p style={{display:"inline",marginRight:"30px"}}>Quantity:</p>
  <div className="quantity-controls">
    <button className="quantity-btn" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
    <input 
      type="number" 
      id="quantity" 
      min="1" 
      value={quantity} 
      onChange={(e) => setQuantity(parseInt(e.target.value))}
      style={{width:"50px",border:"none",textAlign:"center"}}
    />
    <button className="quantity-btn" onClick={() => setQuantity(quantity + 1)}>+</button>
  </div>
</div>
<div>
  <p style={{display:"inline",marginRight:"30px"}}>Subtotal: <span style={{fontWeight:"700"}}>Rs. {quantity*data.price}</span></p>
</div>
          
          {/* Customization Input */}
          <div className="customization-input">
            <p style={{display:"inline",marginRight:"30px"}}>Customization: </p>
            <textarea 
              id="customization" 
              value={customization} 
              onChange={(e) => setCustomization(e.target.value)}
              placeholder="Enter here"
              style={{height:'30px'}}
            />
          </div>

          <div className="product-btns">
            <button className='product-btn btn-1'>
              <Link to="https://wa.me/919911223452" style={{ textDecoration: "none", color: "white" }}>Order On WhatsApp</Link>
            </button>
            <button className='product-btn btn-2' onClick={handleAddCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} product={data} />
    </>
  );
}
