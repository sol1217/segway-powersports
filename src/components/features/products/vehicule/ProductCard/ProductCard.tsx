import { useState } from 'react'

import { IProduct, colorImages } from '@features/products/vehicule/types'
import {
  ColorImage,
  ImageProduct,
  NameOfProdyct,
  ColorsContainer,
  VehiculeContainer,
  ChangeColorContainer,
  DescriptionContainer,
  SeeInformationButton,
  ProductContentContainer,
} from '@features/products/vehicule/ProductCard/ProductCard.elements'

export const ProductCard = ({ product }: { product: IProduct }) => {
  const { images, name, description } = product
  const [selectedImage, setSelectedImage] = useState(images[0].color)

  return (
    <>
      <VehiculeContainer>
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
          <ChangeColorContainer>
            {images.map(({ color }, i) => (
              <ColorsContainer key={i} onClick={() => setSelectedImage(color)}>
                <ColorImage src={colorImages[color]} width={40} height={40} />
              </ColorsContainer>
            ))}
          </ChangeColorContainer>
          <NameOfProdyct>{name}</NameOfProdyct>
          <DescriptionContainer>{description}</DescriptionContainer>
          <SeeInformationButton href={`/products/${product.alias}`}>
            Ver Informacion
          </SeeInformationButton>
        </ProductContentContainer>
      </VehiculeContainer>
    </>
  )
}
