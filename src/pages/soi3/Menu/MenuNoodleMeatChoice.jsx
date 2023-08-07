import React from 'react';
import { Meat, MeatVegan } from '../../../components';
import { CiBowlNoodles } from 'react-icons/ci';
import { TbMeat } from 'react-icons/tb';

const MenuNoodleMeatChoice = () => {

    return (
        <div className='w-full mt-16 border border-double border-8 bg-white rounded-xl p-8 mx-auto'>
            <div className='flex-center text-3xl lg:text-5xl h-1/6 mb-4'>
                <CiBowlNoodles className='text-4xl sm:text-5xl mr-2' />
                <p className='font-serif font-semibold text-5xl'>Noodle Options</p>
            </div>
            <div className='w-36 sm:w-48 h-1 mb-4 border bg-black mx-auto' />
            <div className='flex-center flex-wrap gap-4 h-1/6 mb-4'>
                <Meat meat='Rice Noodle' size='xl' color='bg-blue-100' />
                <Meat meat='Glass Noodle' size='xl' color='bg-blue-100' />
                <Meat meat='Ramen Noodle' size='xl' color='bg-blue-100' />
                <Meat meat='Wide Noodle' size='xl' color='bg-blue-100' />
                <Meat meat='Vermicelli Noodle' size='xl' color='bg-blue-100' />
            </div>
            <div className='flex-center text-3xl lg:text-5xl h-1/6 mb-4'>
                <TbMeat className='text-4xl sm:text-5xl mr-2' />
                <p className='font-serif font-semibold text-5xl'>Protein Options</p>
            </div>
            <div className='w-36 sm:w-48 h-1 mb-4 border bg-black mx-auto' />
            <div className='h-1/6 grid grid-cols-1 grid-rows-4 gap-4'>
                <div className='flex-center flex-wrap gap-4'>
                    <Meat meat='Chicken +$2' size='xl' color='bg-blue-100'/>
                    <Meat meat='Pork +$2' size='xl' color='bg-blue-100'/>
                    <MeatVegan meat='Tofu +$2' size='xl' color='bg-green-100'/>
                    <MeatVegan meat='Vegetarian +$2' size='lg' color='bg-green-100'/>
                </div>
                <div className='flex-center flex-wrap gap-4'>
                    <Meat meat='Beef +$4' size='xl' color='bg-red-100'/>
                    <Meat meat='Shrimp +$5' size='xl' color='bg-red-100'/>
                </div>
                <div className='flex-center flex-wrap gap-4'>
                    <Meat meat='Crispy Pork Belly $16' size='lg' color='bg-yellow-100'/>
                    <Meat meat='Duck $18' size='xl' color='bg-yellow-100'/>
                </div>
                <div className='flex-center flex-wrap gap-4'>
                    <Meat meat='Extra Boiled Egg +$1' size='lg' color='bg-gray-200'/>
                    <Meat meat='Extra Noodles +$2' size='lg' color='bg-gray-200'/>
                    <Meat meat='Extra Meat Ball +$3' size='lg' color='bg-gray-200'/>
                </div>
            </div>
        </div>

    )
}

export default MenuNoodleMeatChoice;
