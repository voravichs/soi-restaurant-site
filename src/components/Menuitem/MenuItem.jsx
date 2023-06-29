import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className=" w-full sm:w-2/3 lg:w-full my-4 flex flex-col">
    <div className="flex justify-center items-center">
      <p className="p__cormorant text-yellow-50 flex-1">{title}</p>
      <div class="app__menuitem-dash"></div>
      <div className="ml-4 flex justify-end items-end">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className="w-full mt-1">
      <p className="p__opensans text-slate-500">{tags}</p>
    </div>
  </div>
);

export default MenuItem;