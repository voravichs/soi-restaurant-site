import React from 'react';
import { Meat, MeatVegan } from '../../../components';
import { TbMeat } from 'react-icons/tb'

const MenuMeatChoice = () => {

    return (
        <div className='w-full mt-16 border border-double border-8 bg-white rounded-xl p-8 mx-auto'>
            <div className='flex-center text-3xl lg:text-5xl h-1/6 mb-4'>
                <TbMeat className='mr-2' />
                <p className='font-serif font-semibold text-6xl'>Protein Options</p>
            </div>
            <div className='w-36 sm:w-48 h-1 mb-4 border bg-black mx-auto'/>
            <div className='h-5/6 grid grid-cols-1 grid-rows-4 gap-4'>
                <div className='flex-center flex-wrap gap-4'>
                    <Meat meat='Chicken' size='xl' color='bg-blue-100'/>
                    <Meat meat='Pork' size='xl' color='bg-blue-100'/>
                    <MeatVegan meat='Tofu' size='xl' color='bg-green-100'/>
                    <MeatVegan meat='Vegetarian' size='lg' color='bg-green-100'/>
                </div>
                <div className='flex-center flex-wrap gap-4'>
                    <Meat meat='Beef +$2' size='xl' color='bg-red-100'/>
                    <Meat meat='Shrimp +$2' size='xl' color='bg-red-100'/>
                </div>
                <div className='flex-center flex-wrap gap-4'>
                    <Meat meat='Crispy Pork Belly $18' size='lg' color='bg-yellow-100'/>
                    <Meat meat='Seafood $18' size='xl' color='bg-yellow-100'/>
                    <Meat meat='Duck $18' size='xl' color='bg-yellow-100'/>
                </div>
                <div className='flex-center flex-wrap gap-4'>
                    <MeatVegan meat='Mock Duck $15' size='xl' color='bg-green-100'/>
                </div>
            </div>
        </div>

    )
}

export default MenuMeatChoice;
