import React from 'react';
import { TbMeat } from 'react-icons/tb';

const Meat = ({meat, size}) => {
    return (
        <div className='font-sans text-center border rounded-full p-2 w-48'>
            <div className='flex-center'>
                {meat === "Protein" && 
                    <TbMeat className='text-2xl mr-2'/>
                } 
                <p className={`text-${size}`}>{meat}</p>
            </div>
        </div>
    )
}

export default Meat;