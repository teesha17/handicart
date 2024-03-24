import React,{ useState } from 'react'
import './App.css'
import Home from './screens/Home.jsx'
import Login from './screens/Login.jsx';
import MyOrder from './screens/MyOrder.jsx';
import Payment from './screens/Payment.jsx';
import Items from './screens/items.jsx';
import {BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import SignUp from './screens/SignUp.jsx';
import { CartProvider } from './components/contextReducer/ContextReducer';

function App() {
  return (
    <CartProvider>
    <Router>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/items' element={<Items/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/createuser' element={<SignUp/>}/>
        <Route exact path="/myorder" element={<MyOrder />} />
        <Route path="/payment" element={<Payment/>}/>
      </Routes>
    </div>
  </Router>
  </CartProvider>
  )
}

export default App;
