import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatchCart, useCart } from '../contextReducer/ContextReducer.jsx';
import ViewMore from '../../screens/ViewMore.jsx';
import { json } from 'react-router-dom';
import './SearchItem.css'
export default function SearchItem(props) {
    let foodItem = props.foodItems; // Corrected prop name
    let dispatch = useDispatchCart();
    let data = useCart();
    const navigate=useNavigate();
    
    const handleViewMore=async()=>{
     
      const cardData = {
        id: props.foodItem._id,
        name: props.foodItem.name,
        price: props.foodItem.price,
        img: props.foodItem.img
      };
      const encodedProductName = encodeURIComponent(props.foodItem.name);
      navigate(`/viewmore/${encodedProductName}`);
      localStorage.setItem("cardData", JSON.stringify(cardData));
      console.log(localStorage.getItem("cardData"));
    }
  
  return (
    <div className='search-item' onClick={handleViewMore}>
        <img className='searchitem-img' src={props.foodItem.img}/>
        <div style={{display:"flex",flexDirection:"column"}}>
            <p>{props.foodItem.name} </p>
            <p>{props.foodItem.price}</p>
        </div>
    </div>
  )
}
