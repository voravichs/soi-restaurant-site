import React, { useState, useContext } from 'react'; import { Link } from 'react-router-dom';
// Icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

// Images
import { images } from '../constants'
import { Tabs } from '../components'
import { RestaurantContext } from '../contexts/RestaurantContext';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { restaurant } = useContext(RestaurantContext);

  return (
    <div>
      <div className='px-12 pt-3 bg-soi-green'>
        <Tabs />
      </div>
      <nav className="w-screen bg-white h-36 grid grid-cols-5 xl:grid-cols-10 px-12 drop-shadow border-b border-slate-300">
        <div className="h-36 col-span-4 hidden xl:flex justify-end items-center gap-8 mr-12 font-sans text-soi-green capitalize text-xl">
          {restaurant === 2 ? (
            <Link
              className='h-full flex-center hover:text-green-200 hover:scale-110 transition duration-200'
              to="/soi2/home">
              Home
            </Link>
          ) : (
            <Link
              className='h-full flex-center hover:text-green-200 hover:scale-110 transition duration-200'
              to="/soi3/home">
              Home
            </Link>
          )}
          {restaurant === 2 ? (
            <Link
              className='h-full flex-center hover:text-green-200 hover:scale-110 transition duration-200'
              to="/soi2/menu">
              Menu
            </Link>
          ) : (
            <Link
              className='h-full flex-center hover:text-green-200 hover:scale-110 transition duration-200'
              to="/soi3/menu">
              Menu
            </Link>
          )}
        </div>
        <div className='h-36 col-span-3 xl:col-span-2 flex-center w-full sm:w-4/5 xl:w-full'>
          {restaurant === 2 ? (
            <Link to="/soi2/home">
              <img className="max-h-36 py-2"
                src={images.soi2}
                alt="soi 2 logo" />
            </Link>
          ) : (
            <Link to="/soi3/home">
              <img className="max-h-36 py-2"
                src={images.soi3}
                alt="soi 2 logo" />
            </Link>
          )}
        </div>
        <div className="h-36 col-span-3 hidden xl:flex justify-start items-center gap-8 ml-12 font-sans text-soi-green capitalize text-xl">
          <Link
            className='h-full flex-center hover:text-green-200 hover:scale-110 transition duration-200'
            to="/aboutus">
              About Us
          </Link>
          <Link
            className='h-full flex-center hover:text-green-200 hover:scale-110 transition duration-200'
            to="/contact">
              Contact
          </Link>
        </div>
        <div className="h-36 col-span-1 flex-center">
          {/* Shopping Cart */}
        </div>
        <div className="h-36 col-span-1 flex-center xl:hidden">
          <GiHamburgerMenu className='text-soi-green text-3xl md:text-4xl' onClick={() => setToggleMenu(true)} />
        </div>

      </nav>
      {toggleMenu && (
        <div className="fixed z-[100] top-0 left-0 w-full h-screen bg-gray-900 flex-center transition ease-in-out slide-bottom">
          <MdOutlineRestaurantMenu
            className="absolute top-5 right-5 text-5xl fill-white hover:fill-yellow-200 cursor-pointer"
            onClick={() => setToggleMenu(false)} />
          <div className="list-none h-1/2 w-1/2 flex flex-col justify-between">
            <div className='mx-auto'>
              {restaurant === 2 ? (
                <Link to="/soi2/home">
                  <img className="max-h-36 py-2"
                    src={images.soi2}
                    alt="soi 2 logo" />
                </Link>
              ) : (
                <Link to="/soi3/home">
                  <img className="max-h-36 py-2"
                    src={images.soi3}
                    alt="soi 2 logo" />
                </Link>
              )}
            </div>
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
  );
}
export default Navbar;
