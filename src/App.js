import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


import "./App.css"

import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import Plans from './pages/plans/Plans';
import Teams from './pages/teams/Teams';
import NotFound from './pages/notfound/NotFound';

import Footer from './components/Footer'



const App = () => {
  return (
    
    <BrowserRouter>
      <Navbar/>
      
      
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element ={<About />} />      
        <Route path='contact' element ={<Contact />} />      
        <Route path='gallery' element ={<Gallery />} />      
        <Route path='plans' element ={<Plans />} />      
        <Route path='teams' element ={<Teams />} />      
        <Route path='*' element ={<NotFound />} />      
      </Routes>
      
      <Footer />
    </BrowserRouter>
  )
}

export default App


