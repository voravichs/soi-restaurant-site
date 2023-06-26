import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';


const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor" />
      <h1 className="app__header-h1">The place for Thai Street Food</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Experience the warmth of Thailand in every dish at our restaurant, where we serve authentic Thai cuisine crafted with passion and the finest local ingredients</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
