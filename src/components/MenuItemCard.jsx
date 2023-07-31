import React, {useState} from 'react';
import Modal from 'react-modal'

// import icons
import { BsPlus, BsEyeFill } from 'react-icons/bs';
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
  if (category !== "Dessert" && category !== "Drink" ) {
    for (let i = 0; i < spicy; i++) {
      spicyList.push({
        spicy: <HiFire className='text-2xl text-red-500' key={`${i}${id}`}/>,
        bigspicy: <HiFire className='text-4xl text-red-500' key={`${i}${id}`}/>
      })
    }
    for (let i = spicy; i < 5; i++) {
      spicyList.push({
        spicy: <HiOutlineFire className='text-2xl' key={`${i}${id}`}/>,
        bigspicy: <HiOutlineFire className='text-4xl' key={`${i}${id}`}/>
      })
    }
  }

  return (
    <div className={`${location !== "menu" ? "w-72" : ""} border border-[#e4e4e4] rounded-md bg-white relative overflow-hidden group transition flex flex-col`}>
      {/* image */}
      <img
        className='h-48 object-cover w-full group-hover:scale-110 transition duration-300 shrink-0'
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
          ariaHideApp={false}
          className='absolute inset-10 border-soi-green rounded-md bg-white overflow-auto outline-none p-6 z-50'>
          <div className='relative w-full h-full flex-center flex-col'>
            {/* Close */}
            <button 
              onClick={handleCloseImage}
              className='absolute top-5 right-5 flex-center rounded-lg bg-soi-green p-2 text-3xl'>
              <MdClose/>
            </button>
            {/* Image */}
            <div className='flex-center h-1/2 sm:h-3/4'>
              <img
                className='h-full object-contain'
                src={image}
                alt=''
              />
            </div>
            {/* Spicy, Desc, and Choices */}
            <div className='font-serif h-1/2 sm:h-1/4 flex-center flex-col text-3xl text-center p-8'>
              <div className='flex'>
                {spicyList.map(item => (
                  item.bigspicy
                ))}
              </div>
              {description}
              <div className='mt-2 w-1/3 flex-center gap-4'>
                {choices.map((meat)=> {
                  return (
                    <Meat meat={meat} key={`${id}-${meat}`}/>
                  )
                })}
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
        <div className='font-serif text-xl font-semibold text-center'>
          {title}
        </div>
        <div className='text-lg font-semibold'>
          {price !== altprice ? (
            <div>
              <p>Lunch: ${price}</p>
              <p>Dinner: ${altprice}</p>
            </div>
          ) : (
            `$${altprice}`
          )}
        </div>
        {choice && (
          <div className='mt-2'>
            {choices.map((meat)=> {
              return (
                <Meat meat={meat} key={`${id}-${meat}`}/>
              )
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItemCard;
