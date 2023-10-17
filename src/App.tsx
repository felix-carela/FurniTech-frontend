import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Lighting from './pages/Lighting'
import Decor from './pages/Decor'
import Linens from './pages/Linens';
import Furniture from './pages/Furniture';
import MarketPlace from './pages/MarketPlace'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import './App.css';


export default function App() {
  return (
    <BrowserRouter>
        <Header />
        <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/> 
        <Route path='/:userId' element={<Profile/>}/>
        <Route path='/cart'/>
        <Route path='/mp/' element={<MarketPlace/>}/>
        <Route path='/mp/lighting' element={<MarketPlace lighting={true}/>}/>
        <Route path='/mp/decor' element={<MarketPlace decor={true}/>}/>
        <Route path='/mp/furniture'element={<MarketPlace furniture={true}/>} />
        <Route path='/mp/linens' element={<MarketPlace linens={true}/>} />
        <Route path='/:itemId' />
      </Routes>
    </BrowserRouter>
  );
}