// import React,{useState,useEffect} from 'react';
// import './Home.css'
// import Navbar from '../components/navbar/Navbar.jsx';
// import Footer from '../components/footer/Footer.jsx';

// import Card from '../components/card/Card.jsx';
// export default function Home() {
// 	const [search, setSearch] = useState('');
// 	const [foodCat, setFoodCat] = useState([]);
// 	const [foodItem, setFoodItem] = useState([]);
  
// 	const loadData = async () => {
// 	  try {
// 		let response = await fetch("https://handicart.onrender.com/api/foodData", {
// 		  method: "POST",
// 		  headers: {
// 			'Content-Type': 'application/json'
// 		  }
// 		});
// 		if (!response.ok) {
// 		  throw new Error('Failed to fetch data');
// 		}
// 		response = await response.json();
// 		console.log(response);
// 		setFoodItem(response[0]);
// 		setFoodCat(response[1]);
// 	  } catch (error) {
// 		console.error("Error loading data:", error);
// 		// Handle the error, show a message to the user, or retry the request
// 	  }
// 	};
  
// 	useEffect(() => {
// 	  loadData();
// 	}, []);
  







//   return (
//     <div>
// <Navbar/>  

// <section style={{padding:"3%"}}>
// 	<div class="row">
// 		{foodCat.map(data=>(
// 			<div class="col-md-2 col-sm-4 col-xs-4">
// 			<div class="card">
// 				<div class="cover item-a">
// 					<h1>{data.CategoryName}</h1>
// 				</div>
// 			</div>
// 		</div>
// 		))}
// 	</div>
// </section>

// <section>
// 	<div className='banner'>
// 		<button className='shopnow'>Shop Now</button>
// 	</div>
// </section>

// <section>
// 	<h1>TRENDING</h1>
// 	<div>
	
          
            
//             <hr />
// 			<div className='trending-row'>
//             {foodItem
//               .filter(item => item.CategoryName === "trending")
//               .map(filterItems => (
                
               
// 					<div className='col-md-4 col-sm-4 col-xs-4'>
// 						<img className="trending-images"src={filterItems.img}></img>
// 						<h2>{filterItems.name}</h2>
// 						</div>
               
				
//               ))}
// 			   </div>
			 
	
// 	</div>

// </section>
// <section>
	
// </section>



//  <Footer/>

//   </div>
//   );
// }




import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import Navbar from '../components/navbar/Navbar.jsx';
import Footer from '../components/footer/Footer.jsx';
import Card from '../components/card/Card.jsx';
import Carousel from '../components/carousel/Carousel.jsx';


export default function Home() {
	const [search, setSearch] = useState('');
	const [foodCat, setFoodCat] = useState([]);
	const [foodItem, setFoodItem] = useState([]);

	const slides = ["/img1.jpg","/disp2.jpg","/disp3.jpg","/img2.jpg"];
  
	const loadData = async () => {
	  try {
		let response = await fetch("https://handicart.onrender.com/api/foodData", {
			//let response = await fetch("http://localhost:3000/api/foodData", {
		  method: "POST",
		  headers: {
			'Content-Type': 'application/json'
		  }
		});
		if (!response.ok) {
		  throw new Error('Failed to fetch data');
		}
		response = await response.json();
		console.log(response);
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
    <div style={{width:"100vw"}}>
<Navbar/>  
<Carousel  />
<br/><br/>

	<h1 className='headers'>Explore Top Categories</h1>
            <section>
                <div className="row">
                    {foodCat.map(data => (
                        <div className="col-md-2 col-sm-4 col-6" key={data.id}>
                            <div className="card-home text-center">
                                <div className="cover">
                                    <Link to={data.route}><img src={data.imgUrl} alt={data.categoryName} className="img-fluid" /></Link>
                                </div>
                                <h4>{data.categoryName}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </section> 

 <Footer/>

  </div>
  );
}