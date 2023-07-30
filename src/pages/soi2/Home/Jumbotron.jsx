import React from 'react';

import { Link } from 'react-router-dom';

const Jumbotron = () => (
  <div className="bg-jumbotron bg-center bg-cover h-screen flex flex-col justify-center">   
    <div class="h-full w-full overflow-hidden bg-black bg-fixed opacity-50"></div>
    <div className='absolute'>
      <h1 className="font-serif text-center text-yellow-200 text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-bold tracking-wider capitalize leading-tight mx-12">
        The Place for Thai Street Food (2)
      </h1>
      <div className='mx-24 2xl:mx-48'>
        <p className="font-sans text-center text-white font-normal tracking-wider my-8 text-xl lg:text-2xl">
          Experience the warmth of Thailand in every dish at our restaurant, where we serve authentic Thai cuisine crafted with passion and the finest local ingredients
        </p>
      </div>
      <div className='flex-center'>
        <Link to="/soi2/menu">
          <button type="button" className="font-serif font-bold tracking-wider py-4 text-3xl text-yellow-200">
            Explore Menu
          </button>
        </Link>
      </div>
    </div>
  </div>
)

export default Jumbotron;