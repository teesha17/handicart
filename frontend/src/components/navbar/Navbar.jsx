import React, { useState,useEffect } from 'react'
import Badge from 'react-bootstrap/Badge';
import {Link ,useNavigate} from 'react-router-dom'
import SearchItem from '../searchItem/SearchItem';
import './Navbar.css'

// const Navbar = () => {
//   const navigate=useNavigate();
//   let items=JSON.parse(localStorage.getItem('cart')) || [];
//   const handleLogout=()=>{
//     localStorage.removeItem("authToken");
//     navigate("/login");
//   }
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };


//   const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);

//   const toggleSearchMenu = () => {
//     setIsSearchMenuOpen(!isSearchMenuOpen);
//   };

//   const closeSearchMenu = () => {
//     setIsSearchMenuOpen(false);
//   };

//   const [search, setSearch] = useState('');
//   const [foodCat, setFoodCat] = useState([]);
//   const [foodItem, setFoodItem] = useState([]);

//   const handleChange = event => {
//     setSearch(event.target.value);
//   };

//   const loadData = async () => {
//     try {
//       let response = await fetch("https://handicart.onrender.com/api/foodData", {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       response = await response.json();
//       setFoodItem(response[0]);
//       setFoodCat(response[1]);
//     } catch (error) {
//       console.error("Error loading data:", error);
//       // Handle the error, show a message to the user, or retry the request
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   return (
//     <div style={{display:"flex",flexDirection:"column" ,width:"100vw"}}> 
//     <div class="top">
//     <p>Check out our latest products </p>
//    <Link to='/items'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-arrow-right" viewBox="0 0 16 16">
// <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
// </svg></Link> 
//   </div>

//     <div>

   
//       <div className="navbar-fixed" style={{display:"flex",justifyContent:"center",flexDirection:"column",height:"30vh"}}>
//     <div className='top-next'>
//       <div >
//     <svg onClick={toggleSearchMenu} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
//   <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
// </svg>
// {
//   (isSearchMenuOpen?
//   <div className='searchBar'>
//    <div className={` searchbar-items ${isSearchMenuOpen ? "mobilemenu" : ""}`}>
//           <input class="form-control " type="search" placeholder="Search" aria-label="Search" value={search} onChange={handleChange}/>
//           <svg onClick={closeSearchMenu} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
//   <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
// </svg>
//         </div></div>:<></>)
// }
// </div>
//     <img src="/SHEFALI’S CREATIVE CORER (2).png" className='logo-ssc'></img>
//     {
//       (localStorage.getItem('authToken'))?
//       <div><Link to='/cart'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" class="bi bi-bag" viewBox="0 0 16 16">
//       <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
//     </svg></Link><Badge pill bg="dark" style={{position:"absolute"}}>{items.length}</Badge></div>:<></>
//     }
    

//     </div>
//         <div className="navBar">
//           <div className="hamburger" onClick={toggleMobileMenu}>
//             <div className="line"></div>
//             <div className="line"></div>
//             <div className="line"></div>
//           </div>
         
          
//           <div className={`navbar-items ${isMobileMenuOpen ? "mobilemenu" : ""}`}>
//             <div className='navtext' onClick={closeMobileMenu}>
              
//             <Link to='/' style={{textDecoration:"none",color:"black"}}>Home</Link>
//             </div>
//             <div className='navtext' onClick={closeMobileMenu}>
//             <Link to='/items' style={{textDecoration:"none",color:"black"}}>Products</Link>
//             </div>
//             {(localStorage.getItem("authToken"))?
//         <div className='navtext' onClick={closeMobileMenu}>
//          <Link className="nav-link active text-black" aria-current="page" to="/myorder">My Orders</Link>
//         </div>:""}



//         {
//             (localStorage.getItem("authToken"))?
//             <>
//               {/* <div className="nav-link active text-black navtext">
//               <Link to='/cart' style={{textDecoration:"none",color:"black"}}>My Cart</Link> <Badge pill bg="danger">{items.length}</Badge>
//             </div> */}
//             <div  className="nav-link active text-black navtext text-bold" onClick={handleLogout}>Logout</div> 
//             </>
//             : <>
//                 <div className='navtext' onClick={closeMobileMenu}>
//             <Link to='/login'>Login</Link>
//             </div>
//             <div className='navtext' onClick={closeMobileMenu}>
//             <Link to='/createuser'>SignIn</Link>
//             </div>
//             </>
//           }
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Navbar;


const Navbar = () => {
  const navigate = useNavigate();
  let items = JSON.parse(localStorage.getItem('cart')) || [];
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
  const toggleSearchMenu = () => {
    setIsSearchMenuOpen(!isSearchMenuOpen);
  };
  const closeSearchMenu = () => {
    setIsSearchMenuOpen(false);
  };

  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);

    // Filter food items based on search term
    const filteredItems = foodItem.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredItems);
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
      setSearchResults(response[0]); // Initially show all items
    } catch (error) {
      console.error("Error loading data:", error);
      // Handle the error, show a message to the user, or retry the request
    }
  };
  const handleViewMore=async()=>{
    navigate('/viewmore');
    const cardData = {
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: props.foodItem.price,
      img: props.foodItem.img
    };
  
    localStorage.setItem("cardData", JSON.stringify(cardData));
    console.log(localStorage.getItem("cardData"));
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100vw" }}>
      <div class="top">
        <p>Check out our latest products </p>
        <Link to='/items'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
          </svg>
        </Link>
      </div>
      <div>
        <div className="navbar-fixed" style={{ display: "flex", justifyContent: "center", flexDirection: "column", height: "30vh" }}>
          <div className='top-next'>
        <div >
              <svg onClick={toggleSearchMenu} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
              {isSearchMenuOpen?
                <div style={{zIndex:1000,position:"absolute",top:"0",left:"0",width:"100vw"}} className='searchdrop'>
                  <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
                    <input class="search-input" type="search" placeholder="Search" aria-label="Search" value={search} onChange={handleChange} style={{width:"80vw"}} />
                    <svg onClick={closeSearchMenu} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-x-lg" viewBox="0 0 16 16">
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                  </div>
                  {search.trim().length > 0?searchResults.map((item, index) => (
                    // <div className='search-item'key={index}><img className='searchitem-img' src={item.img}/><div style={{display:"flex",flexDirection:"column"}}><p>{item.name} </p><p>{item.price}</p></div><hr/></div>
                    <SearchItem foodItem={item} onClick={closeSearchMenu}/>
                  )):<></>}
                </div>:<></>
              }
            </div>
           <Link to="/"><img src="/SHEFALI’S CREATIVE CORER (2).png" className='logo-ssc'></img></Link> 
           <div style={{width:"6vw"}}>
            {localStorage.getItem('authToken') &&
              <div >
                <Link to='/cart'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" class="bi bi-bag" viewBox="0 0 16 16">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                  </svg>
                </Link>
                <Badge pill bg="dark" style={{ position: "absolute",top:"20vh" }}>{items.length}</Badge>
              </div>
            }
            </div>
          </div>
          <div className="navBar">
            <div className="hamburger" onClick={toggleMobileMenu}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className={`navbar-items ${isMobileMenuOpen ? "mobilemenu" : ""}`}>
              <div className='navtext' onClick={closeMobileMenu}>
                <Link to='/' style={{ textDecoration: "none", color: "black" }}>Home</Link>
              </div>
              <div className='navtext' onClick={closeMobileMenu}>
                <Link to='/items' style={{ textDecoration: "none", color: "black" }}>Products</Link>
              </div>
              {localStorage.getItem("authToken") &&
                <div className='navtext' onClick={closeMobileMenu}>
                  <Link className="nav-link active text-black" aria-current="page" to="/myorder">My Orders</Link>
                </div>
              }
              {localStorage.getItem("authToken") ?
                <>
                  <div className="nav-link active text-black navtext" onClick={handleLogout}>Logout</div>
                </>
                :
                <>
                  <div className='navtext' onClick={closeMobileMenu}>
                    <Link style={{ textDecoration: "none", color: "black" }}to='/login'>Login</Link>
                  </div>
                  <div className='navtext' onClick={closeMobileMenu}>
                    <Link style={{ textDecoration: "none", color: "black" }} to='/createuser'>SignIn</Link>
                  </div>
                </>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
