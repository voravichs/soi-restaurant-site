import React from 'react';
import { BsFacebook } from 'react-icons/bs';

import { images } from '../constants';

const Footer = () => (
  <div className="w-full relative flex justify-start items-center flex-col bg-soi-green pt-0 px-16 pb-24" id="login">
    <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between mt-20 px-8">
      <div className="flex-1 m-4 text-center text-white font-normal tracking-wider capitalize leading-10">
        <h1 className="font-serif  mb-4 text-4xl xl:text-5xl">
          Contact Us
        </h1>
        <p className="font-sans text-xl">
          1825 2nd Ave, Rock Island, IL 61201, USA
        </p>
        <p className="font-sans text-xl">
          309-206-4159
        </p>
      </div>

      <div className="flex-1 m-4 text-center">
        <div className='flex justify-center'>
          <img className='w-60 mb-8' src={images.soi} alt="footer_logo" />
        </div>
        <div className="flex justify-center mt-2 gap-4">
          <a href="https://www.facebook.com/soi2Thaistreetfood/">
            <BsFacebook className='text-6xl cursor-pointer fill-white hover:fill-sky-400'/>
          </a>
          <a href='https://www.grubhub.com/restaurant/soi-2-thai-1825-2nd-ave-rock-island/4378432'>
            <img
                src={images.grubhub}
                alt='grubhub logo'
                className='w-16 hover:contrast-50'
            />
          </a> 
          <a href='https://www.doordash.com/store/soi-2-thai-rock-island-607063/'>
            <img
                src={images.doordash}
                alt='doordash logo'
                className='w-16 hover:contrast-50'
            />
          </a>  
        </div>
      </div>

      <div className="flex-1 m-4 text-center">
        <h1 className="font-serif text-white font-normal tracking-wider capitalize text-4xl leading-10 mb-4 xl:text-5xl">
          Working Hours
        </h1>
        <div className="font-sans text-center text-white font-normal tracking-wider text-lg lg:text-xl">
          <p> Monday: CLOSED </p> 
          <p> Tuesday - Friday: 11AM - 3PM & 4:30PM - 9PM</p>
          <p> Saturday: 12PM - 9PM</p>
          <p> Sunday: 12PM - 8PM </p> 
      </div>
      </div>
    </div>

    <div className="mt-3">
      <p className="text-center font-sans text-white font-normal tracking-wider capitalize text-lg leading-7">
        2023 Soi Company Restaurants. All Rights reserved.
      </p>
    </div>

  </div>
);

export default Footer;