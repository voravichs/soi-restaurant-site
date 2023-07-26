import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Data
import menuData from './constants/data';

// Pages
import { Home, AboutUs, Menu, Contact } from './pages'

// Components
import { Footer, Navbar } from './components';
import { MenuContext } from './contexts/MenuContext';
import ScrollToTop from './components/ScrollToTop';

// CSS
import './tailwind.css'

function App() {
  // products state
  const [menu, setMenu] = useState([]);

  // load local data
  useEffect(() => {
    setMenu(menuData);  // set the products data to your local data
  }, []);

  return (
    <div className='overflow-hidden'>
      <MenuContext.Provider value={{ menu }}>
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
      </MenuContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
