import React, { useEffect, useState } from 'react';
import Footer from '../components/footer/Footer.jsx';
import Navbar from '../components/navbar/Navbar.jsx';
import Card from '../components/card/Card.jsx';
import Header from '../components/Header/Header.jsx';

export default function Home() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const handleChange = event => {
    setSearch(event.target.value);
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
    <>
      <Navbar />
   
      <div className='container mt-5' style={{ "height": "50vh" }}>
      <div class="px-4 py-5 my-0 text-center">
        
        <div class="col-lg-6 mx-auto">
          <h2 class=" mb-4">Build a home you just can't wait getting back to</h2>
          <p>Express Your Style and Create a Home that Reflects your Aesthetics</p>
        </div>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-success btn-text-primary btn-lg px-4">SHOP NOW</button>
        </div>
        <form class="d-flex m-5">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={handleChange}/>
            {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
        </form>
      </div>
    </div>
      <div className='container justify-content-center'>
        {foodCat.map(data => (
          <div className='row mb-3' key={data._id}>
            <div className='fs-3 m-3'>{data.CategoryName}</div>
            <hr />
            {foodItem
              .filter(item => item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLowerCase()))
              .map(filterItems => (
                <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                  <Card 
                  foodItem={filterItems}/>
                </div>
              ))}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
