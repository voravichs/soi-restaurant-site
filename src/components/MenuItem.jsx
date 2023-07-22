import React from 'react';

const MenuItem = ({ title, price, tags }) => (
  <div className=" w-full sm:w-2/3 lg:w-full my-4 flex flex-col">
    <div className="flex justify-center items-center">
      <p className="p__cormorant text-yellow-50 flex-1">{title}</p>
      <div class="w-[90px] h-[1px] bg-yellow-200 my-4"></div>
      <div className="ml-4 flex justify-end items-end">
        <p className="font-sans text-white font-normal tracking-wider capitalize text-lg leading-7">{price}</p>
      </div>
    </div>

    <div className="w-full mt-1">
      <p className="font-sans text-white font-normal tracking-wider capitalize text-lg leading-7 text-slate-500">{tags}</p>
    </div>
  </div>
);

export default MenuItem;