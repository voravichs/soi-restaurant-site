import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import { Home, AboutUs, Menu, Contact } from './pages'

// Components
import { Footer, Navbar } from './components';
import ScrollToTop from './components/ScrollToTop';

// CSS
import './tailwind.css'

function App() {
  return (
    <div className='overflow-hidden'>
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
