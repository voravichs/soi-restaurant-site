import React from 'react';
import Header from './Header'
import AboutUs from './HomeAboutUs';
import FindUs from './FindUs';
import SpecialMenu from './SpecialMenu';

export default function Home() {
  return (
    <div>
      <Header />
      <AboutUs />
      <SpecialMenu />
      <FindUs />
    </div>
  );
}
