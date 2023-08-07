import React from 'react';
import { images } from '../../../constants';
import { Link } from 'react-router-dom';

const CrossPromo = () => (
    <div className='my-20 mx-16 sm:mx-32 flex-center flex-col lg:flex-row'>
        <div className='sm:px-12 lg:w-1/3 lg:pr-12 lg:pl-0 pt-12 font-serif text-center text-5xl font-bold tracking-wider'>
            <p className='mb-4 font-serif font-bold text-3xl'>
                Check out our sister restaurant in Davenport, IA:
            </p>
        </div>
        <div className='w-1/2 lg:w-1/3 flex-center'>
            <Link to='/soi3/home'>
                <img
                    src={images.soi3}
                    alt="test"
                    className='w-full'
                />
            </Link>
        </div>
    </div>
);

export default CrossPromo;