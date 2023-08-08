import { Carousel, IconButton } from "@material-tailwind/react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

import { images } from '../../../constants'

const FoodCarousel = () => (
  <Carousel
    className="rounded-xl"
    prevArrow={({ handlePrev }) => (
      <IconButton
        variant="text"
        color="white"
        size="lg"
        onClick={handlePrev}
        className="!absolute top-2/4 left-4 -translate-y-2/4"
      >
        <AiOutlineArrowLeft className="text-3xl" />
      </IconButton>
    )}
    nextArrow={({ handleNext }) => (
      <IconButton
        variant="text"
        color="white"
        size="lg"
        onClick={handleNext}
        className="!absolute top-2/4 !right-4 -translate-y-2/4"
      >
        <AiOutlineArrowRight className="text-3xl" />
      </IconButton>
    )}
  >
    <img
      src={images.carousel1}
      alt="1"
      className="h-full w-full object-cover"
    />
    <img
      src={images.carousel2}
      alt="2"
      className="h-full w-full object-cover"
    />
    <img
      src={images.carousel3}
      alt="3"
      className="h-full w-full object-cover"
    />
    <img
      src={images.carousel4}
      alt="4"
      className="h-full w-full object-cover"
    />
    <img
      src={images.carousel5}
      alt="5"
      className="h-full w-full object-cover"
    />
    <img
      src={images.carousel6}
      alt="6"
      className="h-full w-full object-cover"
    />
  </Carousel>
)

export default FoodCarousel;