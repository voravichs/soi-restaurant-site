import React from 'react';
import Navigation from './Navigation';
import Tabs from './Tabs';

export default function Header() {
  return (
    <div className='text-yellow-100'>
      <div className='flex flex-col lg:flex-row justify-between bg-emerald-500 drop-shadow-xl px-8 pt-8'>
        <Tabs>
          <div label="Soi 2"></div>
          <div label="Soi 3"></div>
        </Tabs>
        <Navigation />
      </div>
    </div>
  );
}