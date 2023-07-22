import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="bg-[url('./assets/bg.png')] bg-center bg-cover bg-repeat bg-fixed flex flex-col lg:flex-row justify-between items-center min-h-screen px-16 py-8 sm:py-16 md:py-24" id="contact">
    <div className="flex flex-1 flex-col w-full justify-center items-start">
      <SubHeading title="Contact" />
      <h1 className="font-serif text-yellow-200 text-6xl leading-relaxed tracking-wider mb-12">Find Us</h1>
      <div>
        <p className="font-sans text-white font-normal tracking-wider capitalize text-lg leading-7">
          Soi 2 Thai Street Food, 1825 2nd Ave, Rock Island, IL 61201
        </p>
        <p className="font-sans text-yellow-200 text-3xl font-normal tracking-wider capitalize leading-7 mt-8 mb-4">
          Opening Hours
        </p>
        <p className="font-sans text-white font-normal tracking-wider capitalize text-lg leading-7">
          Tue - Fri: 11:00 am - 03:00 pm & 04:30 pm - 09:00 pm
        </p>
        <p className="font-sans text-white font-normal tracking-wider capitalize text-lg leading-7">
          Sat: 12:00 pm - 09:00 pm
        </p>
        <p className="font-sans text-white font-normal tracking-wider capitalize text-lg leading-7">
          Sun: 12:00 pm - 08:00 pm
        </p>
      </div>
      <button type="button" className="font-serif font-bold tracking-wider px-2 py-6 text-2xl text-yellow-200">
        Visit Us
      </button>
    </div>

    <div className="flex flex-1 w-full justify-center items-center ml-2">
      <img className='w-4/5' src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;