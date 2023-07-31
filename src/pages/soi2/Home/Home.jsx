import React, {useContext, useEffect} from 'react';
import AboutUs from './HomeAboutUs';
import FindUs from './FindUs';
import Jumbotron from './Jumbotron';
import Carousel from './Carousel';
import { RestaurantContext } from '../../../contexts/RestaurantContext';

const Home = () => {
  const {setRestaurant} = useContext(RestaurantContext);
  
  useEffect(() => {
    setRestaurant(2);
  });

  return (
    <div>
      <Jumbotron />
      <Carousel />
      <AboutUs />
      <FindUs />
    </div>
  )
}

export default Home;
