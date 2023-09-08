import React, { useState } from 'react'

import {
  NextButton,
  PrevButton,
  ChangeImage,
  ScooterContainer,
  SeeInformationButton,
  SeeInformationContainer,
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
      <ScooterContainer>
        <h4>{name}</h4>
        <div>
          <PrevButton onClick={prevImage}>&lt;</PrevButton>
          <ChangeImage src={images[currentImage].src} width={images[currentImage].width} />
          <NextButton onClick={nextImage}>&gt;</NextButton>
        </div>
        <SeeInformationContainer>
          <p>{images[currentImage].price}</p>
          <SeeInformationButton>Ver Informacion</SeeInformationButton>
        </SeeInformationContainer>
      </ScooterContainer>
    </>
  )
}
