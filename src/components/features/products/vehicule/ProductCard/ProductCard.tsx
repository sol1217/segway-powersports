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
  const [selectedImage, setSelectedImage] = useState(product.images[0].color)

  return (
    <>
      <VehiculeContainer>
        {product.images.map(({ url, color }, i) => (
          <ImageProduct
            key={i}
            style={{
              height: selectedImage === color ? '200px' : '0',
              opacity: selectedImage === color ? 1 : 0,
            }}
            src={url}
            alt=""
          />
        ))}

        <ProductContentContainer>
          <ChangeColorContainer>
            {product.images.map(({ color }, i) => (
              <ColorsContainer key={i} onClick={() => setSelectedImage(color)}>
                <ColorImage src={colorImages[color]} width={40} height={40} />
              </ColorsContainer>
            ))}
          </ChangeColorContainer>
          <NameOfProdyct>{product.name}</NameOfProdyct>
          <DescriptionContainer>{product.description}</DescriptionContainer>
          <SeeInformationButton href={`/products/vehicules/${product.alias}`}>
            Ver Informacion
          </SeeInformationButton>
        </ProductContentContainer>
      </VehiculeContainer>
    </>
  )
}
