import React,{useState} from 'react'
import { Link ,json,useNavigate} from 'react-router-dom';
import Navbar from '../components/navbar/Navbar.jsx';

export default function Login() {
  const [credentials , setCredentials] = useState({
    email:"",
    password:"",
  })
let navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(JSON.stringify({
      email: credentials.email,
      password: credentials.password,}))
    const response =await fetch("https://handicart.onrender.com/api/loginuser",{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      email: credentials.email,
      password: credentials.password,
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
    <div>
      <>
    <div className='container d-flex justify-content-center align-items-center' style={{height:"100vh",width:""}}>
      <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={credentials.email} onChange={handleChange}/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={credentials.password} onChange={handleChange}/>
  </div>
  <button type="submit" className="m-3 btn btn-dark">Submit</button><br></br>
  <Link to="/createuser" className='m-3 btn btn-danger'>Not a user?</Link>
</form>
</div>
    </>
    </div>
  )
}


