import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Tabs from './Tabs/Tabs';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-screen h-24 md:h-32 grid grid-cols-3 grid-rows-2 xl:grid-cols-10 xl:grid-rows-1 bg-green-600 px-10 pt-4">
      {/* <Tabs>
        <div label="Soi 2"></div>
        <div label="Soi 3"></div>
      </Tabs> */}
      <ul className="col-span-2 xl:col-span-5 hidden md:flex flex-1 md:justify-end xl:justify-center items-center list-none">
        <li className="font-sans text-white font-normal tracking-wider capitalize text-lg leading-7 mx-8 hover:text-gray-400">
          <Link to="/">
            Home
          </Link>
        </li>
        <li className="font-sans text-white font-normal tracking-wider capitalize text-lg leading-7 mx-8 hover:text-gray-400">
          <Link to="/aboutus">
            About Us
          </Link>
        </li>
        <li className="font-sans text-white font-normal tracking-wider capitalize text-lg leading-7 mx-8 hover:text-gray-400">
          <Link to="/menu">
            Menu
          </Link>
        </li>
        <li className="font-sans text-white font-normal tracking-wider capitalize text-lg leading-7 mx-8 hover:text-gray-400">
          <Link to="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
      <div className="col-span-2 xl:col-span-2 hidden md:flex justify-end items-center">
        <Link to="/"
          className="font-sans text-white font-normal tracking-wider capitalize text-lg leading-7 mr-8 transition-all decoration-2 decoration-yellow-300 hover:underline">
          Log In / Register
        </Link>
        <Link to="/"
          className="font-sans text-white font-normal tracking-wider capitalize text-lg leading-7 mr-8 transition-all decoration-2 decoration-yellow-300 hover:underline">
          Book Table
        </Link>
      </div>
      <div className="row-span-2 col-span-1 flex justify-end items-center md:hidden">
        <GiHamburgerMenu color="#fff" fontSize={40} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="z-30 fixed top-0 left-0 w-full h-screen bg-slate-950 transition ease-in-out flex flex-col justify-center items-center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={40}
              className="absolute top-5 right-5 text-5xl fill-white hover:fill-yellow-500 cursor-pointer"
              onClick={() => setToggleMenu(false)} />
            <div className="list-none h-1/2 flex flex-col justify-between">
              <Link to="/"
                className="font-serif font-normal tracking-wider capitalize leading-7 cursor-pointer text-yellow-300 hover:text-slate-50 text-4xl text-center"
                onClick={() => setToggleMenu(false)}>
                Home
              </Link>
              <Link to="/aboutus"
                className="font-serif font-normal tracking-wider capitalize leading-7 cursor-pointer text-yellow-300 hover:text-slate-50 text-4xl text-center"
                onClick={() => setToggleMenu(false)}>
                About Us
              </Link>
              <Link to="/menu"
                className="font-serif font-normal tracking-wider capitalize leading-7 cursor-pointer text-yellow-300 hover:text-slate-50 text-4xl text-center"
                onClick={() => setToggleMenu(false)}>
                Menu
              </Link>
              <Link to="/contact"
                className="font-serif font-normal tracking-wider capitalize leading-7 cursor-pointer text-yellow-300 hover:text-slate-50 text-4xl text-center"
                onClick={() => setToggleMenu(false)}>
                Contact Us
              </Link>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}
export default Navbar;
