import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RestaurantContext } from '../contexts/RestaurantContext';

const Tabs = () => {
  const { restaurant } = useContext(RestaurantContext);

  return (
    <div className="tabs w-full md:w-1/2">
      <ol className="h-full tab-list grid grid-flow-col justify-stretch items-end ">
        <Link to={'/soi2/home'}>
          <li
            className={`${restaurant === 2 ? (
              "font-sans font-bold tracking-wider capitalize text-lg text-center sm:text-xl xl:text-2xl list-none px-4 sm:px-8 py-1 mr-50 bg-white text-soi-green font-bold border-solid border-t border-x border-b-0 border-2 border-green-50 rounded-t-2xl"
            ) : restaurant === 3 ? (
              "font-sans text-white font-normal tracking-wider capitalize text-lg text-center sm:text-xl xl:text-2xl list-none px-4 sm:px-8 py-1 mr-50"
            ) : "hidden"}`}>
            Soi 2
          </li>
        </Link>
        <Link to={'/soi3/home'}>
          <li
            className={`${restaurant === 3 ? (
              "font-sans font-bold tracking-wider capitalize text-lg text-center sm:text-xl xl:text-2xl list-none px-4 sm:px-8 py-1 mr-50 bg-white text-soi-green font-bold border-solid border-t border-x border-b-0 border-2 border-green-50 rounded-t-2xl"
            ) : restaurant === 2 ? (
              "font-sans text-white font-normal tracking-wider capitalize text-lg text-center sm:text-xl xl:text-2xl list-none px-4 sm:px-8 py-1 mr-50"
            ) : "hidden"}`}>
            Soi 3
          </li>
        </Link>
      </ol>
    </div>
  );
}

export default Tabs;

