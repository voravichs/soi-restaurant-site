import React from 'react';
import { Meat, MeatVegan } from '.';
import { TbMeat } from 'react-icons/tb'

const MenuMeatChoice = () => {

    return (
        <div className='flex-center mt-8'>
            <div className='w-full lg:w-1/2 mt-8 border border-double border-8 rounded-lg p-8'>
                <div className='flex-center text-3xl lg:text-5xl h-1/6 mb-8'>
                    <TbMeat className='mr-2' />
                    Protein Options
                </div>
                <div className='h-5/6 grid grid-cols-1 grid-rows-5 gap-4'>
                    <div className='flex-center flex-wrap gap-4'>
                        <Meat meat='Chicken' />
                        <Meat meat='Pork' />
                    </div>
                    <div className='flex-center flex-wrap gap-4'>
                        <MeatVegan meat='Tofu' />
                        <MeatVegan meat='Vegetarian' />
                    </div>
                    <div className='flex-center flex-wrap gap-4'>
                        <Meat meat='Beef +$2' />
                        <Meat meat='Shrimp +$2' />
                    </div>
                    <div className='flex-center flex-wrap gap-4'>
                        <Meat meat='Crispy Pork Belly $18' />
                        <Meat meat='Seafood $18' />
                        <Meat meat='Duck $18' />
                    </div>
                    <div className='flex-center flex-wrap gap-4'>
                        <MeatVegan meat='Mock Duck $15' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MenuMeatChoice;
