import React from 'react';
import './Banner.css'; // Importing the CSS

const Banner = () => {
  return (
    <div className="banner-container">
      <p className='banner-header'>Finest DIY Products Handcrafted for your Homes</p>
      <div className='d-flex flex-column px-2'>
        <div className='d-lg-flex justify-content-around'>
        <img src = "/banner1.png" className='img1 m-lg-2'/>
        <img src = "/banner2.png" className='img1 m-lg-2'/>
        </div>
        <img src = "/banner3.png" className='img2'/>
      </div>
    </div>
  );
};

export default Banner;

