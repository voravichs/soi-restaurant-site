import React from 'react';

import { images } from '../constants';

const SubHeading = ({ title }) => (
  <div className='mb-4'>
    <p className="font-serif text-white text-bold tracking-wide text-3xl leading-relaxed">{title}</p>
    <img src={images.spoon} alt="spoon" className="w-16" />
  </div>
);

export default SubHeading;
