import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';

const SpecialMenu = () => (
  <div className="bg-soi-green flex__center flex-col px-16 py-8 sm:py-16 md:py-24" id="menu">
    <div className="mb-8 text-center">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Popular Dishes</h1>
    </div>
    
    <div className="my-4 flex flex-col lg:flex-row justify-center items-start">
      <div className="w-full lg:w-1/3 flex-1 flex-col w-full flex__center">
        <p className="font-serif text-yellow-200 text-5xl text-semibold tracking-wider">
          Appetizers
        </p>
        <div className="flex flex-col my-8 w-full items-center">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="lg:w-1/3 m-8 mb-16 lg:my-0">
        <img className='w-1/2 lg:w-full h-auto mx-auto' id="special-menu-img" src={images.menu} alt="menu__img" />
      </div>

      <div className="lg:w-1/3 flex-1 flex-col w-full flex__center">
        <p className="app__specialMenu-menu_heading text-5xl text-semibold tracking-wider">
          Noodles
        </p>
        <div className="flex flex-col my-8 w-full items-center">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    <div>
      <button type="button" className="custom__button text-2xl text-yellow-50">View Full Menu</button>
    </div>
  </div>
);

export default SpecialMenu;