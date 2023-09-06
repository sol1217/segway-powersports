import React, { useState } from 'react'

import {
  NextButton,
  PrevButton,
  ChangeImage,
  ButtonInformation,
  SecondProductSection,
  SeeInformationProduct,
} from '@features/products/accesories/ProductItem/ProductItem.elements'

type Image = {
  src: any
  width: number
  price: string
}

type ProductAce = {
  name: string
  images: Image[]
}

export const ProductItem: React.FC<ProductAce> = ({ images, name }) => {
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
          <ChangeImage src={images[currentImage].src} width={images[currentImage].width} />
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
