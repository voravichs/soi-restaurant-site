import React, {useContext, useEffect} from 'react';

import LeftPicHero from './LeftPicHero';
import RightPicHero from './RightPicHero';

import { RestaurantContext } from '../../contexts/RestaurantContext';

const AboutUs = () => {
  const {setRestaurant} = useContext(RestaurantContext);

  useEffect(() => {
    setRestaurant(2);
  });

  return (
    <div>
      <LeftPicHero 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum."/>
      <RightPicHero 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum."/>
    </div>
  );
}

export default AboutUs;