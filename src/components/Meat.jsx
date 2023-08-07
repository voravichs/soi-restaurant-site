import React from 'react';

import { CiBowlNoodles } from 'react-icons/ci';
import { TbMeat } from 'react-icons/tb';

const Meat = ({meat, size, color}) => {
    return (
        <div className={`${color} font-sans text-center border border-2 rounded-full p-2 w-48`}>
            <div className='flex-center'>
                {meat === "Protein" && 
                    <TbMeat className='text-2xl mr-2'/>
                } 
                {meat === "Noodle" && 
                    <CiBowlNoodles className='text-3xl mr-2'/>
                } 
                <p className={`text-${size}`}>{meat}</p>
            </div>
        </div>
    )
}

export default Meat;