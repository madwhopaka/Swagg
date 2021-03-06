
import './App.css';
import {BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom' ; 
import Silider from './Components/Silider';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login.jsx'  ;
import Cart from './pages/Cart'
import Pay from './Pay';
import Success from './Success';
import { useSelector } from 'react-redux';
import React from 'react';


function App() {
  const user = useSelector((state) => state.user.currentUser);
  
  return (
    <div>
        <Routes>
        <Route path = '/' element = {<Home />}> 
          </Route>
          <Route path="/login" element={!user? <Login />: <Navigate replace to="/" />} />
          <Route path="/register" element={!user? <Register />: <Navigate replace to="/" />} />
          <Route path = '/cart' element = {<Cart />}> 
          </Route>
          <Route path = '/product/:id' element = {<ProductDetail />}>
          </Route>
          <Route path = '/products/:category' element = {<ProductList />}>
          </Route>
          <Route path = '/pay' element = {<Pay />}> 
          </Route>
          <Route path = 'order/success' element = {<Success />}>
          </Route>
        </Routes>
    </div>
  );
}

export default App;

{/* <div >
    // <Cart />
    // </div> */}