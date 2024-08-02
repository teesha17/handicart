// import React, { useState, useEffect } from 'react';
// import Badge from 'react-bootstrap/Badge';
// import { Link, useNavigate } from 'react-router-dom';
// import SearchItem from '../searchItem/SearchItem';
// import { ImCross } from "react-icons/im";
// import { IoIosArrowForward } from "react-icons/io";
// import './Navbar.css';

// const Navbar = () => {
//   const navigate = useNavigate();
//   let items = JSON.parse(localStorage.getItem('cart')) || [];
  
//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     navigate("/login");
//   };

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
//   const [searchResults, setSearchResults] = useState([]);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMenu2open,setMenu2open] = useState(false);

//   const handleChange = event => {
//     const searchTerm = event.target.value;
//     setSearch(searchTerm);

//     // Filter food items based on search term
//     const filteredItems = foodItem.filter(item =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setSearchResults(filteredItems);
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
//       setSearchResults(response[0]); // Initially show all items
//     } catch (error) {
//       console.error("Error loading data:", error);
//       // Handle the error, show a message to the user, or retry the request
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   return (
//     <div style={{ display: "flex", flexDirection: "column", width: "100vw" }}>
//       <div className="top">
//         <p>Check out our latest products </p>
//         <Link to='/items'>
//           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-arrow-right" viewBox="0 0 16 16">
//             <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
//           </svg>
//         </Link>
//       </div>
//       <div>
//         <div className="navbar-fixed" style={{ display: "flex", justifyContent: "center", flexDirection: "column", height: "20vh" }}>
//           <div className='top-next'>
//             <div>
//               <svg onClick={toggleSearchMenu} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
//                 <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
//               </svg>
//               {isSearchMenuOpen && (
//                 <div style={{ zIndex: 1000, position: "absolute", top: "0", left: "0", width: "100vw" }} className='searchdrop'>
//                   <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
//                     <input className="search-input" type="search" placeholder="Search" aria-label="Search" value={search} onChange={handleChange} style={{ width: "80vw" }} />
//                     <svg onClick={closeSearchMenu} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-x-lg" viewBox="0 0 16 16">
//                       <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
//                     </svg>
//                   </div>
//                   {search.trim().length > 0 ? searchResults.map((item, index) => (
//                     <SearchItem foodItem={item} onClick={closeSearchMenu} key={index} />
//                   )) : <></>}
//                 </div>
//               )}
//             </div>
//             <Link to="/"><img src="/SHEFALI’S CREATIVE CORER (2).png" className='logo-ssc'></img></Link>
//             <div style={{ width: "6vw" }}>
//               {localStorage.getItem('authToken') && (
//                 <div>
//                  <Link to='/cart' className="cart-link">
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" className="bi bi-bag" viewBox="0 0 16 16">
//     <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
//   </svg>
//   <Badge pill bg="dark" className="cart-badge">{items.length}</Badge>
// </Link>

//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="navBar">
//             <div className="hamburger" onClick={toggleMobileMenu}>
//               <div className="line"></div>
//               <div className="line"></div>
//               <div className="line"></div>
//             </div>
//             <div className={`navbar-items ${isMobileMenuOpen ? "mobilemenu" : ""}`}>
//               {isMobileMenuOpen?(<ImCross onClick={closeMobileMenu} className='cross'/>):(<div></div>)}
//               <div className='navtext' onClick={closeMobileMenu}>
//                 <Link to='/' className='mobile-link' style={{ textDecoration: "none", color: "black" }}>Home</Link>
//               </div>
//               <div className='navtext' onClick={closeMobileMenu}>
//                 <Link to='/items' className='mobile-link' style={{ textDecoration: "none", color: "black" }}>Products</Link>
//               </div>
//               <div className="navtext dropdown" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
//                 <div className='mobile-link' style={{ textDecoration: "none", color: "black" }}>Kids</div>
//                 {isMobileMenuOpen?<IoIosArrowForward/>:<div></div>}
//                 {isDropdownOpen && (
//                   <div className="dropdown-content">
//                     {/* Add the items for Kids category here */}
//                     <Link to='/kids/toys'>Toys</Link>
//                     <Link to='/kids/clothes'>Clothes</Link>
//                     <Link to='/kids/books'>Books</Link>
//                   </div>
//                 )}
//               </div>
//               <div className="navtext dropdown" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
//                 <Link to='/kitchen' className='mobile-link' style={{ textDecoration: "none", color: "black" }}>Kitchen</Link>
//                 {isDropdownOpen && (
//                   <div className="dropdown-content">
//                     {/* Add the items for Kitchen category here */}
//                     <Link to='/kitchen/utensils'>Utensils</Link>
//                     <Link to='/kitchen/appliances'>Appliances</Link>
//                     <Link to='/kitchen/storage'>Storage</Link>
//                   </div>
//                 )}
//               </div>
//               <div className="navtext dropdown" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
//                 <Link to='/wallDecor' className='mobile-link' style={{ textDecoration: "none", color: "black" }}>Wall Decor</Link>
//                 {isDropdownOpen && (
//                   <div className="dropdown-content">
//                     {/* Add the items for Wall Decor category here */}
//                     <Link to='/wallDecor/paintings'>Paintings</Link>
//                     <Link to='/wallDecor/wallStickers'>Wall Stickers</Link>
//                     <Link to='/wallDecor/clocks'>Clocks</Link>
//                   </div>
//                 )}
//               </div>
//               {localStorage.getItem('authToken') ?
//                 <>
//                   <div className='navtext' onClick={closeMobileMenu}>
//                     <Link to='/orderData' className='mobile-link' style={{ textDecoration: "none", color: "black" }}>My Orders</Link>
//                   </div>
//                   <div className='navtext'  onClick={() => { handleLogout(); closeMobileMenu(); }} style={{ cursor: "pointer", color: "black" }}>
//                     <p className='mobile-link'>Logout</p>
//                   </div>
//                 </>
//                 :
//                 <>
//                   <div className='navtext' onClick={closeMobileMenu}>
//                     <Link to='/login' style={{ textDecoration: "none", color: "black" }}>Login</Link>
//                   </div>
//                   <div className='navtext' onClick={closeMobileMenu}>
//                     <Link to='/signup' style={{ textDecoration: "none", color: "black" }}>SignUp</Link>
//                   </div>
//                 </>
//               }
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;




import React, { useState, useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';
import { Link, useNavigate } from 'react-router-dom';
import SearchItem from '../searchItem/SearchItem';
import { ImCross } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  let items = JSON.parse(localStorage.getItem('cart')) || [];
  
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null); // New state for submenus

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveSubMenu(null); // Close submenus as well
  };

  const openSubMenu = (menu) => {
    setActiveSubMenu(menu);
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = event => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);

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
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100vw" }}>
      <div className="top">
        <p>Check out our latest products </p>
        <Link to='/items'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
          </svg>
        </Link>
      </div>
      <div>
        <div className="navbar-fixed" style={{ display: "flex", justifyContent: "center", flexDirection: "column", height: "20vh" }}>
          <div className='top-next'>
            <div>
              <svg onClick={toggleSearchMenu} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
              {isSearchMenuOpen && (
                <div style={{ zIndex: 1000, position: "absolute", top: "0", left: "0", width: "100vw" }} className='searchdrop'>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                    <input className="search-input" type="search" placeholder="Search" aria-label="Search" value={search} onChange={handleChange} style={{ width: "80vw" }} />
                    <svg onClick={closeSearchMenu} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-x-lg" viewBox="0 0 16 16">
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L7.293 8z" />
                    </svg>
                  </div>
                  {search.trim().length > 0 ? searchResults.map((item, index) => (
                    <SearchItem foodItem={item} onClick={closeSearchMenu} key={index} />
                  )) : <></>}
                </div>
              )}
            </div>
            <Link to="/"><img src="/SHEFALI’S CREATIVE CORER (2).png" className='logo-ssc'></img></Link>
            <div style={{ width: "6vw" }}>
              {localStorage.getItem('authToken') && (
                <div>
                 <Link to='/cart' className="cart-link">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" className="bi bi-bag" viewBox="0 0 16 16">
    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
  </svg>
  <Badge pill bg="dark" className="cart-badge">{items.length}</Badge>
</Link>

                </div>
              )}
            </div>
          </div>
          <div className= "navBar">
          <div className="hamburger" onClick={toggleMobileMenu}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            {isMobileMenuOpen?
            <div>
            <div className={`navbar-items ${isMobileMenuOpen ? "mobilemenu" : ""}`}>
              {isMobileMenuOpen && <ImCross onClick={closeMobileMenu} className='cross' />}
              <div className='navtext' onClick={closeMobileMenu}>
                <Link to='/' className='mobile-link' style={{ textDecoration: "none", color: "black" }}>Home</Link>
              </div>
              <div className='navtext' onClick={closeMobileMenu}>
                <Link to='/items' className='mobile-link' style={{ textDecoration: "none", color: "black" }}>Products</Link>
              </div>
              <div className='navtext' onClick={closeMobileMenu}>
                <Link to='/chat' className='mobile-link' style={{ textDecoration: "none", color: "black" }}>AiChat Room</Link>
              </div>
              <div className="navtext" onClick={() => openSubMenu('Kids')}>
                <span className='mobile-link' style={{ textDecoration: "none", color: "black" }}>Kids</span>
                {isMobileMenuOpen?<IoIosArrowForward />:""}
              </div>
              <div className="navtext" onClick={() => openSubMenu('Kitchen')}>
                <span className='mobile-link' style={{ textDecoration: "none", color: "black" }}>Kitchen</span>
                {isMobileMenuOpen?<IoIosArrowForward />:""}
              </div>
              <div className="navtext" onClick={() => openSubMenu('Wall Decor')}>
                <span className='mobile-link' style={{ textDecoration: "none", color: "black" }}>Wall Decor</span>
                {isMobileMenuOpen?<IoIosArrowForward />:""}
              </div>
              {localStorage.getItem('authToken') ?
                <>
                  <div className='navtext' onClick={closeMobileMenu}>
                    <Link to='/myorder' className='mobile-link' style={{ textDecoration: "none", color: "black" }}>My Orders</Link>
                  </div>
                  <div className='navtext' onClick={() => { handleLogout(); closeMobileMenu(); }} style={{ cursor: "pointer", color: "black" }}>
                    <p className='mobile-link'>Logout</p>
                  </div>
                </>
                :
                <>
                  <div className='navtext' onClick={closeMobileMenu}>
                    <Link to='/login' style={{ textDecoration: "none", color: "black" }}>Login</Link>
                  </div>
                  <div className='navtext' onClick={closeMobileMenu}>
                    <Link to='/signup' style={{ textDecoration: "none", color: "black" }}>SignUp</Link>
                  </div>
                </>
              }
            </div>
            {activeSubMenu && (
              <div className={`navbar-items mobilemenu`}>
                <ImCross onClick={() => setActiveSubMenu(null)} className='cross' />
                {activeSubMenu === 'Kids' && (
                  <div>
                    <div className='navtext' onClick={() => setActiveSubMenu(null)}>
                      <Link to='/kids/toys' className='mobile-link' style={{ textDecoration: "none", color: "black" }}>Toys</Link>
                    </div>
                    <div className='navtext' onClick={() => setActiveSubMenu(null)}>
                      <Link to='/kids/clothes' className='mobile-link' style={{ textDecoration: "none", color: "black" }}>Clothes</Link>
                    </div>
                    <div className='navtext' onClick={() => setActiveSubMenu(null)}>
                      <Link to='/kids/books' className='mobile-link' style={{ textDecoration: "none", color: "black" }}>Books</Link>
                    </div>
                  </div>
                )}
                {activeSubMenu === 'Kitchen' && (
                  <div>
                    <div className='navtext' onClick={() => setActiveSubMenu(null)}>
                      <Link to='/kitchen/utensils' className='mobile-link' style={{ textDecoration: "none", color: "black" }}>Utensils</Link>
                    </div>
                    <div className='navtext' onClick={() => setActiveSubMenu(null)}>
                      <Link to='/kitchen/appliances' className='mobile-link' style={{ textDecoration: "none", color: "black" }}>Appliances</Link>
                    </div>
                    <div className='navtext' onClick={() => setActiveSubMenu(null)}>
                      <Link to='/kitchen/storage' className='mobile-link' style={{ textDecoration: "none", color: "black" }}>Storage</Link>
                    </div>
                  </div>
                )}
                {activeSubMenu === 'Wall Decor' && (
                  <div>
                    <div className='navtext' onClick={() => setActiveSubMenu(null)}>
                      <Link to='/wallDecor/paintings' className='mobile-link' style={{ textDecoration: "none", color: "black" }}>Paintings</Link>
                    </div>
                    <div className='navtext' onClick={() => setActiveSubMenu(null)}>
                      <Link to='/wallDecor/wallStickers' className='mobile-link' style={{ textDecoration: "none", color: "black" }}>Wall Stickers</Link>
                    </div>
                    <div className='navtext' onClick={() => setActiveSubMenu(null)}>
                      <Link to='/wallDecor/clocks' className='mobile-link' style={{ textDecoration: "none", color: "black" }}>Clocks</Link>
                    </div>
                  </div>
                )}
              </div>
            )}
            </div> :<div className={`navbar-items ${isMobileMenuOpen ? "mobilemenu" : ""}`}>
              {isMobileMenuOpen?(<ImCross onClick={closeMobileMenu} className='cross'/>):(<div></div>)}
              <div className='navtext' onClick={closeMobileMenu}>
                <Link to='/' className='mobile-link' style={{ textDecoration: "none", color: "black" }}>Home</Link>
              </div>
              <div className='navtext' onClick={closeMobileMenu}>
                <Link to='/items' className='mobile-link' style={{ textDecoration: "none", color: "black" }}>Products</Link>
              </div>
              <div className='navtext' onClick={closeMobileMenu}>
                <Link to='/chat' className='mobile-link' style={{ textDecoration: "none", color: "black" }}>AiChat Room</Link>
              </div>
              <div className="navtext dropdown" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                <div className='mobile-link' style={{ textDecoration: "none", color: "black" }}>Kids</div>
                {isMobileMenuOpen?<IoIosArrowForward/>:<div></div>}
                {isDropdownOpen && (
                  <div className="dropdown-content">
                    {/* Add the items for Kids category here */}
                    <Link to='/kids/toys'>Toys</Link>
                    <Link to='/kids/clothes'>Clothes</Link>
                    <Link to='/kids/books'>Books</Link>
                  </div>
                )}
              </div>
              <div className="navtext dropdown" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                <Link to='/kitchen' className='mobile-link' style={{ textDecoration: "none", color: "black" }}>Kitchen</Link>
                {isDropdownOpen && (
                  <div className="dropdown-content">
                    {/* Add the items for Kitchen category here */}
                    <Link to='/kitchen/utensils'>Utensils</Link>
                    <Link to='/kitchen/appliances'>Appliances</Link>
                    <Link to='/kitchen/storage'>Storage</Link>
                  </div>
                )}
              </div>
              <div className="navtext dropdown" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                <Link to='/wallDecor' className='mobile-link' style={{ textDecoration: "none", color: "black" }}>Wall Decor</Link>
                {isDropdownOpen && (
                  <div className="dropdown-content">
                    {/* Add the items for Wall Decor category here */}
                    <Link to='/wallDecor/paintings'>Paintings</Link>
                    <Link to='/wallDecor/wallStickers'>Wall Stickers</Link>
                    <Link to='/wallDecor/clocks'>Clocks</Link>
                  </div>
                )}
              </div>
              {localStorage.getItem('authToken') ?
                <>
                  <div className='navtext' onClick={closeMobileMenu}>
                    <Link to='/myorder' className='mobile-link' style={{ textDecoration: "none", color: "black" }}>My Orders</Link>
                  </div>
                  <div className='navtext'  onClick={() => { handleLogout(); closeMobileMenu(); }} style={{ cursor: "pointer", color: "black" }}>
                    Logout
                  </div>
                </>
                :
                <>
                  <div className='navtext' onClick={closeMobileMenu}>
                    <Link to='/login' style={{ textDecoration: "none", color: "black" }}>Login</Link>
                  </div>
                  <div className='navtext' onClick={closeMobileMenu}>
                    <Link to='/signup' style={{ textDecoration: "none", color: "black" }}>SignUp</Link>
                  </div>
                </>
              }
            </div>
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
