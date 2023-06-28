import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';


const Header = () => (
  <div className="app__header flex flex-col lg:flex-row justify-between items-center px-16 py-8 sm:py-16 md:py-24 min-h-screen" id="home">
    <div className="flex flex-1 flex-col w-full justify-center items-center">
      <SubHeading title="Chase the new flavor" />
      <h1 className="app__header-h1 text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-bold tracking-wider capitalize leading-tight">The place for Thai Street Food</h1>
      <p className="p__opensans my-8 text-base sm:text-lg">Experience the warmth of Thailand in every dish at our restaurant, where we serve authentic Thai cuisine crafted with passion and the finest local ingredients</p>
      <button type="button" className="custom__button text-2xl">Explore Menu</button>
    </div>

    <div className="flex flex-1 w-full justify-center items-center mt-8 lg:mt-0 lg:ml-12">
      <img className="w-4/5 lg:w-full 2xl:w-4/5" src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
