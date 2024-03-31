// import React, { useState } from 'react'
// import Badge from 'react-bootstrap/Badge';
// import {Link ,useNavigate} from 'react-router-dom'
// import Modal from '../../Modal';
// import Cart from '../../screens/cart/Cart';
// import { useCart } from '../contextReducer/ContextReducer';
// import './Navbar.css'
// export default function Navbar() {
//   const navigate=useNavigate();
//   const[cartView,setCartView]=useState(false);
//   let items=JSON.parse(localStorage.getItem('cart')) || [];
//   const handleLogout=()=>{
//     localStorage.removeItem("authToken");
//     navigate("/login");
//   }
 
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark">
//   <div className="container-fluid">
//   <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-balloon-heart" viewBox="0 0 16 16">
//   <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063q.068.062.132.129.065-.067.132-.129c3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398"/>
// </svg>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon " style={{color:'black'}}></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav me-auto mb-2">
//         <li className="nav-item">
//           <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link active fs-5 text-black" aria-current="page" to="/items">Products</Link>
//         </li>
//         {(localStorage.getItem("authToken"))?
//         <li className="nav-item">
//         <Link className="nav-link active fs-5 text-black" aria-current="page" to="/myorder">My Orders</Link>
//       </li>:""}
//         {
//             (localStorage.getItem("authToken"))?
//             <div className='d-flex'>
//               <div className="nav-link active fs-5 text-black" onClick={()=>{setCartView(true)}}>
//               My Cart <Badge pill bg="danger">{items.length}</Badge>
//             </div>
//             {cartView? <Modal onClose={()=>{setCartView(false)}}><Cart/></Modal>:null}
//             <div className="nav-link active fs-5 text-black" onClick={handleLogout}>Logout</div> 
//             </div>
//             : <div className='d-flex'>
//               <li className='nav-item'><Link className="nav-link active fs-5 text-black" to="/login">Login</Link></li>
//            <li className='nav-item d-inline'><Link className="nav-link active fs-5 text-black" to="/createuser">Signup</Link></li>  </div>
//           }
//         </ul>
       
          
          
        
        
     
//     </div>
//   </div>
// </nav>
//     </div>
//   )
// }





import React, { useState } from 'react'
import Badge from 'react-bootstrap/Badge';
import {Link ,useNavigate} from 'react-router-dom'
import Modal from '../../Modal.jsx';
import Cart from '../../screens/cart/Cart.jsx';
import { useCart } from '../contextReducer/ContextReducer.jsx';
import './Navbar.css'

const Navbar = () => {
  const navigate=useNavigate();
  const[cartView,setCartView]=useState(false);
  let items=JSON.parse(localStorage.getItem('cart')) || [];
  const handleLogout=()=>{
    localStorage.removeItem("authToken");
    navigate("/login");
  }
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="navbar-fixed">
        <div className="navBar">
          <div className="hamburger" onClick={toggleMobileMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="jscop" id="jscop" style={{color:'black'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-balloon-heart" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063q.068.062.132.129.065-.067.132-.129c3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398"/>
 </svg>
            Shefali's Creative Corner
          </div>
          
          <div className={`navbar-items ${isMobileMenuOpen ? "mobilemenu" : ""}`}>
            <a onClick={closeMobileMenu}>
            <Link to='/' style={{color:'black'}}>Home</Link>
            </a>
            <a onClick={closeMobileMenu}>
            <Link to='/items' style={{color:'black'}}>Products</Link>
            </a>
            {(localStorage.getItem("authToken"))?
        <a onClick={closeMobileMenu}>
         <Link className="nav-link active fs-5 text-black" aria-current="page" to="/myorder">My Orders</Link>
        </a>:""}



        {
            (localStorage.getItem("authToken"))?
            <>
              <a className="nav-link active fs-5 text-black" onClick={()=>{setCartView(true)}}>
              My Cart <Badge pill bg="danger">{items.length+1}</Badge>
            </a>
            {cartView? <Modal onClose={()=>{setCartView(false)}}><Cart/></Modal>:null}
            <a className="nav-link active fs-5 text-black" onClick={handleLogout}>Logout</a> 
            </>
            : <>
                <a onClick={closeMobileMenu}>
            <Link to='/login' style={{color:'black'}}>Login</Link>
            </a>
            <a onClick={closeMobileMenu}>
            <Link to='/createuser' style={{color:'black'}}>SignIn</Link>
            </a></>
          }






            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;


