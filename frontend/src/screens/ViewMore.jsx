import React from 'react'
import { Link } from 'react-router-dom';
export default function ViewMore() {
    const data=JSON.parse(localStorage.getItem("cardData"));
  return (
    <div style={{"display":"flex"}}>
        
        <img src={data.img} style={{"height":"500px","margin":"60px"}}/>
       <div style={{"textAlign":"center"}}><h1 style={{"margin":"0px 60px"}}>{data.name}</h1>
       <p className='m-3'>Rs. {data.price}</p>
        <button className='btn btn-success rounded m-3' ><Link to="https://wa.me/qr/4LS4RESPI4LFI1" style={{"textDecoration":"none" ,"color":"white"}}>Chat On WhatsApp</Link></button></div>

    </div>
  )
}
