import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Pages
import { Home, AboutUs, Menu, Contact } from './pages'

// Components
import { Footer, Navbar } from './components';
import './tailwind.css'

function App() {
  return (
    <div>
      <div className='overflow-hidden'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
