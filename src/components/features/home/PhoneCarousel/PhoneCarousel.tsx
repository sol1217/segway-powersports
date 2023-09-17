import React, { useState } from 'react'

import next from '@assets/png/icons-adelante.png'
import back from '@assets/png/icons-atrás.png'
import screenvillain from '@assets/png/screen-villain.png'
import {
  AppContainer,
  VillainImage,
  NextPhoneButton,
  PrevPhoneButton,
  PhoneItemCarousel,
  TitleAppContainer,
  PhoneItemsContainer,
  PhoneCarouselContainer,
} from '@features/home/PhoneCarousel/PhoneCarousel.elements'

interface CarouselPhoneProps {
  imagesPhone: string[]
}

export const PhoneCarousel: React.FC<CarouselPhoneProps> = ({ imagesPhone }) => {
  const [currentImage, setCurrentImage] = useState(0)

  const nextSlide = () => {
    setCurrentImage((prevIndex) => (prevIndex === imagesPhone.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentImage((prevIndex) => (prevIndex === 0 ? imagesPhone.length - 1 : prevIndex - 1))
  }
  return (
    <>
      <PhoneCarouselContainer>
        <AppContainer>
          <TitleAppContainer>
            <h2>Añade nuestro vehículo a tu App</h2>
          </TitleAppContainer>
          <p>
            Segway te brinda una interacción inteligente con tu vehículo, te llevará a lugares
            épicos para viajar.
          </p>
        </AppContainer>
        <PhoneItemCarousel>
          <VillainImage src={screenvillain.src} width={360} height={300} />
          <PhoneItemsContainer>
            <NextPhoneButton onClick={nextSlide}>
              <img src={back.src} />
            </NextPhoneButton>
            <img
              src={imagesPhone[currentImage]}
              alt={`Image ${currentImage}`}
              width="89%"
              height="95%"
              style={{ borderRadius: '20px' }}
            />
            <PrevPhoneButton onClick={prevSlide}>
              <img src={next.src} />
            </PrevPhoneButton>
          </PhoneItemsContainer>
        </PhoneItemCarousel>
      </PhoneCarouselContainer>
    </>
  )
}
