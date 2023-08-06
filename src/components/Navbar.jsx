import React, { useState, useContext } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { images } from '../constants'
import { RestaurantContext } from '../contexts/RestaurantContext';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { restaurant } = useContext(RestaurantContext);

  return (
    <nav className="w-screen bg-white h-32 grid grid-cols-5 xl:grid-cols-10 px-12 drop-shadow border-b border-slate-300">
      <div className="h-32 col-span-4 hidden xl:flex justify-end items-center gap-8 mr-16 font-sans text-soi-green capitalize text-xl">
        <div className="hover:text-green-400">
          {restaurant === 2 ? (
            <Link to="/soi2/home">
              Home
            </Link>
          ) : (
            <Link to="/soi3/home">
              Home
            </Link>
          )}
        </div>
        <div className="hover:text-green-400">
          {restaurant === 2 ? (
            <Link to="/soi2/menu">
              Menu
            </Link>
          ) : (
            <Link to="/soi3/menu">
              Menu
            </Link>
          )}
        </div>
      </div>
      <div className='h-32 col-span-3 xl:col-span-2 flex-center w-full sm:w-4/5 xl:w-full'>
        {restaurant === 2 ? (
          <Link to="/soi2/home">
            <img className="max-h-32" 
              src={images.soi} 
              alt="soi 2 logo"/>
          </Link>
        ) : (
          <Link to="/soi3/home">
            <img className="max-h-32" 
              src={images.soi} 
              alt="soi 2 logo" />
          </Link>
        )}
      </div>
      <div className="h-32 col-span-3 hidden xl:flex justify-start items-center gap-8 ml-16 font-sans text-soi-green capitalize text-xl">
        <div className="hover:text-green-400">
          <Link to="/aboutus">
            About Us
          </Link>
        </div>
        <div className="hover:text-green-400">
          <Link to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="h-32 col-span-1 flex-center">
        
      </div>
      <div className="h-32 col-span-1 flex-center xl:hidden">
        <GiHamburgerMenu className='text-soi-green text-3xl md:text-4xl' onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="z-40 fixed -top-[50px] left-0 w-full h-screen bg-gray-900 flex-center flex-col transition ease-in-out slide-bottom">
            <MdOutlineRestaurantMenu 
              className="absolute top-5 right-5 text-5xl fill-white hover:fill-yellow-200 cursor-pointer"
              onClick={() => setToggleMenu(false)} />
            <div className="list-none h-1/2 flex flex-col justify-between">
              <div className="font-serif text-center text-white hover:text-yellow-200 text-4xl tracking-wider capitalize">
                {restaurant === 2 ? (
                  <Link to="/soi2/home"
                    onClick={() => setToggleMenu(false)}>
                    Home
                  </Link>
                ) : (
                  <Link to="/soi3/home"
                    onClick={() => setToggleMenu(false)}>
                    Home
                  </Link>
                )}
              </div>
              <div className="font-serif text-center text-white hover:text-yellow-200 text-4xl tracking-wider capitalize">
                {restaurant === 2 ? (
                  <Link to="/soi2/menu"
                    onClick={() => setToggleMenu(false)}>
                    Menu
                  </Link>
                ) : (
                  <Link to="/soi3/menu"
                    onClick={() => setToggleMenu(false)}>
                    Menu
                  </Link>
                )}
              </div>
              <Link to="/aboutus"
                className="font-serif text-center text-white hover:text-yellow-200 text-4xl tracking-wider capitalize"
                onClick={() => setToggleMenu(false)}>
                About Us
              </Link>
              <Link to="/contact"
                className="font-serif text-center text-white hover:text-yellow-200 text-4xl tracking-wider capitalize"
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
