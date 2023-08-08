import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { RestaurantContext } from '../contexts/RestaurantContext';
import { images } from '../constants'

const Landing = () => {
  const {setRestaurant} = useContext(RestaurantContext);
  
  useEffect(() => {
    setRestaurant(0);
  });

  function handleClick(num) {
    setRestaurant(num);
  }

  return (
    <div className='h-screen w-screen grid grid-rows-2 md:grid-cols-2 md:grid-rows-1'>
      <Link 
        className='group bg-soi2front bg-cover flex-center hover:shadow-2xl'
        to={'/soi2/home'} 
        onClick={e => handleClick(2)}>
          <div className="h-full w-full overflow-hidden bg-black bg-fixed opacity-60 group-hover:opacity-30"></div>
          <div className='absolute flex-center flex-col'>
            <img className="h-64 group-hover:scale-110 transition duration-100"
              src={images.soi2}
              alt="soi 2 logo" />
          </div>
      </Link>
      <Link 
        className='group bg-soi3front bg-cover flex-center hover:shadow-lg'
        to={'/soi3/home'} 
        onClick={e => handleClick(3)}>
          <div className="h-full w-full overflow-hidden bg-black bg-fixed opacity-60 group-hover:opacity-30"></div>
          <div className='absolute flex-center flex-col'>
            <img className="h-64 group-hover:scale-110 transition duration-100"
              src={images.soi3}
              alt="soi 3 logo" />
          </div>  
      </Link>
    </div>
  );
}

export default Landing;
