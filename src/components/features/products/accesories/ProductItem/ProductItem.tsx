import React, { useState } from 'react'

import {
  NextButton,
  PrevButton,
  ChangeImage,
  ImagesContainer,
  AccesoriesContainer,
  SeeInformationButton,
  SeeInformationContainer,
} from './ProductItem.elements'
import { ProductItemProps } from './ProductItem.types'

export const ProductItem = ({ product }: ProductItemProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0)

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + product.images.length) % product.images.length)
  }
  return (
    <>
      <AccesoriesContainer>
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
          <SeeInformationButton href={`/products/accesories/${product.alias}`}>
            Ver Informacion
          </SeeInformationButton>
        </SeeInformationContainer>
      </AccesoriesContainer>
    </>
  )
}
