import React, { useState } from 'react'
import Link from 'next/link'

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
          <Link href={`/products/accesories/${product.alias}`}>
            <ChangeImage
              src={product.images[currentImage].src}
              width={product.images[currentImage].width}
            />
          </Link>
          <NextButton onClick={nextImage}>&gt;</NextButton>
        </ImagesContainer>
        <SeeInformationContainer>
          <p>${product.price}</p>
          <SeeInformationButton href={`/products/accesories/${product.alias}`}>
            Ver Información
          </SeeInformationButton>
        </SeeInformationContainer>
      </AccesoriesContainer>
    </>
  )
}
