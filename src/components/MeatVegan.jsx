import React from 'react';

import { LuVegan } from 'react-icons/lu'

const MeatVegan = ({meat}) => {
    return (
        <div className='font-sans text-center border rounded-full p-2 w-48 flex-center'> 
            <LuVegan className='mr-2'/> {meat}
        </div>
    )
}

export default MeatVegan;