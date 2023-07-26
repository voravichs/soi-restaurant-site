import React from 'react';


// import components
import MenuItemCard from '../../components/MenuItemCard';

const MenuSection = ({section}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {section.map((product) => {
                return (
                    <MenuItemCard product={product} key={product.id} />
                );
            })}
        </div>
    );
}

export default MenuSection;