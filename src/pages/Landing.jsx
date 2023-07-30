import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { RestaurantContext } from '../contexts/RestaurantContext';

const Landing = () => {
  const {setRestaurant} = useContext(RestaurantContext);

  setRestaurant(0);

  function handleClick(num) {
    setRestaurant(num);
  }

  return (
    <div>
      <Link to={'/soi2'} onClick={e => handleClick(2)}>Soi2</Link>
      <Link to={'/soi3'} onClick={e => handleClick(3)}>Soi3</Link>
    </div>
  );
}

export default Landing;
