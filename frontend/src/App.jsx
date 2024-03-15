import { useState } from 'react'
import './App.css'
import Home from './screens/Home'
import Login from './screens/Login';
import MyOrder from './screens/MyOrder.jsx';
import {BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import SignUp from './screens/SignUp';
import { CartProvider } from './components/contextReducer/ContextReducer';
import Payment from './screens/Payment.jsx';
function App() {
  return (
    <CartProvider>
    <Router>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
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
