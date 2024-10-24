import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const images = [
        "/carousel4.png",
        "/carousel3.png",
        "/carousel4.png",
        "/carousel3.png",
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,          
        autoplaySpeed: 3000,     
        pauseOnHover: true,
    };

    return (
        <div style={{ width: '80vw', margin: '0 auto' }}>
            <Slider {...settings}>
                {images.map((img, idx) => (
                    <div key={idx}>
                        <img src={img} alt={`Slide ${idx}`} style={{ width: '100%', height: 'auto' }} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
