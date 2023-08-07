import React from 'react';

import { LuVegan } from 'react-icons/lu'

const MeatVegan = ({meat, size, color}) => {
    return (
        <div className={`${color} font-sans text-center border border-2 rounded-full p-2 w-48 flex-center`}> 
            <LuVegan className='mr-2'/> 
            <p className={`text-${size}`}>{meat}</p>
        </div>
    )
}

export default MeatVegan;