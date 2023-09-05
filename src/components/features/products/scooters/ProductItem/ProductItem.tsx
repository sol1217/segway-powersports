import React, { useState } from 'react'

import {
  NextButton,
  PrevButton,
  CarouselImage,
  ButtonInformation,
  SecondProductSection,
  SeeInformationProduct,
} from '@features/products/scooters/ProductItem/ProductItem.elements'

type Image = {
  src: any
  width: number
  price: string
}

type Product = {
  name: string
  images: Image[]
}

export const ProductItem: React.FC<Product> = ({ images, name }) => {
  const [currentImage, setCurrentImage] = useState<number>(0)

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length)
  }
  return (
    <>
      {' '}
      <SecondProductSection>
        <h4>{name}</h4>
        <div>
          <PrevButton onClick={prevImage}>&lt;</PrevButton>
          <img
            style={{
              transform: 'translateY(0)',
              transition:
                'opacity 0.5s ease, height 0.5s ease, transform 0.5s ease;}} src={images[currentImage].src} width={images[currentImage].width}',
            }}
            src={images[currentImage].src}
            width={images[currentImage].width}
          />
          <NextButton onClick={nextImage}>&gt;</NextButton>
        </div>
        <ButtonInformation>
          <p>{images[currentImage].price}</p>
          <SeeInformationProduct>Ver Informacion</SeeInformationProduct>
        </ButtonInformation>
      </SecondProductSection>
    </>
  )
}
