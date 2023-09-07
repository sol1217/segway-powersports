import React, { useState, Component } from 'react'
import Slider from 'react-slick'

import snarleratv from '@assets/jpeg/snarler.jpeg'
import villainatv from '@assets/jpeg/villain-08.jpg'
import villain from '@assets/jpeg/villain.jpeg'
import prev from '@assets/png/back.png'
import next from '@assets/png/next.png'
import {
  CarouselContainer,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselItemContainer,
} from '@features/home/Carousel/Carousel.elements'

interface CarouselProps {
  images: string[]
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  return (
    <CarouselContainer>
      <CarouselNextButton onClick={nextSlide}>
        <img src={next.src} />
      </CarouselNextButton>
      <CarouselItemContainer>
        <img src={images[currentIndex]} alt={`Image ${currentIndex}`} width="100%" height="100%" />
      </CarouselItemContainer>
      <CarouselPrevButton onClick={prevSlide}>
        <img src={prev.src} />
      </CarouselPrevButton>
    </CarouselContainer>
  )
}
