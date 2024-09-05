import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatchCart, useCart } from '../contextReducer/ContextReducer.jsx';
import ViewMore from '../../screens/ViewMore.jsx';
import { json } from 'react-router-dom';
import './Card.css'
export default function Card(props) {
  let foodItem = props.foodItems; // Corrected prop name
  let dispatch = useDispatchCart();
  let data = useCart();
  const navigate=useNavigate();
  const handleAddCart = async () => {
    await dispatch({ type: "ADD", id: props.foodItem._id,name:props.foodItem.name, price: props.foodItem.price,img:props.foodItem.img }); // Access foodItem directly
        localStorage.setItem('cart', JSON.stringify(data));
    console.log(data);
  };
  const handleViewMore=async()=>{
     
    const cardData = {
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: props.foodItem.price,
      img: props.foodItem.img,
      display: props.foodItem.display,
      description: props.foodItem.description
    };
    const encodedProductName = encodeURIComponent(props.foodItem.name);
    navigate(`/viewmore/${encodedProductName}`);
    localStorage.setItem("cardData", JSON.stringify(cardData));
    console.log(localStorage.getItem("cardData"));
  }

  return (
    <div>
    <div class="container-card col-md-4 " style={{backgroundImage:`url(${props.foodItem.img})`}} >
      <div class = "items"></div>
    
  <div class="overlay">
  <button className='addtocart' onClick={handleViewMore}>View More</button>
  </div>
</div>
<div className='items'>
<div class = "head">
      <p>{props.foodItem.name}</p>
    
    </div>
    <div class = "price">
      <p>Rs. {props.foodItem.price}</p>

    </div>
    </div>
    </div>
  )
}