import React from 'react';

// import data
import menuData from '../../../constants/data'

// Import components
import MenuItemCard from '../../../components/MenuItemCard'
import { Link } from 'react-router-dom';

const Carousel = () => {
    // Get featured items from menu data
    const { featured } = menuData;

    return (
        <div className='flex flex-col m-20'>
            <div className='flex font-serif text-yellow-200 text-5xl mb-8'> 
                Popular Dishes 
            </div>
            <Link to="/soi2/menu">
                <div className='flex font-serif text-yellow-100 hover:text-yellow-300 text-2xl mb-8 cursor-pointer'>
                    See Full Menu
                </div>
            </Link>
            <div className='flex gap-[30px] overflow-x-scroll pb-10'>
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