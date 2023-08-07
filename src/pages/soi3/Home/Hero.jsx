import React from 'react';
import FoodCarousel from './Carousel';

const Hero  = () => (
  <div className='my-20 mx-16 sm:mx-32 flex flex-col xl:flex-row'> 
    <div className='xl:w-2/3 flex-center'>
      <FoodCarousel/>
    </div>
    <div className='sm:px-12 xl:w-1/3 xl:pl-12 xl:pr-0 pt-12 font-serif text-center text-5xl font-bold tracking-wider'>
      <p className='text-3xl md:text-5xl'> About Us:</p>
      <p className='font-sans text-base md:text-xl font-normal'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </div>
);

export default Hero;