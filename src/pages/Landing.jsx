import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { RestaurantContext } from '../contexts/RestaurantContext';

const Landing = () => {
  const {setRestaurant} = useContext(RestaurantContext);
  
  useEffect(() => {
    setRestaurant(0);
  });

  function handleClick(num) {
    setRestaurant(num);
  }

  return (
    <div className='h-screen w-screen grid grid-cols-2 p-24'>
      <Link 
        className='flex-center text-9xl font-serif hover:text-yellow-200 hover:shadow-lg'
        to={'/soi2/home'} 
        onClick={e => handleClick(2)}>
          Soi2
      </Link>
      <Link 
        className='flex-center text-9xl font-serif hover:text-yellow-200 hover:shadow-lg'
        to={'/soi3/home'} 
        onClick={e => handleClick(3)}>
          Soi3    
      </Link>
    </div>
  );
}

export default Landing;
