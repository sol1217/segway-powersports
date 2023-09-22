import React, { useState } from 'react'

import {
  NextButton,
  PrevButton,
  ChangeImage,
  ImagesContainer,
  ScooterContainer,
  SeeInformationButton,
  SeeInformationContainer,
} from '@features/products/scooters/ProductItem/ProductItem.elements'
import { ProductScooterProps } from '@features/products/scooters/ProductItem/ProductItem.types'

export const ProductItem = ({ product }: ProductScooterProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0)

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + product.images.length) % product.images.length)
  }
  return (
    <>
      <ScooterContainer>
        <h4>{product.name}</h4>
        <ImagesContainer>
          <PrevButton onClick={prevImage}>&lt;</PrevButton>
          <ChangeImage
            src={product.images[currentImage].src}
            width={product.images[currentImage].width}
          />
          <NextButton onClick={nextImage}>&gt;</NextButton>
        </ImagesContainer>
        <SeeInformationContainer>
          <p>{product.images[currentImage].price}</p>
          <SeeInformationButton href={`/products/scooters/${product.alias}`}>
            Ver Informacion
          </SeeInformationButton>
        </SeeInformationContainer>
      </ScooterContainer>
    </>
  )
}
