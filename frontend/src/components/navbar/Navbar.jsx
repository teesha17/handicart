import React, { useState } from 'react'
import Badge from 'react-bootstrap/Badge';
import {Link ,useNavigate} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const navigate=useNavigate();
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
        <div style={{textAlign:"center"}}>
    <img src="/SHEFALI’S CREATIVE CORER (2).png" className='logo-ssc'></img>
    </div>
        <div className="navBar">
          <div className="hamburger" onClick={toggleMobileMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
         
          
          <div className={`navbar-items ${isMobileMenuOpen ? "mobilemenu" : ""}`}>
            <div className='navtext' onClick={closeMobileMenu}>
            <Link to='/' style={{textDecoration:"none",color:"black"}}>Home</Link>
            </div>
            <div className='navtext' onClick={closeMobileMenu}>
            <Link to='/items' style={{textDecoration:"none",color:"black"}}>Products</Link>
            </div>
            {(localStorage.getItem("authToken"))?
        <div className='navtext' onClick={closeMobileMenu}>
         <Link className="nav-link active text-black" aria-current="page" to="/myorder">My Orders</Link>
        </div>:""}



        {
            (localStorage.getItem("authToken"))?
            <>
              <div className="nav-link active text-black navtext">
              <Link to='/cart' style={{textDecoration:"none",color:"black"}}>My Cart</Link> <Badge pill bg="danger">{items.length}</Badge>
            </div>
            <div  className="nav-link active text-black navtext" onClick={handleLogout}>Logout</div> 
            </>
            : <>
                <div className='navtext' onClick={closeMobileMenu}>
            <Link to='/login'>Login</Link>
            </div>
            <div className='navtext' onClick={closeMobileMenu}>
            <Link to='/createuser'>SignIn</Link>
            </div></>
          }
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;


