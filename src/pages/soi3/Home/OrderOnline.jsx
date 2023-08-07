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
            102 E 3rd St, Davenport, IA 52801
        </p>
        
        <div className='flex-center'>
            <div className='flex-center text-4xl'>
                <FaPhoneAlt/>
            </div>
            
            <div className='flex flex-col font-serif text-center text-3xl tracking-wide mb-8'>
                <p className='font-bold'>Order by phone</p>
                <p>(563) 345-4321</p>
            </div>
        </div>
        
        <p className='font-serif text-center text-3xl font-bold tracking-wide'>We are also available for delivery/pickup on:</p>
        <div>
            <a 
                className='flex-center'
                href='https://www.grubhub.com/restaurant/soi-2-thai-1825-2nd-ave-rock-island/4378432'>
                <img
                    src={images.grubhub}
                    alt='grubhub logo'
                    className='w-1/2 2xl:w-1/3 p-8 2xl:p-16'
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