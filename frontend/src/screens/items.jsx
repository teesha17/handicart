import React, { useEffect, useState } from 'react';
import Footer from '../components/footer/Footer.jsx';
import Navbar from '../components/navbar/Navbar.jsx';
import Card from '../components/card/Card.jsx';
export default function items() {
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
    <div>
   <Navbar/>
       <div >
      <div class="px-4 py-5 my-0 text-center">
        
        
        <form class="d-flex m-1" style={{width:'25%',justifyContent:"flex-end"}}>
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={handleChange}/>
           
        </form>
      </div>
    </div>
      <div className=' container justify-content-center'>
        {foodCat.map(data => (
          <div className='row mb-3' key={data._id}>
            <div className='fs-3 m-3' style={{color:"black"}}>{data.CategoryName}</div>
            <hr />
            {foodItem
              .filter(item => item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLowerCase()))
              .map(filterItems => (
                <div key={filterItems._id} className='col-12 col-md-6 col-lg-6'>
                  <Card foodItem={filterItems}/>
                </div>
              ))}
          </div>
        ))}
      </div> 
<Footer/>
    </div>
  );
}
