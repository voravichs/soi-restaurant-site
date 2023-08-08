import React from 'react';
import { images } from '../../../constants';
import { FaPhoneAlt } from 'react-icons/fa'

const OrderOnline = () => (
    <div className='mb-8 px-16 py-8 flex flex-col lg:flex-row gap-8 bg-white border-y-4'>
        <div className='flex flex-col w-full lg:w-1/2'>
            <div className='border flex-center flex-col w-full sm:w-2/3 mx-auto px-8 pt-4 mb-8 shadow rounded-xl'>
                <p className='font-serif text-center text-3xl sm:text-4xl font-bold tracking-wider'>
                    Visit Us!
                </p>
                <p className='font-sans text-center text-xl sm:text-2xl font-normal tracking-wide mb-8'>
                    102 E 3rd St, Davenport, IA 52801
                </p>
            </div>
            <div className='border flex-center w-full sm:w-2/3 mx-auto px-8 pt-4 mb-8 shadow rounded-xl'>
                <div className='flex-center text-3xl sm:text-4xl'>
                    <FaPhoneAlt />
                </div>

                <div className='flex flex-col text-center tracking-wide mb-8'>
                    <p className='font-serif font-bold text-3xl sm:text-4xl'>Order by phone</p>
                    <p className='font-sans text-xl sm:text-2xl'>(563) 345-4321</p>
                </div>
            </div>
            <p className='font-sans text-center text-2xl font-normal tracking-wide mb-4'>
                We are also available for delivery/pickup on:
            </p>
            <div>
                <a
                    className='flex-center'
                    href='https://www.grubhub.com/restaurant/soi-3-thai-noodle-shop-102-e-3rd-st-davenport/3188424'>
                    <img
                        src={images.grubhub}
                        alt='grubhub logo'
                        className='w-1/2 2xl:w-1/3 sm:p-8'
                    />
                </a>
            </div>
        </div>
        <div className='w-full lg:w-1/2 flex-center'>
            <img
                src={images.soi3front}
                alt="test"
                className='w-full max-w-lg lg:max-w-2xl'
            />
        </div>
    </div>
);

export default OrderOnline;