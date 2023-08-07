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
                102 E 3rd St, Davenport, IA 52801
            </p>
            <div className='border flex-center w-2/3 mx-auto px-8 pt-4 mb-8 shadow rounded-xl'>
                <div className='flex-center text-4xl'>
                    <FaPhoneAlt />
                </div>

                <div className='flex flex-col text-center tracking-wide mb-8'>
                    <p className='font-serif font-bold text-3xl mb-2'>Order by phone</p>
                    <p className='font-sans text-xl'>(563) 345-4321</p>
                </div>
            </div>
            <p className='font-sans text-center text-2xl font-normal tracking-wide'>
                We are also available for delivery/pickup on:
            </p>
            <div>
                <a
                    className='flex-center'
                    href='https://www.grubhub.com/restaurant/soi-2-thai-1825-2nd-ave-rock-island/4378432'>
                    <img
                        src={images.grubhub}
                        alt='grubhub logo'
                        className='w-1/2 2xl:w-1/3 p-8 2xl:p-12'
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