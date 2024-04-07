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
  const handleAddToCart = async () => {
    await dispatch({ type: "ADD", id: props.foodItem._id,name:props.foodItem.name, price: props.foodItem.price,img:props.foodItem.img }); // Access foodItem directly
        localStorage.setItem('cart', JSON.stringify(data));
    console.log(data);
  };
  const handleViewMore=async()=>{
    navigate('/viewmore');
    const cardData = {
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: props.foodItem.price,
      img: props.foodItem.img
    };
  
    localStorage.setItem("cardData", JSON.stringify(cardData));
    console.log(localStorage.getItem("cardData"));
  }

  return (
    <div class="container-card" style={{backgroundImage:`url(${props.foodItem.img})`}} >
      
  <div class="overlay">
    <div class = "items"></div>
    <div class = "items head">
      <p>{props.foodItem.name}</p>
      <hr/>
    </div>
    <div class = "items price">
      <p class="new">Rs. {props.foodItem.price}</p>
     
    </div>
    <div class="items cart">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708"/>
</svg>

      <span onClick={handleAddToCart}>ADD TO CART</span>
      <span onClick={handleViewMore}>VIEW MORE</span>
      <br/>
      
  </div>
</div>
</div>
  )
}