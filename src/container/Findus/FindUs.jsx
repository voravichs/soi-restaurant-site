import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg flex flex-col lg:flex-row justify-between items-center min-h-screen px-16 py-8 sm:py-16 md:py-24" id="contact">
    <div className="flex flex-1 flex-col w-full justify-center items-start">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant mb-12">Find Us</h1>
      <div>
        <p className="p__opensans">Soi 2 Thai Street Food, 1825 2nd Ave, Rock Island, IL 61201</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Tue - Fri: 11:00 am - 03:00 pm & 04:30 pm - 09:00 pm</p>
        <p className="p__opensans">Sat: 12:00 pm - 09:00 pm</p>
        <p className="p__opensans">Sun: 12:00 pm - 08:00 pm</p>
      </div>
      <button type="button" className="custom__button mb-8 text-2xl text-yellow-50">Visit Us</button>
    </div>

    <div className="flex flex-1 w-full justify-center items-center ml-2">
      <img className='w-4/5' src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;