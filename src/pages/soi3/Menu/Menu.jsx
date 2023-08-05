import React, {useContext, useEffect} from 'react';
import MenuSection from './MenuSection';
import MenuNoodleMeatChoice from '../../../components/MenuNoodleMeatChoice';

// import data
import menuData from '../../../constants/soi3data'

// Context
import { RestaurantContext } from '../../../contexts/RestaurantContext';

const Menu = () => {

  const {setRestaurant} = useContext(RestaurantContext);
  
  useEffect(() => {
    setRestaurant(3);
  });

  // Split menu data into sections
  const
  { appetizer,
    ricemeat,
    salad,
    specials,
    noodle,
    dessert,
    drinks,
    sides, }
      = menuData;

  return (
    <div className='p-16'>
      <div className='container mx-auto'>
        {/* Appetizers */}
        <h1 className='mb-8 text-5xl'> Appetizers </h1>
        <MenuSection section={appetizer}/>

        {/* RiceMeat */}
        <h1 className='mt-20 mb-8 text-5xl'> Rice & Meat </h1>
        <MenuSection section={ricemeat}/>

        {/* Salad */}
        <h1 className='mt-20 mb-8 text-5xl'> Salad </h1>
        <MenuSection section={salad}/>

        {/* Choice of Meat and Noodles */}
        <MenuNoodleMeatChoice/>

        {/* Specials */}
        <h1 className='mt-20 mb-8 text-5xl'> Special </h1>
        <MenuSection section={specials}/>

        {/* Noodles */}
        <h1 className='mt-20 mb-8 text-5xl'> Soi 3 Noodles </h1>
        <MenuSection section={noodle}/>

        {/* Dessert */}
        <h1 className='mt-20 mb-8 text-5xl'> Dessert </h1>
        <MenuSection section={dessert}/>

        {/* Drinks */}
        <h1 className='mt-20 mb-8 text-5xl'> Drinks </h1>
        <MenuSection section={drinks}/>

        {/* Sides */}
        <h1 className='mt-20 mb-8 text-5xl'> Sides </h1>
        <MenuSection section={sides}/>
      </div>
    </div>
  );
}

export default Menu;
