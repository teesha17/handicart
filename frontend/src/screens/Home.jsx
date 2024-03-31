import React,{useState} from 'react';
import './Home.css';
import Navbar from '../components/navbar/Navbar.jsx';
import Footer from '../components/footer/Footer.jsx';


export default function Home() {
  return (
    <div>
<Navbar/>
<h1 className='my-5'style={{textAlign:'center'}}>HAPPY SHOPPING!!</h1>
<div class="row my-5">

		<div class="col-md-4 col-sm-6 col-xs-12">
			<div class="card">
				<div class="cover item-a">
					<h1>Little<br/>Bonsai</h1>
					<span class="price">$79</span>
					<div class="card-back">
						
						<a>View More</a>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-4 col-sm-6 col-xs-12">
			<div class="card">
				<div class="cover item-b">
					<h1>Tropical<br/>Leaf</h1>
					<span class="price">$35</span>
					<div class="card-back">
						<a >View More</a>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-4 col-sm-6 col-xs-12">
			<div class="card">
				<div class="cover item-c">
					<h1>Marijuana<br/>Chill</h1>
					<span class="price">$155</span>
					<div class="card-back">
						<a >Add to cart</a>
					</div>
				</div>
			</div>
		</div>
	</div>
  <div style={{textAlign:"center"}}>
    <br/>
    <h2>BEST SELLERS</h2>
    <div className='latest'>
    <div class="container-home">
    
      <img className='img-latest' src="/img2.jpg" alt=""/>
      <img className='img-latest' src="/img1.jpg" alt=""/>
      <img className='img-latest' src="/img3.jpg" alt=""/>
      <img className='img-latest' src="/img2.jpg" alt=""/>
      <img className='img-latest' src="/img1.jpg" alt=""/>
      <img className='img-latest' src="/img3.jpg" alt=""/>
    </div>
</div>
  </div>

  <div style={{textAlign:"center"}}>
    <br/>
    <h2>TRENDING IN FASHION</h2>
    <div className='latest'>
    <div class="container-home">
    
      <img className='img-latest' src="/img2.jpg" alt=""/>
      <img className='img-latest' src="/img1.jpg" alt=""/>
      <img className='img-latest' src="/img3.jpg" alt=""/>
      <img className='img-latest' src="/img2.jpg" alt=""/>
      <img className='img-latest' src="/img1.jpg" alt=""/>
      <img className='img-latest' src="/img3.jpg" alt=""/>
    </div>
</div>
  </div>
  <h2 style={{textAlign:"center"}}>POPULAR FRONT DOOR NAMEPLATES</h2>



  <div class="row my-5">
    
		<div class="col-md-4 col-sm-6 col-xs-12">
			<div class="card">
				<div class="cover item-a">
					<h1>Little<br/>Bonsai</h1>
					<span class="price">$79</span>
					<div class="card-back">
						
						<a>View More</a>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-4 col-sm-6 col-xs-12">
			<div class="card">
				<div class="cover item-b">
					<h1>Tropical<br/>Leaf</h1>
					<span class="price">$35</span>
					<div class="card-back">
						<a >View More</a>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-4 col-sm-6 col-xs-12">
			<div class="card">
				<div class="cover item-c">
					<h1>Marijuana<br/>Chill</h1>
					<span class="price">$155</span>
					<div class="card-back">
						<a >Add to cart</a>
					</div>
				</div>
			</div>
		</div>
	</div>


  <div style={{textAlign:"center"}}>
    <br/>
    <h2>TRENDING IN FASHION</h2>
    <div className='latest'>
    <div class="container-home">
    
      <img className='img-latest' src="/img2.jpg" alt=""/>
      <img className='img-latest' src="/img1.jpg" alt=""/>
      <img className='img-latest' src="/img3.jpg" alt=""/>
      <img className='img-latest' src="/img2.jpg" alt=""/>
      <img className='img-latest' src="/img1.jpg" alt=""/>
      <img className='img-latest' src="/img3.jpg" alt=""/>
    </div>
</div>
  </div>

  <div style={{textAlign:"center"}}>
    <br/>
    <h2>TRENDING IN FASHION</h2>
    <div className='latest'>
    <div class="container-home">
    
      <img className='img-latest' src="/img2.jpg" alt=""/>
      <img className='img-latest' src="/img1.jpg" alt=""/>
      <img className='img-latest' src="/img3.jpg" alt=""/>
      <img className='img-latest' src="/img2.jpg" alt=""/>
      <img className='img-latest' src="/img1.jpg" alt=""/>
      <img className='img-latest' src="/img3.jpg" alt=""/>
    </div>
</div>
  </div>

  
 <Footer/>

  </div>
  );
}
