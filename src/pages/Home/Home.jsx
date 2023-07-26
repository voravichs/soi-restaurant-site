import React from 'react';
import AboutUs from './HomeAboutUs';
import FindUs from './FindUs';
import Jumbotron from './Jumbotron';
import Carousel from './Carousel';

const Home = () => (
  <div>
    <Jumbotron />
    <Carousel />
    <AboutUs />
    <FindUs />
  </div>
)

export default Home;
