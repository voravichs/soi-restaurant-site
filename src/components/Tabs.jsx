import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RestaurantContext } from '../contexts/RestaurantContext';

const Tabs = () => {
  const { restaurant } = useContext(RestaurantContext);

  return (
    <div className="tabs w-1/2 md:w-1/3 row-span-2 col-span-2 md:col-span-1 xl:col-span-3">
      <ol className="h-full tab-list grid grid-flow-col justify-stretch items-end ">
        <Link to={'/soi2'}>
          <li
            className={`${restaurant === 2 ? (
              "font-sans font-black tracking-wider capitalize text-lg leading-7 text-center sm:text-xl xl:text-2xl list-none px-4 sm:px-8 py-2 mr-50 bg-white text-soi-green font-bold border-solid border-t border-x border-b-0 border-2 border-green-50 rounded-t-2xl"
            ) : restaurant === 3 ? (
              "font-sans text-white font-normal tracking-wider capitalize text-lg leading-7 text-center sm:text-xl xl:text-2xl list-none px-4 sm:px-8 py-2 mr-50"
            ) : "hidden"}`}>
            Soi 2
          </li>
        </Link>
        <Link to={'/soi3'}>
          <li
            className={`${restaurant === 3 ? (
              "font-sans font-black tracking-wider capitalize text-lg leading-7 text-center sm:text-xl xl:text-2xl list-none px-4 sm:px-8 py-2 mr-50 bg-white text-soi-green font-bold border-solid border-t border-x border-b-0 border-2 border-green-50 rounded-t-2xl"
            ) : restaurant === 2 ? (
              "font-sans text-white font-normal tracking-wider capitalize text-lg leading-7 text-center sm:text-xl xl:text-2xl list-none px-4 sm:px-8 py-2 mr-50"
            ) : "hidden"}`}>
            Soi 3
          </li>
        </Link>
      </ol>
    </div>
  );
}

export default Tabs;

