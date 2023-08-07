import React, {useContext, useEffect} from 'react';
import MenuSection from './MenuSection';
import MenuNoodleMeatChoice from './MenuNoodleMeatChoice';

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
    <div className='py-16 px-8 sm:px-16'>
      <div className='container mx-auto'>
        {/* Appetizers */}
        <h1 className='mb-4 font-serif font-semibold text-6xl'> Appetizers </h1>
        <div className='w-48 sm:w-96 h-1 mb-4 border bg-black'/>
        <MenuSection section={appetizer}/>

        {/* RiceMeat */}
        <h1 className='mt-20 mb-4 font-serif font-semibold text-6xl'> Rice & Meat </h1>
        <div className='w-48 sm:w-96 h-1 mb-4 border bg-black'/>
        <MenuSection section={ricemeat}/>

        {/* Salad */}
        <h1 className='mt-20 mb-4 font-serif font-semibold text-6xl'> Salad </h1>
        <div className='w-48 sm:w-96 h-1 mb-4 border bg-black'/>
        <MenuSection section={salad}/>

        {/* Choice of Meat and Noodles */}
        <MenuNoodleMeatChoice/>

        {/* Specials */}
        <h1 className='mt-20 mb-4 font-serif font-semibold text-6xl'> Special </h1>
        <div className='w-48 sm:w-96 h-1 mb-4 border bg-black'/>
        <MenuSection section={specials}/>

        {/* Noodles */}
        <h1 className='mt-20 mb-4 font-serif font-semibold text-6xl'> Soi 3 Noodles </h1>
        <div className='w-48 sm:w-96 h-1 mb-4 border bg-black'/>
        <MenuSection section={noodle}/>

        {/* Dessert */}
        <h1 className='mt-20 mb-4 font-serif font-semibold text-6xl'> Dessert </h1>
        <div className='w-48 sm:w-96 h-1 mb-4 border bg-black'/>
        <MenuSection section={dessert}/>

        {/* Drinks */}
        <h1 className='mt-20 mb-4 font-serif font-semibold text-6xl'> Drinks </h1>
        <div className='w-48 sm:w-96 h-1 mb-4 border bg-black'/>
        <MenuSection section={drinks}/>

        {/* Sides */}
        <h1 className='mt-20 mb-4 font-serif font-semibold text-6xl'> Sides </h1>
        <div className='w-48 sm:w-96 h-1 mb-4 border bg-black'/>
        <MenuSection section={sides}/>
      </div>
    </div>
  );
}

export default Menu;
