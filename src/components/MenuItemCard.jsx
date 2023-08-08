import React, { useState } from 'react';
import Modal from 'react-modal'

// import icons
import { BsEyeFill } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import { HiFire, HiOutlineFire } from 'react-icons/hi';

// Import componenets
import Meat from './Meat';

const MenuItemCard = ({ product, location }) => {
  // destructure product
  const { image, title, price, altprice, description, spicy, category, id, choice, choices } = product;

  // State of open image
  const [openImage, setOpenImage] = useState(false);

  // Modal Open/Close
  function handleOpenImage() {
    setOpenImage(true);
  }
  function handleCloseImage() {
    setOpenImage(false);
  }

  // Spicy
  let spicyList = [];
  if (category !== "Dessert" && category !== "Drink") {
    for (let i = 0; i < spicy; i++) {
      spicyList.push({
        spicy: <HiFire className='text-3xl text-red-500' key={`${i}${id}`} />,
        bigspicy: <HiFire className='text-4xl text-red-500' key={`${i}${id}`} />
      })
    }
    for (let i = spicy; i < 5; i++) {
      spicyList.push({
        spicy: <HiOutlineFire className='text-3xl opacity-50' key={`${i}${id}`} />,
        bigspicy: <HiOutlineFire className='text-4xl opacity-50' key={`${i}${id}`} />
      })
    }
  }

  return (
    <div className={`${location !== "menu" ? "w-72 h-full" : ""} border border-2 rounded-xl bg-white relative overflow-hidden group transition flex flex-col shadow-sm`}>
      {/* image */}
      <img
        className='h-48 object-cover w-full group-hover:scale-110 transition duration-300 shrink-0'
        src={image}
        alt=''
      />

      {/* buttons */}
      <div className='absolute top-3 right-5 lg:right-3 lg:group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300'>
        <div
          onClick={handleOpenImage}
          className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl cursor-pointer'>
          <BsEyeFill />
        </div>
        {/* Modal upon expanding*/}
        <Modal
          isOpen={openImage}
          onRequestClose={handleCloseImage}
          ariaHideApp={false}
          className='absolute inset-10 rounded-xl bg-white border shadow-2xl overflow-auto outline-none p-6 z-50'>
          <div className='relative w-full h-full flex-center flex-col'>
            {/* Close */}
            <button
              onClick={handleCloseImage}
              className='absolute top-5 right-5 flex-center rounded-lg bg-soi-green p-2 text-3xl'>
              <MdClose />
            </button>
            <div className='h-full'>
              {/* Image */}
              <div className='flex-center h-1/2 sm:h-2/3'>
                <img
                  className='h-full object-contain'
                  src={image}
                  alt=''
                />
              </div>
              {/* Spicy, Desc, and Choices */}
              <div className='font-serif h-1/2 sm:h-1/3 flex-center flex-col text-3xl text-center p-8'>
                <div className='flex'>
                  {spicyList.map(item => (
                    item.bigspicy
                  ))}
                </div>
                <div className='text-2xl md:text-4xl my-4 w-full'>
                  {description}  
                </div>
                <div className='mt-2 w-full flex-center flex-col sm:flex-row gap-4'>
                  {choices.map((meat) => {
                    return (
                      <Meat meat={meat} size='xl' color='bg-gray-200' key={`${id}-${meat}`} />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>

      {/* category & title & price */}
      <div className='h-full my-8 mx-4 flex-center flex-col'>
        <div className='flex'>
          {spicyList.map(item => (
            item.spicy
          ))}
        </div>
        <div className='font-serif text-2xl font-bold text-center'>
          {title}
        </div>
        <div className='text-lg font-semibold'>
          {altprice == null ? (
            `$${price}`
          ) : price !== altprice ? (
            <div>
              <p className='text-md'>Lunch: ${price}</p>
              <p className='text-md'>Dinner: ${altprice}</p>
            </div>
          ) : (
            `$${price}`
          )}
        </div>
        {choice && (
          <div className='mt-4 flex flex-col gap-1'>
            {choices.map((meat) => {
              return (
                <Meat meat={meat} size='sm' color='bg-gray-200' key={`${id}-${meat}`} />
              )
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItemCard;
