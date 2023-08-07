import React from 'react';
import { Routes, Route } from "react-router-dom";

// Pages
import { Layout, Soi2Home, Soi2Menu, Soi3Home, Soi3Menu, AboutUs, Contact, Landing } from './pages'

// Context
import RestaurantProvider from './contexts/RestaurantContext';

// CSS
import './tailwind.css'

// Scroll to top
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <div className='overflow-hidden bg-yellow-50'>
      <RestaurantProvider>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/soi2' element={<Layout/>}>
            <Route path='home' element={<Soi2Home/>}/>
            <Route path='menu' element={<Soi2Menu/>}/>
          </Route>
          <Route path='/soi3' element={<Layout/>}>
            <Route path='home' element={<Soi3Home/>}/>
            <Route path='menu' element={<Soi3Menu/>}/>
          </Route>
          <Route path='/' element={<Layout/>}>
            <Route path='aboutus' element={<AboutUs/>}/>
            <Route path='contact' element={<Contact/>}/>
          </Route>
        </Routes>
      </RestaurantProvider>
    </div>
  );
}

export default App;
