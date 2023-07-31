import React, { useContext, useEffect } from 'react';
import MenuSection from './MenuSection';
import MenuMeatChoice from '../../../components/MenuMeatChoice';

// Icons
import { LuVegan } from 'react-icons/lu'

// import data
import menuData from '../../../constants/data'

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
    <div className='p-16'>
      <div className='container mx-auto'>
        {/* Appetizers */}
        <h1 className='mb-8 text-5xl'> Appetizers </h1>
        <MenuSection section={appetizer} />

        {/* Soup */}
        <h1 className='mt-16 mb-8 text-5xl'> Soup </h1>
        <MenuSection section={soup} />

        {/* Salad */}
        <h1 className='mt-16 mb-8 text-5xl'> Thai Spicy Plates </h1>
        <MenuSection section={salad} />

        {/* Choice of Meat */}
        <MenuMeatChoice />

        {/* Curry */}
        <h1 className='mt-16 mb-8 text-5xl'> Curry </h1>
        <MenuSection section={curry} />

        {/* Wok */}
        <h1 className='mt-16 mb-8 text-5xl'> Wok </h1>
        <MenuSection section={wok} />

        {/* Noodles */}
        <h1 className='mt-16 mb-8 text-5xl'> Noodles </h1>
        <MenuSection section={noodle} />

        {/* Fried Rice */}
        <h1 className='mt-16 mb-8 text-5xl'> Fried Rice </h1>
        <MenuSection section={friedrice} />

        {/* Unique */}
        <h1 className='mt-16 mb-8 text-5xl'> Soi 2 Unique </h1>
        <MenuSection section={unique} />

        {/* Mom */}
        <h1 className='mt-16 mb-8 text-5xl'> Mom's Recipes </h1>
        <MenuSection section={mom} />

        {/* Noodle Soup */}
        <h1 className='mt-16 mb-8 text-5xl'> Street Noodles </h1>
        <MenuSection section={noodlesoup} />

        {/* Vegetarian */}
        <div className='mt-16 mb-8 text-5xl flex'>
          <LuVegan className='mr-2' />
          Vegetarian
        </div>
        <MenuSection section={veg} />

        {/* Dessert */}
        <h1 className='mt-16 mb-8 text-5xl'> Dessert </h1>
        <MenuSection section={dessert} />

        {/* Drinks */}
        <h1 className='mt-16 mb-8 text-5xl'> Drinks </h1>
        <MenuSection section={drinks} />

        {/* Sides */}
        <h1 className='mt-16 mb-8 text-5xl'> Sides </h1>
        <MenuSection section={sides} />
      </div>
    </div>
  );
}

export default Menu;
