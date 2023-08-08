import React from 'react';
import TestImg from '../../assets/testhero.jpg';

const LeftPicHero  = (props) => (
  <div className='my-16 mx-12 sm:mx-28 flex flex-col lg:flex-row'> 
    <div className='lg:w-1/2 flex-center'>
      <img
        src={TestImg}
        alt="test"
        className='w-full max-w-lg lg:max-w-2xl'
      />
    </div>
    <p className='pt-12 sm:px-12 lg:w-1/2 lg:pl-12 lg:pr-0 font-serif text-xl xl:text-2xl text-black'>
      {props.text}
    </p>
  </div>
);

export default LeftPicHero;