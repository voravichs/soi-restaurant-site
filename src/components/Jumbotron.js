import React from 'react';
import './heroImg.css';

export default function Jumbotron() {
    return (
      <div>
        <div className="hero-image bg-center bg-cover h-screen flex flex-col justify-center">   
          <div class="h-full w-full overflow-hidden bg-black bg-fixed opacity-50"></div>
          <div className='absolute'>
            <h1 className='text-5xl text-yellow-50 text-center mb-20'>LOREM IPSUM</h1>
            <p className='text-2xl text-yellow-50 leading-loose mx-48'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    );
  }