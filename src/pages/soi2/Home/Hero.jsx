import React from 'react';
import TestImg from '../../../assets/testhero.jpg';

const Hero  = () => (
  <div className='my-20 mx-16 sm:mx-32 flex flex-col lg:flex-row'> 
    <div className='lg:w-2/3 flex-center'>
      <img
        src={TestImg}
        alt="test"
        className='w-full'
      />
    </div>
    <div className='sm:px-12 lg:w-1/3 lg:pl-12 lg:pr-0 pt-12 font-serif text-center text-5xl font-bold tracking-wider'>
      <p> About Us:</p>
      <p className='font-sans text-xl font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
);

export default Hero;