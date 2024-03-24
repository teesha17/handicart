import React,{useState} from 'react';
import { useDispatchCart, useCart } from '../contextReducer/ContextReducer';
import Modal from '../../Modal';
import ViewMore from '../../screens/ViewMore';
import { json } from 'react-router-dom';
import './Card.css'
export default function Card(props) {
  let foodItem = props.foodItems; // Corrected prop name
  let dispatch = useDispatchCart();
  let data = useCart();
  const[cartView,setCartView]=useState(false);
  const handleAddToCart = async () => {
    await dispatch({ type: "ADD", id: props.foodItem._id,name:props.foodItem.name, price: props.foodItem.price,img:props.foodItem.img }); // Access foodItem directly
        localStorage.setItem('cart', JSON.stringify(data));
    console.log(data);
  };
  const handleViewMore=async()=>{
    setCartView(true);
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
    <div className='container-body'>
    <div className='card-container'>
      <div className="wrapper">
        <img src={props.foodItem.img} className="banner-image" style={{ "width": "100%", "height": "200px" }} alt="..." />
        
          <h1 className='name'>{props.foodItem.name}</h1>
          
            <p className='price'>Rs. {props.foodItem.price}</p>
         
          <hr />
          <div className='button-wrapper'>
          <button className="btn1 outline" onClick={handleAddToCart}>Add To Cart</button>
          <button className="btn1 fill" onClick={handleViewMore}>
              View More
            </button>
            {cartView? <Modal onClose={()=>{setCartView(false)}}><ViewMore/></Modal>:null}
            </div>
        </div>
        </div>
      </div>

  )
}


{/* <div class="container">
 <div class="wrapper">
   <img src={props.foodItem.img} class="banner-image"> </img>
   <h1>{props.foodItem.name}</h1>
   <p>Rs. {props.foodItem.price} <br/>
     consectetur adipiscing elit.</p>
  </div>
  <div class="button-wrapper"> 
  <button className="btn outline" onClick={handleAddToCart}>Add To Cart</button>
  <div className="btn bg-white text-success mx-1" onClick={handleViewMore}>
              View More
            </div>
            {cartView? <Modal onClose={()=>{setCartView(false)}}><ViewMore/></Modal>:null}
  </div>
    </div>
</div> */}














