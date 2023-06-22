// import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home'

function RootContainer() {

  return (
    <div className='mx-auto bg-emerald-600 '>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default RootContainer;
