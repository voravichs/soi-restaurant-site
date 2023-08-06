import React, {useContext, useEffect} from 'react';
import Jumbotron from './Jumbotron';
import Carousel from './Carousel';
import { RestaurantContext } from '../../../contexts/RestaurantContext';

const Home = () => {
  const {setRestaurant} = useContext(RestaurantContext);
  
  useEffect(() => {
    setRestaurant(3);
  });

  return (
    <div>
      <Jumbotron />
      <Carousel/>
    </div>
  )
}

export default Home;
