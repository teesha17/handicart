import React, { useEffect, useState } from 'react';
import Footer from '../components/footer/Footer.jsx';
import Navbar from '../components/navbar/Navbar.jsx';
import Card from '../components/card/Card.jsx';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

export default function Items() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 10000]);

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const handlePriceChange = value => {
    setPriceRange(value);
  };

  const loadData = async () => {
    try {
      let response = await fetch("https://handicart.onrender.com/api/foodData", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      response = await response.json();
      setFoodItem(response[0]);
      setFoodCat(response[1]);
    } catch (error) {
      console.error("Error loading data:", error);
      // Handle the error, show a message to the user, or retry the request
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='d-flex'>
        <div>
          <div className="px-4 py-5 my-0 text-center ">
            <form className="d-flex m-1" style={{ width: '100%', justifyContent: "flex-end" }}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={handleChange} />
            </form>
            <div className="d-flex m-1 flex-column" style={{ width: '100%', justifyContent: "center" }}>
              <h5>Price filter</h5>
              <Slider
                range
                min={0}
                max={10000}
                step={10}
                defaultValue={[1500, 10000]}
                value={priceRange}
                onChange={handlePriceChange}
                style={{ width: '100%' }}
              />
              <div className="d-flex justify-content-between " style={{ width: '100%' }}>
                <span>{priceRange[0]}</span>
                <span>{priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='container justify-content-center'>
          {foodCat.map(data => (
            <div className='row mb-3' key={data._id}>
              <div className='fs-3 m-3' style={{ color: "black" }}>{data.CategoryName}</div>
              <hr />
              {foodItem
                .filter(item => item.CategoryName === data.CategoryName)
                .filter(item => (item.name ? item.name.toLowerCase().includes(search.toLowerCase()) : false))
                .filter(item => item.price >= priceRange[0] && item.price <= priceRange[1])
                .map(filterItems => (
                  <div key={filterItems._id} className='col-12 col-md-3 col-lg-3'>
                    <Card foodItem={filterItems} />
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
