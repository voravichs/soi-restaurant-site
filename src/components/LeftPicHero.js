import React from 'react';
import TestImg from '../images/testhero.jpg';

export default function LeftPicHero() {
    return (
      <div className='h-96 my-24 mx-36 flex'> 
        <img
            src={TestImg}
            alt="test"
            className='mr-36'
        />
        <p className='text-lg text-green-50'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  }