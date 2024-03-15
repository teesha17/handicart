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
    <div className='container'>
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
</div>
    </>
  )
}
