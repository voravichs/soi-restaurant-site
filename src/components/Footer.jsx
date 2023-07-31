import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { images } from '../constants';

const Footer = () => (
  <div className="w-full relative flex justify-start items-center flex-col bg-slate-950 pt-0 px-16 pb-24" id="login">
    <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between mt-20 px-8">
      <div className="flex-1 m-4 text-center ">
        <h1 className="font-serif text-white font-normal tracking-wider capitalize text-3xl leading-10 mb-4 xl:text-5xl">
          Contact Us
        </h1>
        <p className="font-sans text-white font-normal tracking-wider capitalize text-lg leading-7">
          1825 2nd Ave, Rock Island, IL 61201, USA
        </p>
        <p className="font-sans text-white font-normal tracking-wider capitalize text-lg leading-7">
          +1 309-206-4159
        </p>
      </div>

      <div className="flex-1 m-4 text-center">
        <div className='flex justify-center'>
          <img className='w-60 mb-8' src={images.gericht} alt="footer_logo" />
        </div>
        <p className="font-serif text-white font-normal tracking-wider capitalize text-xl leading-7">
          &quot;The best way to find yourself is to lose yourself in the service of others.&quot;
        </p>
        <div className='flex justify-center'>
          <img src={images.spoon} className="w-20 mt-8" alt='spoon'/>
        </div>
        <div className="flex justify-center mt-2">
          <a href="https://www.facebook.com/soi2Thaistreetfood/">
            <FiFacebook className='fill-white m-2 text-4xl cursor-pointer hover:fill-yellow-500'/>
          </a>
          <FiTwitter className='fill-white m-2 text-4xl cursor-pointer hover:fill-yellow-500'/>
          <FiInstagram className='fill-white m-2 text-4xl cursor-pointer hover:fill-yellow-500'/>
        </div>
      </div>

      <div className="flex-1 m-4 text-center">
        <h1 className="font-serif text-white font-normal tracking-wider capitalize text-3xl leading-10 mb-4 xl:text-5xl">
          Working Hours
        </h1>
        <p className="font-sans text-white font-normal tracking-wider capitalize text-lg leading-7">
          Monday-Friday: <br />
          11:00 am - 09:00 am <br />
          Saturday-Sunday: <br />
          12:00 am - 9:00 pm <br />
        </p>
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