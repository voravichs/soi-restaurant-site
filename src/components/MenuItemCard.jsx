import React, {useState} from 'react';
import Modal from 'react-modal'
// import icons
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import { HiFire, HiOutlineFire } from 'react-icons/hi';

const Product = ({ product, location }) => {
  // destructure product
  const { image, title, price, description, spicy, category } = product;

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
  if (category !== "Dessert" && category !== "Drink" ) {
    for (let i = 0; i < spicy; i++) {
      spicyList.push({spicy: <HiFire className='text-2xl text-red-500'/>})
    }
    for (let i = spicy; i < 5; i++) {
      spicyList.push({spicy: <HiOutlineFire className='text-2xl'/>})
    }
  }

  return (
    <div className={`${location !== "menu" ? "w-72" : ""} border border-[#e4e4e4] rounded-md bg-white relative overflow-hidden group transition`}>
      {/* image */}
      <img
        className='h-48 object-cover w-full group-hover:scale-110 transition duration-300'
        src={image}
        alt=''
      />

      {/* buttons */}
      <div className='absolute top-3 right-3 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
        <button>
          <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
            <BsPlus className='text-3xl' />
          </div>
        </button>
        <div 
          onClick={handleOpenImage}
          className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl cursor-pointer'>
          <BsEyeFill />
        </div>
        {/* Modal upon expanding*/}
        <Modal
          isOpen={openImage}
          onRequestClose={handleCloseImage}
          className='absolute inset-10 border-soi-green rounded-md bg-white overflow-auto outline-none p-6 z-50'>
          <div className='relative w-full h-full'>
            <button 
              onClick={handleCloseImage}
              className='absolute top-10 right-10 flex-center rounded-lg bg-soi-green p-2 text-3xl'>
              <MdClose/>
            </button>
            <div className='flex-center h-1/2 sm:h-3/4'>
              <img
                className='h-full object-contain'
                src={image}
                alt=''
              />
            </div>
            <div className='font-serif h-1/2 sm:h-1/4 flex-center flex-col text-3xl text-center p-8'>
              <div className='flex'>
                {spicyList.map(item => (
                  item.spicy
                ))}
              </div>
              {description}
            </div>
          </div>
        </Modal>
      </div>

      {/* category & title & price */}
      <div className='h-20 my-8 mx-4 flex-center flex-col'>
        <div className='flex'>
          {spicyList.map(item => (
            item.spicy
          ))}
        </div>
        <h2 className='font-serif text-xl font-semibold text-center'>{title}</h2>
        <div className='text-lg font-semibold'>${price}</div>
      </div>
    </div>
  );
};

export default Product;
