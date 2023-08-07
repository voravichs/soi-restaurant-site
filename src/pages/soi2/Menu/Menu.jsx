import React, { useContext, useEffect } from 'react';
import MenuSection from './MenuSection';
import MenuMeatChoice from './MenuMeatChoice';

// Icons
import { LuVegan } from 'react-icons/lu'

// import data
import menuData from '../../../constants/soi2data'

// context
import { RestaurantContext } from '../../../contexts/RestaurantContext';

const Menu = () => {
  const { setRestaurant } = useContext(RestaurantContext);

  useEffect(() => {
    setRestaurant(2);
  });

  // Split menu data into sections
  const
    { appetizer, soup, salad, unique, mom, veg, dessert, noodlesoup, curry, noodle, wok, friedrice, drinks, sides }
      = menuData;

  return (
    <div className='py-16 px-8 sm:px-16'>
      <div className='container mx-auto'>
        {/* Appetizers */}
        <h1 className='mb-4 font-serif font-semibold text-6xl'> Appetizers </h1>
        <div className='w-48 sm:w-96 h-1 mb-4 border bg-black'/>
        <MenuSection section={appetizer} />

        {/* Soup */}
        <h1 className='mt-16 mb-4 font-serif font-semibold text-6xl'> Soup </h1>
        <div className='w-48 sm:w-96 h-1 mb-4 border bg-black'/>
        <MenuSection section={soup} />

        {/* Salad */}
        <h1 className='mt-16 mb-4 font-serif font-semibold text-6xl'> Thai Spicy Plates </h1>
        <div className='w-48 sm:w-96 h-1 mb-4 border bg-black'/>
        <MenuSection section={salad} />

        {/* Choice of Meat */}
        <MenuMeatChoice />

        {/* Curry */}
        <h1 className='mt-16 mb-4 font-serif font-semibold text-6xl'> Curry </h1>
        <div className='w-48 sm:w-96 h-1 mb-4 border bg-black'/>
        <MenuSection section={curry} />

        {/* Wok */}
        <h1 className='mt-16 mb-4 font-serif font-semibold text-6xl'> Wok </h1>
        <div className='w-48 sm:w-96 h-1 mb-4 border bg-black'/>
        <MenuSection section={wok} />

        {/* Noodles */}
        <h1 className='mt-16 mb-4 font-serif font-semibold text-6xl'> Noodles </h1>
        <div className='w-48 sm:w-96 h-1 mb-4 border bg-black'/>
        <MenuSection section={noodle} />

        {/* Fried Rice */}
        <h1 className='mt-16 mb-4 font-serif font-semibold text-6xl'> Fried Rice </h1>
        <div className='w-48 sm:w-96 h-1 mb-4 border bg-black'/>
        <MenuSection section={friedrice} />

        {/* Unique */}
        <h1 className='mt-16 mb-4 font-serif font-semibold text-6xl'> Soi 2 Unique </h1>
        <div className='w-48 sm:w-96 h-1 mb-4 border bg-black'/>
        <MenuSection section={unique} />

        {/* Mom */}
        <h1 className='mt-16 mb-4 font-serif font-semibold text-6xl'> Mom's Recipes </h1>
        <div className='w-48 sm:w-96 h-1 mb-4 border bg-black'/>
        <MenuSection section={mom} />

        {/* Noodle Soup */}
        <h1 className='mt-16 mb-4 font-serif font-semibold text-6xl'> Street Noodles </h1>
        <div className='w-48 sm:w-96 h-1 mb-4 border bg-black'/>
        <MenuSection section={noodlesoup} />

        {/* Vegetarian */}
        <div className='mt-16 mb-4 font-serif font-semibold text-6xl flex'>
          <LuVegan className='text-5xl mr-2 my-auto' />
          Vegetarian
        </div>
        <div className='w-48 sm:w-96 h-1 mb-4 border bg-black'/>
        <MenuSection section={veg} />

        {/* Dessert */}
        <h1 className='mt-16 mb-4 font-serif font-semibold text-6xl'> Dessert </h1>
        <div className='w-48 sm:w-96 h-1 mb-4 border bg-black'/>
        <MenuSection section={dessert} />

        {/* Drinks */}
        <h1 className='mt-16 mb-4 font-serif font-semibold text-6xl'> Drinks </h1>
        <div className='w-48 sm:w-96 h-1 mb-4 border bg-black'/>
        <MenuSection section={drinks} />

        {/* Sides */}
        <h1 className='mt-16 mb-4 font-serif font-semibold text-6xl'> Sides </h1>
        <div className='w-48 sm:w-96 h-1 mb-4 border bg-black'/>
        <MenuSection section={sides} />
      </div>
    </div>
  );
}

export default Menu;
