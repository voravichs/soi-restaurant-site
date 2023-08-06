import React from 'react';

// import data
import menuData from '../../../constants/soi2data'

// Import components
import MenuItemCard from '../../../components/MenuItemCard'
import { Link } from 'react-router-dom';

const Carousel = () => {
    // Get featured items from menu data
    const { featured } = menuData;

    return (
        <div className='flex flex-col m-16 p-8 bg-white border border-yellow-200 border-4 rounded-lg'>
            <div className='flex-center mb-4 flex-col gap-4 md:flex-row'>
                <div className='flex font-serif text-soi-green text-center text-5xl'> 
                    Popular Dishes 
                </div>
                <Link className='flex items-end' to="/soi2/menu">
                    <button className='font-serif text-white bg-soi-green p-2 text-2xl rounded-tl-lg rounded-br-lg hover:scale-105 transition duration-300 shrink-0'>
                        See Full Menu
                    </button>
                </Link>
            </div>
            <div className='flex-center'>
                <div className='w-64 h-1 mb-4 border border-soi-green bg-soi-green'/>
            </div>
            
            <div className='flex gap-[30px] overflow-x-scroll pb-10 h-[500px]'>
                {featured.map((product) => (
                    <div key={product.id}>
                        <MenuItemCard product={product} location="home"/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carousel;