import React, { useState } from 'react'

import { ProductItemProps } from '@features/products/accesories-vehicules/AccesoriesVehicules.types'
import {
  NextButton,
  PrevButton,
  ChangeImage,
  AccesoriesContainer,
  SeeInformationButton,
  SeeInformationContainer,
} from '@features/products/accesories-vehicules/productItem/ProductItem.elements'

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
        <div>
          <PrevButton onClick={prevImage}>&lt;</PrevButton>
          <ChangeImage
            src={product.images[currentImage].src}
            width={product.images[currentImage].width}
          />
          <NextButton onClick={nextImage}>&gt;</NextButton>
        </div>
        <SeeInformationContainer>
          <p>{product.images[currentImage].price}</p>
          <SeeInformationButton href={`/products/${product.alias}`}>
            Ver Informacion
          </SeeInformationButton>
        </SeeInformationContainer>
      </AccesoriesContainer>
    </>
  )
}
