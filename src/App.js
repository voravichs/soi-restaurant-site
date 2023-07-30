import React from 'react';
import { Routes, Route } from "react-router-dom";

// Pages
import { Soi2Home, Soi2Menu, Soi3Home, Soi3Menu, AboutUs, Contact, Landing } from './pages'

// Components
import { Footer, Navbar, Tabs } from './components';

// Context
import RestaurantProvider from './contexts/RestaurantContext';

// CSS
import './tailwind.css'

function App() {
  return (
    <div className='overflow-hidden'>
      <RestaurantProvider>
        <div className='px-12 pt-4 bg-soi-green'>
          <Tabs/>
        </div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/soi2'>
            <Route index element={<Soi2Home/>}/>
            <Route path='menu' element={<Soi2Menu/>}/>
          </Route>
          <Route path='/soi3'>
            <Route index element={<Soi3Home/>}/>
            <Route path='menu' element={<Soi3Menu/>}/>
          </Route>
          <Route path='aboutus' element={<AboutUs/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Routes>
        <Footer />
      </RestaurantProvider>
    </div>
  );
}

export default App;
