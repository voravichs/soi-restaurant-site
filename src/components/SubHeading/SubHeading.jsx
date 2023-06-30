import React from 'react';

import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div className='mb-4'>
    <p className="p__cormorant text-2xl">{title}</p>
    <img src={images.spoon} alt="spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
