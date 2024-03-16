import React,{useState} from 'react';
import { useDispatchCart, useCart } from '../contextReducer/ContextReducer';
import Modal from '../../Modal';
import ViewMore from '../../screens/ViewMore';
import { json } from 'react-router-dom';
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
    <div className='d-inline'>
      <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
        <img src={props.foodItem.img} className="card-img-top" style={{ "width": "100%", "height": "200px" }} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <div className='container w-100'>
            {/* <select className='m-2 h-100 bg-success rounded'>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                )
              })}
            </select> */}
            <p className='d-inline'>Rs. {props.foodItem.price}</p>
          </div>
          <hr />
          <button className={`btn btn-success justify-center ms-2`} onClick={handleAddToCart}>Add To Cart</button>
          <div className="btn bg-white text-success mx-1" onClick={handleViewMore}>
              View More
            </div>
            {cartView? <Modal onClose={()=>{setCartView(false)}}><ViewMore/></Modal>:null}
        </div>
        </div>
      </div>
   
  )
}
















