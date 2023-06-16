// import React, { useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home'

function RootContainer() {

  return (
    <div className='mx-auto bg-emerald-600 '>
      <div className='flex flex-col lg:flex-row justify-between p-12 bg-emerald-500 drop-shadow-xl'>
        <Header />
        <Navigation />
      </div>
      <div className='m-16'>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default RootContainer;
