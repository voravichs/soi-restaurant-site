import React from 'react';

// import data
import menuData from '../../../constants/soi3data'

// Import components
import MenuItemCard from '../../../components/MenuItemCard'

const Carousel = () => {
    // Get featured items from menu data
    const { featured } = menuData;

    return (
        <div className='flex flex-col m-20'>
            <h1 className='flex font-serif text-yellow-200 text-5xl mb-8'> 
                Popular Dishes 
            </h1>
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