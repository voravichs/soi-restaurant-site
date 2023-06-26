import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import Tabs from '../Tabs/Tabs';

//import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-screen h-24 md:h-32 grid grid-cols-3 grid-rows-2 xl:grid-cols-10 xl:grid-rows-1 bg-green-600 px-10 pt-4">
      <Tabs>
        <div label="Soi 2"></div>
        <div label="Soi 3"></div>
      </Tabs>
      <ul className="col-span-2 xl:col-span-5 hidden md:flex flex-1 md:justify-end xl:justify-center items-center list-none app__navbar-links">
        <li className="p__opensans mx-8 hover:text-gray-400"><a href="#home">Home</a></li>
        <li className="p__opensans mx-8 hover:text-gray-400"><a href="#about">About</a></li>
        <li className="p__opensans mx-8 hover:text-gray-400"><a href="#menu">Menu</a></li>
        <li className="p__opensans mx-8 hover:text-gray-400"><a href="#contact">Contact</a></li>
      </ul>
      <div className="col-span-2 xl:col-span-2 hidden md:flex justify-end items-center">
        <a href="#login" className="p__opensans mr-8 transition-all decoration-2 decoration-yellow-300 hover:underline">Log In / Register</a>
        <a href="/" className="p__opensans mr-8 transition-all decoration-2 decoration-yellow-300 hover:underline">Book Table</a>
      </div>
      <div className="row-span-2 col-span-1 flex justify-end items-center md:hidden">
        <GiHamburgerMenu color="#fff" fontSize={40} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={40} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans"><a href="#home">Home</a></li>
              <li className="p__opensans"><a href="#about">About</a></li>
              <li className="p__opensans"><a href="#menu">Menu</a></li>
              <li className="p__opensans"><a href="#awards">Awards</a></li>
              <li className="p__opensans"><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  );
}
export default Navbar;
