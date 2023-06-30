import React, { useState } from 'react';

import { Footer } from './container';
import { Home, AboutUs, Menu, Contact } from './pages'
import { Navbar } from './components';
import './App.css';
import './tailwind.css'

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'AboutUs') {
      return <AboutUs />;
    }
    if (currentPage === 'Menu') {
      return <Menu />;
    }
    return <Contact />
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
