import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter md:py-8 px-16 py-8">
    <div className="text-center">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center lg:flex-col mt-12">
      <input className='lg:mb-8 2xl:text-4xl' type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button text-yellow-50 text-2xl">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;