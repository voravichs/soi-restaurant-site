import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import { Link } from 'react-router-dom';


const Header = () => (
  <div className="flex flex-col lg:flex-row justify-between items-center px-16 py-8 sm:py-16 md:py-24 min-h-screen" id="home">
    <div className="flex-center flex-1 flex-col w-full">
      <SubHeading title="Chase the new flavor" />
      <h1 className="font-serif text-yellow-200 text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-bold tracking-wider capitalize leading-tight">
        The place for Thai Street Food
      </h1>
      <p className="font-sans text-white font-normal tracking-wider my-8 text-lg lg:text-xl">
        Experience the warmth of Thailand in every dish at our restaurant, where we serve authentic Thai cuisine crafted with passion and the finest local ingredients
      </p>
      <Link to="/menu">
        <button type="button" className="font-serif font-bold tracking-wider px-2 py-6 text-2xl text-yellow-200">
          Explore Menu
        </button>
      </Link>
      
    </div>

    <div className="flex-center flex-1 w-full mt-8 lg:mt-0 lg:ml-12">
      <img className="w-4/5 lg:w-full 2xl:w-4/5" src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
