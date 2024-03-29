import React, { useState } from 'react'
import { Link,json,useNavigate } from 'react-router-dom'
export default function SignUp() 
{
  const navigate = useNavigate();
  const [credentials , setCredentials] = useState({
    name:"",
    email:"",
    password:"",
    location:""
  })


  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(JSON.stringify({name: credentials.name,
      email: credentials.email,
      password: credentials.password,
      location: credentials.location,}))
    const response =await fetch("https://handicart.onrender.com/api/createuser",{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      name: credentials.name,
      email: credentials.email,
      password: credentials.password,
      location: credentials.location,
    })
  });
  const jSon =  await response.json();
  console.log(jSon);

  if(!jSon.success){
    alert("enter valid credentials");
  }
  if(jSon.success){
    localStorage.setItem("userEmail",credentials.email);
    localStorage.setItem("authToken",json.authToken);
    console.log(localStorage.getItem("authToken"))
    navigate("/");
  }
  }

  const handleChange=(event)=>{
    setCredentials({...credentials,[event.target.name] : event.target.value})
  };

  return (
    <>
    {/* <div className='container'>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" id="exampleInputName" placeholder="Enter name" name="name" value={credentials.name} onChange={handleChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={credentials.email} onChange={handleChange}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={credentials.password} onChange={handleChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="address">Address</label>
    <input type="text" className="form-control"  placeholder="Address" name="location" value={credentials.location} onChange={handleChange}/>
  </div>
  
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to="/login" className='m-3 btn btn-danger'>Already a user?</Link>
</form>
</div> */}
<div className='container'>
<section className="position-relative h-100 pt-5 pb-4">
<div className="container d-flex flex-wrap justify-content-center justify-content-xl-center h-100 pt-5">
  <div className="w-100 align-self-end pt-1 pt-md-4 pb-4" style={{"max-width": "526px"}}>
    <h1 className="text-center text-xl-start">Welcome</h1>
    <form className="needs-validation mb-2" onSubmit={handleSubmit}>
      <div className="position-relative mb-4">
        <label for="email" className="form-label fs-base">Email</label>
        <input type="email" id="email" className="form-control form-control-lg" onChange={handleChange}/>
        <div className="invalid-feedback position-absolute start-0 top-100">Please enter a valid email address!</div>
      </div>
      <div className="mb-4">
        <label for="password" className="form-label fs-base">Password</label>
        <div className="password-toggle">
          <input type="password" id="password" className="form-control form-control-lg" value={credentials.password} onChange={handleChange}/>
          <label className="password-toggle-btn" aria-label="Show/hide password"></label>
          <div className="invalid-feedback position-absolute start-0 top-100">Please enter your password!</div>
        </div>
      </div>
      <button type="submit" className="btn btn-dark shadow-primary btn-lg w-100">Sign in</button>
      <Link to="/login" className='m-3 btn btn-danger'>Already a user?</Link>
    </form>
  <div className="w-100 align-self-end">
    <p className="nav d-block fs-xs text-center text-xl-start pb-2 mb-0">
      © All rights reserved. Made by Teesha Kakkar
     
    </p>    
  </div>
</div>
</div>


{/* <div className="position-absolute top-0 end-0 w-50 h-100 bg-position-center bg-repeat-0 bg-size-cover d-none d-xl-block" style={{"background-image": 'url("https://w0.peakpx.com/wallpaper/195/371/HD-wallpaper-aesthetic-purple-animated-buildings-aesthetic-purple-animated-buildings-moon-and-stars.jpg")',"background-size":"cover"}}></div> */}
</section>
</div>
    </>
  )
}



// <section className="position-relative h-100 pt-5 pb-4">
// <div className="container d-flex flex-wrap justify-content-center justify-content-xl-start h-100 pt-5">
//   <div className="w-100 align-self-end pt-1 pt-md-4 pb-4" style="max-width: 526px;">
//     <h1 className="text-center text-xl-start">Welcome Back</h1>
//     <p className="text-center text-xl-start pb-3 mb-3">Don't have an account yet? <a href="account-signup.html">Register here.</a></p>
//     <form className="needs-validation mb-2" onSubmit={handleSubmit}>
//       <div className="position-relative mb-4">
//         <label for="email" className="form-label fs-base">Email</label>
//         <input type="email" id="email" className="form-control form-control-lg" required="" onChange={handleChange}/>
//         <div className="invalid-feedback position-absolute start-0 top-100">Please enter a valid email address!</div>
//       </div>
//       <div className="mb-4">
//         <label for="password" className="form-label fs-base">Password</label>
//         <div className="password-toggle">
//           <input type="password" id="password" className="form-control form-control-lg" required="" value={credentials.password} onChange={handleChange}/>
//           <label className="password-toggle-btn" aria-label="Show/hide password">
//             <input className="password-toggle-check" type="checkbox"/>
//             <span className="password-toggle-indicator"></span>
//           </label>
//           <div className="invalid-feedback position-absolute start-0 top-100">Please enter your password!</div>
//         </div>
//       </div>
//       <button type="submit" className="btn btn-primary shadow-primary btn-lg w-100">Sign in</button>
//       <Link to="/login" className='m-3 btn btn-danger'>Already a user?</Link>
//     </form>
//   <div className="w-100 align-self-end">
//     <p className="nav d-block fs-xs text-center text-xl-start pb-2 mb-0">
//       © All rights reserved. Made by 
//       <a className="nav-link d-inline-block p-0" href="https://createx.studio/" target="_blank" rel="noopener">Createx Studio</a>
//     </p>    
//   </div>
// </div>

// </div>

// <div className="position-absolute top-0 end-0 w-50 h-100 bg-position-center bg-repeat-0 bg-size-cover d-none d-xl-block" style="background-image: url(assets/img/account/signin-bg.jpg);"></div>
// </section>