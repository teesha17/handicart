import React from 'react'
import './App.css'
import Home from './screens/Home.jsx'
import Login from './screens/Login.jsx';
import MyOrder from './screens/MyOrder.jsx';
import Items from './screens/items.jsx';
import ViewMore from './screens/ViewMore.jsx';
import Kids from './collections/Kids.jsx';
import Kitchen from './collections/Kitchen.jsx';
import Walldecor from './collections/Walldecor.jsx';
import Jwellery from './collections/Jwellery.jsx';
import CanvasPainting from './collections/CanvasPainting.jsx';
import AppChat from './screens/AiChat/Aichat.jsx';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import SignUp from './screens/SignUp.jsx';
import { CartProvider } from './components/contextReducer/ContextReducer.jsx';
import Cart from './screens/cart/Cart.jsx';

function App() {
  return (
    <CartProvider>
    <Router>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/nameplates' element={<Items/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/createuser' element={<SignUp/>}/>
        <Route path="/myorder" element={<MyOrder />} />
        <Route path="/viewmore/:productName" element={<ViewMore/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/kitchen" element={<Kitchen/>}/>
        <Route path="/kids" element={<Kids/>}/>
        <Route path="/jwellery" element={<Jwellery/>}/>
        <Route path="/walldecor" element={<Walldecor/>}/>
        <Route path="/chat" element={<AppChat/>}/>
        <Route path="/canvaspainting" element={<CanvasPainting/>}/>
      </Routes>
    </div>
  </Router>
  </CartProvider>
  )
}

export default App;
