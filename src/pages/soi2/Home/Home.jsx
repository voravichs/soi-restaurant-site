import React, {useContext, useEffect} from 'react';
import Jumbotron from './Jumbotron';
import Carousel from './Carousel';
import Hero from './Hero';

import { RestaurantContext } from '../../../contexts/RestaurantContext';
import OrderOnline from './OrderOnline';
const Home = () => {
  const {setRestaurant} = useContext(RestaurantContext);
  
  useEffect(() => {
    setRestaurant(2);
  });

  return (
    <div>
      <Jumbotron />
      <Carousel />
      <Hero />
      <OrderOnline/>
    </div>
  )
}

export default Home;
