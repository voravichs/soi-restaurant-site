import React from 'react';
import { images } from '../../../constants';
import { FaPhoneAlt } from 'react-icons/fa'
import TestImg from '../../../assets/testhero.jpg';

const OrderOnline  = () => (
  <div className='my-20 mx-12 sm:mx-28 flex flex-col lg:flex-row gap-8'> 
    <div className='flex flex-col w-full lg:w-1/2'>
        <p className='font-serif text-center text-5xl font-bold tracking-wider'>
            Visit Us!
        </p>
        <p className='font-serif text-center text-3xl font-bold tracking-wide mb-8'>
            1825 2nd Ave, Rock Island, IL 61201
        </p>
        
        <div className='flex-center'>
            <div className='flex-center text-4xl'>
                <FaPhoneAlt/>
            </div>
            
            <div className='flex flex-col font-serif text-center text-3xl tracking-wide mb-8'>
                <p className='font-bold'>Order by phone</p>
                <p>309-206-4169</p>
            </div>
        </div>
        
        <p className='font-serif text-center text-3xl font-bold tracking-wide'>We are also available for delivery/pickup on:</p>
        <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-2'>
            <a href='https://www.grubhub.com/restaurant/soi-2-thai-1825-2nd-ave-rock-island/4378432'>
                <img
                    src={images.grubhub}
                    alt='grubhub logo'
                    className='w-full p-8 2xl:p-16'
                />
            </a>  
            <a href='https://www.doordash.com/store/soi-2-thai-rock-island-607063/'>
                <img
                    src={images.doordash}
                    alt='doordash logo'
                    className='w-full p-8 2xl:p-16'
                />
            </a>  
        </div>
    </div>
    <div className='w-full lg:w-1/2 flex-center'>
        <img
            src={TestImg}
            alt="test"
            className='w-full max-w-lg lg:max-w-2xl'
        />
    </div>
  </div>
);

export default OrderOnline;