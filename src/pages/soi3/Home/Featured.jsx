import React from 'react';

import { CgScrollH } from 'react-icons/cg'

// import data
import menuData from '../../../constants/soi3data'

// Import components
import MenuItemCard from '../../../components/MenuItemCard'
import { Link } from 'react-router-dom';

const Featured = () => {
    // Get featured items from menu data
    const { featured } = menuData;

    return (
        <div className='flex flex-col mb-8 px-16 py-8 bg-white border-y-4'>
            <div className='flex-center mb-4 flex-col gap-4 md:flex-row'>
                <div className='flex font-serif text-center text-5xl'>
                    Popular Dishes
                </div>
                <Link className='flex items-end' to="/soi2/menu">
                    <button className='font-serif text-white bg-soi-green p-2 text-2xl font-bold rounded-tl-lg rounded-br-lg hover:scale-105 transition duration-300 shrink-0'>
                        See Full Menu
                    </button>
                </Link>
            </div>
            <div className='w-64 h-1 mb-4 border bg-black mx-auto' />
            <div className='flex gap-[30px] overflow-x-scroll pb-4 h-[500px]'>
                {featured.map((product) => (
                    <div key={product.id}>
                        <MenuItemCard product={product} location="home" />
                    </div>
                ))}
            </div>
            <div className='flex-center'>
                <CgScrollH className='text-3xl xl:text-4xl text-soi-green'/>
            </div>
        </div>
    )
}

export default Featured;