import React from 'react';
import { images } from '../../../constants';
import { FaPhoneAlt } from 'react-icons/fa'
import TestImg from '../../../assets/testhero.jpg';

const OrderOnline = () => (
    <div className='mb-8 px-16 py-8 flex flex-col lg:flex-row gap-8 bg-white border-y-4'>
        <div className='flex flex-col w-full lg:w-1/2'>
            <p className='font-serif text-center text-5xl font-bold tracking-wider'>
                Visit Us!
            </p>
            <p className='font-sans text-center text-2xl font-normal tracking-wide mb-8'>
                1825 2nd Ave, Rock Island, IL 61201
            </p>

            <div className='border flex-center w-full sm:w-2/3 mx-auto px-8 pt-4 mb-8 shadow rounded-xl'>
                <div className='flex-center text-4xl'>
                    <FaPhoneAlt />
                </div>

                <div className='flex flex-col text-center tracking-wide mb-8'>
                    <p className='font-serif font-bold text-3xl'>Order by phone</p>
                    <p className='font-sans text-xl'>(309) 206-4169</p>
                </div>
            </div>

            <p className='font-sans text-center text-2xl font-normal tracking-wide'>
                We are also available for delivery/pickup on:
            </p>
            <div className='w-full sm:w-1/2 lg:w-2/3 grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 mx-auto'>
                <a href='https://www.grubhub.com/restaurant/soi-2-thai-1825-2nd-ave-rock-island/4378432'>
                    <img
                        src={images.grubhub}
                        alt='grubhub logo'
                        className='w-full p-4 2xl:p-8'
                    />
                </a>
                <a href='https://www.doordash.com/store/soi-2-thai-rock-island-607063/'>
                    <img
                        src={images.doordash}
                        alt='doordash logo'
                        className='w-full p-4 2xl:p-8'
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