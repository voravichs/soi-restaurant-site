import React from 'react';
import TestImg from '../images/testhero.jpg';

const LeftPicHero  = (props) => (
  <div className='h-96 my-24 mx-36 flex'> 
    <img
      src={TestImg}
      alt="test"
      className='mr-36'
    />
    <p className='text-2xl text-green-50'>
      {props.text}
    </p>
  </div>
);

export default LeftPicHero;