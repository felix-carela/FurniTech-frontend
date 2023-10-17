import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Header from './components/Header';
import MarketPlace from './pages/MarketPlace'
import Navbar from './components/Navbar';
import Signup from './pages/signup';
import Signin from './pages/signin';
import Profile from './pages/profile';
import './App.css';



export default function App() {
  return (
    <BrowserRouter>
        <Header/>
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