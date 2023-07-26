import React from 'react';

import { images } from '../../constants';
import { Link } from 'react-router-dom';

const AboutUs = () => (
  <div className="relative bg-[url('./assets/bg.png')] bg-center bg-cover bg-repeat bg-fixed flex-center px-16 py-8 sm:py-16 md:py-24" id="about">
    <div className="absolute inset-0 flex-center ">
      <img className="h-64 w-64 z-0" src={images.G} alt="g letter" />
    </div>

    <div className="w-full z-20 flex-center flex-col lg:flex-row">
      <div className="flex flex-1 flex-col justify-end items-end text-right">
        <h1 className="font-serif text-yellow-200 text-6xl leading-relaxed tracking-wider">
          About Us
        </h1>
        <img src={images.spoon} alt="about_spoon" className="w-20" />
        <p className="font-sans text-white font-normal tracking-wider capitalize text-lg leading-7 m-4">
          Experience the essence of Thailand at Soi 2. We serve authentic Thai cuisine, marrying traditional recipes with fresh ingredients. Join us at Soi 2 for a unique culinary adventure.
        </p>
        <Link to="/aboutus">
          <button type="button" className="font-serif font-bold tracking-wider px-2 py-6 text-2xl text-yellow-200">
            Learn More
          </button>
        </Link>

      </div>

      <div className="lg:m-8 xl:m-16 flex-center">
        <img className="h-[910px] 2xl:h-[1110px]" src={images.knife} alt="about_knife" />
      </div>

      <div className="flex flex-1 flex-col justify-start items-start text-left">
        <h1 className="font-serif text-yellow-200 text-6xl leading-relaxed tracking-wider">
          Our History
        </h1>
        <img src={images.spoon} alt="about_spoon" className="w-20" />
        <p className="font-sans text-white font-normal tracking-wider capitalize text-lg leading-7 m-4">
          Established in 2023, Soi 2 channels the soul of Bangkok's street food into each authentic dish. Our devotion to quality and a memorable dining experience are paramount.
        </p>
        <Link to="/aboutus">
          <button type="button" className="font-serif font-bold tracking-wider px-2 py-6 text-2xl text-yellow-200">
            Learn More
          </button>
        </Link>
      </div>

    </div>
  </div>
);

export default AboutUs;
