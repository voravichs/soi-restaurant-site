import React from 'react';

// import components
import { MenuItemCard } from '../../../components';

const MenuSection = ({section}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {section.map((product) => {
                return (
                    <MenuItemCard product={product} key={product.id} location="menu" />
                );
            })}
        </div>
    );
}

export default MenuSection;