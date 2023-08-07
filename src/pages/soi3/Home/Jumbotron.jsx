import React from 'react';

const Jumbotron = () => (
  <div className="bg-jumbotron bg-center bg-cover h-screen flex flex-col justify-center">   
    <div className="h-full w-full overflow-hidden bg-black bg-fixed opacity-50"></div>
    <div className='absolute h-full w-full px-12 sm:px-24 2xl:px-48 flex-center flex-col'>
      <h1 className="font-serif text-center text-yellow-300 text-6xl sm:text-7xl xl:text-8xl font-bold tracking-wider capitalize leading-tight">
        Soi 3 Thai Noodle Shop
      </h1>
      <div className="font-serif text-center text-yellow-300 font-bold tracking-wider text-4xl lg:text-5xl">
        <p> (563) 345-4321 </p> 
      </div>
      <div className="font-serif text-center text-white font-normal tracking-wider my-8 text-2xl lg:text-3xl">
        <p> Monday - Friday: 11AM - 3PM & 4PM - 9PM </p> 
        <p> Saturday: 12PM - 9PM </p> 
        <p> Sunday: CLOSED </p>
      </div>
    </div>
  </div>
)

export default Jumbotron;