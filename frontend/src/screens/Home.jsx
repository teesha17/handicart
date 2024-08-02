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
import './Home.css'
import Navbar from '../components/navbar/Navbar.jsx';
import Footer from '../components/footer/Footer.jsx';
import Card from '../components/card/Card.jsx';


export default function Home() {
	const [search, setSearch] = useState('');
	const [foodCat, setFoodCat] = useState([]);
	const [foodItem, setFoodItem] = useState([]);
  
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
 {/* <section style={{margin:"2%"}}>
	<div class="row">
		{foodCat.map(data=>(
			<div class="col-md-2 col-sm-4 col-6" >
			<div class="card">
				<div class="cover item-a">
					<h1>{data.CategoryName}</h1>
				</div>
			</div>
		</div>
		))}
	</div>
</section> */}
<hr/>
 <section className='trending'>
	<br/><br/>
	<h1 className='headers'>TRENDING</h1><br/>
	<div>
			<div className='row'>
            {foodItem
              .filter(item => item.CategoryName === "trending")
              .map(filterItems => (
                
               
					<div className=' col-lg-3 col-md-4 col-sm-4 col-xs-4'>
						<Card foodItem={filterItems}/>
						</div>
               
				
              ))}
			   </div>
			 
	
	</div>

</section><hr/><br/>
<section className='trending'>
	<h1 className='headers'>NEW ARRIVALS</h1><br/>
	<div>
			<div className='row'>
            {foodItem
              .filter(item => item.CategoryName === "trending")
              .map(filterItems => (
                
               
					<div className=' col-lg-3 col-md-4 col-sm-4 col-xs-4'>
						<Card foodItem={filterItems}/>
						</div>
               
				
              ))}
			   </div> 
	</div>

</section>
<section className='trending'>
	<h1 className='headers'>NEW ARRIVALS</h1><br/>
	<div>
			<div className='row'>
            {foodItem
              .filter(item => item.CategoryName === "trending")
              .map(filterItems => (
                
               
					<div className=' col-lg-3 col-md-4 col-sm-4 col-xs-4'>
						<Card foodItem={filterItems}/>
						</div>
               
				
              ))}
			   </div>
			 
	
	</div>

</section>

{/* <section >
	<div class="grid-cont" style={{height:"100vh"}}>
		<div className='class1'>
			<h3>Long time at home renew it?</h3><br/>
			<h1>Jute long basket with white border</h1>
		</div>
		<div className='class4'>
		<div className='class2'></div>
		<div className='class3'></div>
		</div>
	</div>
 </section> */}


 <Footer/>

  </div>
  );
}