import React from 'react';
import Jumbotron from '../Jumbotron';
import LeftPicHero from '../LeftPicHero';
import RightPicHero from '../RightPicHero';

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <LeftPicHero />
      <RightPicHero />
    </div>
  );
}
