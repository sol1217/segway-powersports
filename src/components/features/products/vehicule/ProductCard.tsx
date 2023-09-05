import { useState } from 'react'

import { IProduct, colorImages } from '@features/products/vehicule/types'
import {
  ButtonImage,
  ProductWrap,
  ImageProduct,
  ButtonProduct,
  NameOfProdyct,
  ChangeImageColor,
  ProductViewContainer,
  SeeInformationProduct,
  ProductContentContainer,
} from '@features/products/vehicule/VehiculeProducts.elements'

export const ProductCard = ({ product }: { product: IProduct }) => {
  const { images, name, description } = product
  const [selectedImage, setSelectedImage] = useState(images[0].color)

  return (
    <>
      <ProductWrap>
        {images.map(({ url, color }, i) => (
          <ImageProduct
            key={i}
            style={{
              height: selectedImage === color ? '200px' : '0',
              opacity: selectedImage === color ? 1 : 0,
            }}
            src={url}
            alt=""
            height={200}
          />
        ))}

        <ProductContentContainer>
          <ChangeImageColor>
            {images.map(({ color }, i) => (
              <ButtonProduct key={i} onClick={() => setSelectedImage(color)}>
                <ButtonImage src={colorImages[color]} width={40} height={40} />
              </ButtonProduct>
            ))}
          </ChangeImageColor>
          <NameOfProdyct>{name}</NameOfProdyct>
          <p>{description}</p>
          <SeeInformationProduct>Ver + Informacion</SeeInformationProduct>
        </ProductContentContainer>
      </ProductWrap>
    </>
  )
}
