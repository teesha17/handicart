import React,{useState} from 'react'
import { Link ,json,useNavigate} from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

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
//     <div>
//       <>
//     <div className='container'>
//       <form onSubmit={handleSubmit}>
//   <div className="form-group">
//     <label htmlFor="exampleInputEmail1">Email address</label>
//     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={credentials.email} onChange={handleChange}/>
//     <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
//   <div className="form-group">
//     <label htmlFor="exampleInputPassword1">Password</label>
//     <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={credentials.password} onChange={handleChange}/>
//   </div>
//   <button type="submit" className="m-3 btn btn-success">Submit</button>
//   <Link to="/createuser" className='m-3 btn btn-danger'>Not a user?</Link>
// </form>
// </div>
//     </>
//     </div>
<div><Navbar/>
<div class="text-center" style={{display:'flex','justifyContent':"center",'alignItems':'center','height':'100vh'}}>
 
    
    <main class="form-signin" style={{width:'30vw'}}>
      <form onSubmit={handleSubmit}>
      <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="black" class="bi bi-balloon-heart" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063q.068.062.132.129.065-.067.132-.129c3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398"/>
</svg>
        <h1 class="h3 mb-3 fw-normal">WELCOME BACK</h1>
    
        <div class="form-floating">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email" value={credentials.email} onChange={handleChange}/>
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password" value={credentials.password} onChange={handleChange}/>
          <label for="floatingPassword">Password</label>
        </div>
    
        <div class="checkbox mb-3">
        
        </div>
        <button class="w-100 btn btn-lg btn-dark" type="submit">Log in</button>
        <Link to="/createuser" className='m-3 text-dark'>Not a user?</Link>
        <p class="mt-5 mb-3 text-muted">© 2024</p>
      </form>
    </main>
    </div>
    </div>
  )
}


