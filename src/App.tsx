import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import MarketPlace from './pages/MarketPlace'
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import './App.css';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/> 
        <Route path='/:userId' />
        <Route path='/cart'/>
        <Route path='/mp/' element={<MarketPlace/>}/>
        <Route path='/mp/lighting' element={<MarketPlace lighting={true}/>}/>
        <Route path='/mp/decor' element={<MarketPlace decor={true}/>}/>
        <Route path='/mp/furniture'element={<MarketPlace furniture={true}/>} />
        <Route path='/mp/linen' element={<MarketPlace linen={true}/>} />
        <Route path='/:itemId' />
      </Routes>
    </BrowserRouter>
  );
}

