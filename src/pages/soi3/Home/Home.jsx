import React, {useContext, useEffect} from 'react';
import Jumbotron from './Jumbotron';
import Featured from './Featured';
import Hero from './Hero';
import OrderOnline from './OrderOnline';
import CrossPromo from './CrossPromo'

import { RestaurantContext } from '../../../contexts/RestaurantContext';

const Home = () => {
  const {setRestaurant} = useContext(RestaurantContext);
  
  useEffect(() => {
    setRestaurant(3);
  });

  return (
    <div>
      <Jumbotron />
      <Featured/>
      <Hero/>
      <OrderOnline/>
      <CrossPromo/>
    </div>
  )
}

export default Home;
